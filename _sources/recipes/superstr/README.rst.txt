:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'superstr'
.. highlight: bash

superstr
========

.. conda:recipe:: superstr
   :replaces_section_title:
   :noindex:

   A lightweight\, alignment\-free utility for detecting repeat\-containing reads in short\-read WGS\, WES and RNA\-seq data.

   :homepage: https://github.com/bahlolab/superSTR
   :license: GPL-2.0
   :recipe: /`superstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superstr/meta.yaml>`_

   


.. conda:package:: superstr

   |downloads_superstr| |docker_superstr|

   :versions:
      
      

      ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends arch-py: ``>=4.15``
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends libcurl: ``>=8.11.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends matplotlib-base: ``>=3.4.1``
   :depends mpmath: ``>=1.2.1``
   :depends numpy: ``>=1.20.1``
   :depends pandas: ``>=1.2.2``
   :depends python: ``>=3.8.3``
   :depends scipy: ``>=1.6.1``
   :depends seaborn: ``>=0.11.1``
   :depends statsmodels: ``>=0.12.2``
   :depends tqdm: ``>=4.59``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install superstr

   and update with::

      mamba update superstr

  To create a new environment, run::

      mamba create --name myenvname superstr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/superstr:<tag>

   (see `superstr/tags`_ for valid values for ``<tag>``)


.. |downloads_superstr| image:: https://img.shields.io/conda/dn/bioconda/superstr.svg?style=flat
   :target: https://anaconda.org/bioconda/superstr
   :alt:   (downloads)
.. |docker_superstr| image:: https://quay.io/repository/biocontainers/superstr/status
   :target: https://quay.io/repository/biocontainers/superstr
.. _`superstr/tags`: https://quay.io/repository/biocontainers/superstr?tab=tags


.. raw:: html

    <script>
        var package = "superstr";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/superstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/superstr/README.html