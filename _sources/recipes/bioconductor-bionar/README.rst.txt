:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bionar'
.. highlight: bash

bioconductor-bionar
===================

.. conda:recipe:: bioconductor-bionar
   :replaces_section_title:
   :noindex:

   Biological Network Analysis in R

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BioNAR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bionar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionar/meta.yaml>`_

   the R package BioNAR\, developed to step by step analysis of PPI network. The aim is to quantify and rank each protein’s simultaneous impact into multiple complexes based on network topology and clustering. Package also enables estimating of co\-occurrence of diseases across the network and specific clusters pointing towards shared\/common mechanisms.


.. conda:package:: bioconductor-bionar

   |downloads_bioconductor-bionar| |docker_bioconductor-bionar|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-fgsea: ``>=1.24.0,<1.25.0``
   :depends bioconductor-go.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-synaptome.db: ``>=0.99.0,<0.100.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-clustercons: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-latex2exp: 
   :depends r-powerlaw: 
   :depends r-rdpack: 
   :depends r-rspectra: 
   :depends r-rspectral: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bionar

   and update with::

      conda update bioconductor-bionar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bionar:<tag>

   (see `bioconductor-bionar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bionar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bionar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bionar
   :alt:   (downloads)
.. |docker_bioconductor-bionar| image:: https://quay.io/repository/biocontainers/bioconductor-bionar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bionar
.. _`bioconductor-bionar/tags`: https://quay.io/repository/biocontainers/bioconductor-bionar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bionar";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bionar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bionar/README.html