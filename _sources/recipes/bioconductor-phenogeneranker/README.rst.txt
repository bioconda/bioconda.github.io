:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenogeneranker'
.. highlight: bash

bioconductor-phenogeneranker
============================

.. conda:recipe:: bioconductor-phenogeneranker
   :replaces_section_title:
   :noindex:

   PhenoGeneRanker\: A gene and phenotype prioritization tool

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PhenoGeneRanker.html
   :license: Creative Commons Attribution 4.0 International License
   :recipe: /`bioconductor-phenogeneranker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenogeneranker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenogeneranker/meta.yaml>`_

   This package is a gene\/phenotype prioritization tool that utilizes multiplex heterogeneous gene phenotype network. PhenoGeneRanker allows multi\-layer gene and phenotype networks. It also calculates empirical p\-values of gene\/phenotype ranking using random stratified sampling of genes\/phenotypes based on their connectivity degree in the network. https\:\/\/dl.acm.org\/doi\/10.1145\/3307339.3342155.


.. conda:package:: bioconductor-phenogeneranker

   |downloads_bioconductor-phenogeneranker| |docker_bioconductor-phenogeneranker|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-igraph: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phenogeneranker

   and update with::

      conda update bioconductor-phenogeneranker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phenogeneranker:<tag>

   (see `bioconductor-phenogeneranker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phenogeneranker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenogeneranker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenogeneranker
   :alt:   (downloads)
.. |docker_bioconductor-phenogeneranker| image:: https://quay.io/repository/biocontainers/bioconductor-phenogeneranker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenogeneranker
.. _`bioconductor-phenogeneranker/tags`: https://quay.io/repository/biocontainers/bioconductor-phenogeneranker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phenogeneranker";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenogeneranker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenogeneranker/README.html