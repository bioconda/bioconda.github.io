:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellhashr'
.. highlight: bash

bioconductor-cellhashr
======================

.. conda:recipe:: bioconductor-cellhashr
   :replaces_section_title:
   :noindex:

   An R package designed to demultiplex cell hashing data.
       More information in https\:\/\/bimberlab.github.io\/cellhashR\/Lab B \(2024\). 
      cellhashR\: A Package for Demultiplexing Cell Hashing Data.


   :homepage: https://github.com/BimberLab/cellhashR
   :license: MIT / MIT
   :recipe: /`bioconductor-cellhashr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellhashr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellhashr/meta.yaml>`_

   


.. conda:package:: bioconductor-cellhashr

   |downloads_bioconductor-cellhashr| |docker_bioconductor-cellhashr|

   :versions:
      
      

      ``1.04-0``

      

   
   :depends bioconductor-demuxmix: 
   :depends bioconductor-dropletutils: 
   :depends bioconductor-nempi: 
   :depends bioconductor-preprocesscore: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: 
   :depends r-egg: 
   :depends r-essentials: 
   :depends r-ggextra: 
   :depends r-ggforce: 
   :depends r-ggthemes: 
   :depends r-patchwork: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :depends r-rcppparallel: 
   :depends r-rcppprogress: 
   :depends r-reticulate: 
   :depends r-rmdformats: 
   :depends r-seurat: 
   :depends r-seuratobject: 
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

      mamba install bioconductor-cellhashr

   and update with::

      mamba update bioconductor-cellhashr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellhashr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellhashr:<tag>

   (see `bioconductor-cellhashr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellhashr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellhashr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellhashr
   :alt:   (downloads)
.. |docker_bioconductor-cellhashr| image:: https://quay.io/repository/biocontainers/bioconductor-cellhashr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellhashr
.. _`bioconductor-cellhashr/tags`: https://quay.io/repository/biocontainers/bioconductor-cellhashr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellhashr";
        var versions = ["1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellhashr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellhashr/README.html