:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomegsa.data'
.. highlight: bash

bioconductor-reactomegsa.data
=============================

.. conda:recipe:: bioconductor-reactomegsa.data
   :replaces_section_title:
   :noindex:

   Companion data package for the ReactomeGSA package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/ReactomeGSA.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-reactomegsa.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa.data/meta.yaml>`_

   Companion data sets to showcase the functionality of the ReactomeGSA package. This package contains proteomics and RNA\-seq data of the melanoma B\-cell induction study by Griss et al. and scRNA\-seq data from Jerby\-Arnon et al.


.. conda:package:: bioconductor-reactomegsa.data

   |downloads_bioconductor-reactomegsa.data| |docker_bioconductor-reactomegsa.data|

   :versions:
      
      

      ``1.14.0-0``,  ``1.11.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-reactomegsa: ``>=1.14.0,<1.15.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-seurat: 
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

      mamba install bioconductor-reactomegsa.data

   and update with::

      mamba update bioconductor-reactomegsa.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reactomegsa.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactomegsa.data:<tag>

   (see `bioconductor-reactomegsa.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactomegsa.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomegsa.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomegsa.data
   :alt:   (downloads)
.. |docker_bioconductor-reactomegsa.data| image:: https://quay.io/repository/biocontainers/bioconductor-reactomegsa.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomegsa.data
.. _`bioconductor-reactomegsa.data/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomegsa.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactomegsa.data";
        var versions = ["1.14.0","1.11.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomegsa.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomegsa.data/README.html