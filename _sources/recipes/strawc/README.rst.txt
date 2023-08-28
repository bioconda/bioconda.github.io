:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strawc'
.. highlight: bash

strawc
======

.. conda:recipe:: strawc
   :replaces_section_title:
   :noindex:

   Straw bound with pybind11

   :homepage: https://github.com/aidenlab/straw
   :license: MIT / MIT
   :recipe: /`strawc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strawc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strawc/meta.yaml>`_

   


.. conda:package:: strawc

   |downloads_strawc| |docker_strawc|

   :versions:
      
      

      ``0.0.2.1-3``,  ``0.0.2.1-2``,  ``0.0.2.1-1``,  ``0.0.2.1-0``

      

   
   :depends libcurl: ``>=8.1.2,<9.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pybind11: ``>=2.4``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install strawc

   and update with::

      mamba update strawc

  To create a new environment, run::

      mamba create --name myenvname strawc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strawc:<tag>

   (see `strawc/tags`_ for valid values for ``<tag>``)


.. |downloads_strawc| image:: https://img.shields.io/conda/dn/bioconda/strawc.svg?style=flat
   :target: https://anaconda.org/bioconda/strawc
   :alt:   (downloads)
.. |docker_strawc| image:: https://quay.io/repository/biocontainers/strawc/status
   :target: https://quay.io/repository/biocontainers/strawc
.. _`strawc/tags`: https://quay.io/repository/biocontainers/strawc?tab=tags


.. raw:: html

    <script>
        var package = "strawc";
        var versions = ["0.0.2.1","0.0.2.1","0.0.2.1","0.0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strawc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strawc/README.html