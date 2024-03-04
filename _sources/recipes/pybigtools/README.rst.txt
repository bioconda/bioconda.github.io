:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybigtools'
.. highlight: bash

pybigtools
==========

.. conda:recipe:: pybigtools
   :replaces_section_title:
   :noindex:

   pybigtools\: Python bindings to the Bigtools Rust library for high\-performance BigWig and BigBed I\/O

   :homepage: https://github.com/jackh726/bigtools/
   :documentation: https://bigtools.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pybigtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybigtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybigtools/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.10606493`

   


.. conda:package:: pybigtools

   |downloads_pybigtools| |docker_pybigtools|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pybigtools

   and update with::

      mamba update pybigtools

  To create a new environment, run::

      mamba create --name myenvname pybigtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybigtools:<tag>

   (see `pybigtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pybigtools| image:: https://img.shields.io/conda/dn/bioconda/pybigtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pybigtools
   :alt:   (downloads)
.. |docker_pybigtools| image:: https://quay.io/repository/biocontainers/pybigtools/status
   :target: https://quay.io/repository/biocontainers/pybigtools
.. _`pybigtools/tags`: https://quay.io/repository/biocontainers/pybigtools?tab=tags


.. raw:: html

    <script>
        var package = "pybigtools";
        var versions = ["0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybigtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybigtools/README.html