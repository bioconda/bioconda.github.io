:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybmtools'
.. highlight: bash

pybmtools
=========

.. conda:recipe:: pybmtools
   :replaces_section_title:
   :noindex:

   A python extension written in C for quick access to DNA methylation BM files.

   :homepage: https://github.com/ZhouQiangwei/pybmtools
   :license: MIT
   :recipe: /`pybmtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybmtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybmtools/meta.yaml>`_

   


.. conda:package:: pybmtools

   |downloads_pybmtools| |docker_pybmtools|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends libcurl: ``>=8.0.1,<9.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
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

      mamba install pybmtools

   and update with::

      mamba update pybmtools

  To create a new environment, run::

      mamba create --name myenvname pybmtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybmtools:<tag>

   (see `pybmtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pybmtools| image:: https://img.shields.io/conda/dn/bioconda/pybmtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pybmtools
   :alt:   (downloads)
.. |docker_pybmtools| image:: https://quay.io/repository/biocontainers/pybmtools/status
   :target: https://quay.io/repository/biocontainers/pybmtools
.. _`pybmtools/tags`: https://quay.io/repository/biocontainers/pybmtools?tab=tags


.. raw:: html

    <script>
        var package = "pybmtools";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybmtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybmtools/README.html