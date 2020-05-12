:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adam'
.. highlight: bash

bioconductor-adam
=================

.. conda:recipe:: bioconductor-adam
   :replaces_section_title:

   ADAM\: Activity and Diversity Analysis Module

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/ADAM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adam/meta.yaml>`_

   ADAM is a GSEA R package created to group a set of genes from comparative samples \(control versus experiment\) belonging to different species according to their respective functions \(Gene Ontology and KEGG pathways as default\) and show their significance by calculating p\-values referring togene diversity and activity. Each group of genes is called GFAG \(Group of Functionally Associated Genes\).


.. conda:package:: bioconductor-adam

   |downloads_bioconductor-adam| |docker_bioconductor-adam|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-go.db: >=3.11.0,<3.12.0
   :depends bioconductor-keggrest: >=1.28.0,<1.29.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dplyr: >=0.7.6
   :depends r-dt: >=0.4
   :depends r-knitr: 
   :depends r-pbapply: >=1.3-4
   :depends r-rcpp: >=0.12.18
   :depends r-stringr: >=1.3.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adam

   and update with::

      conda update bioconductor-adam

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adam:<tag>

   (see `bioconductor-adam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adam
   :alt:   (downloads)
.. |docker_bioconductor-adam| image:: https://quay.io/repository/biocontainers/bioconductor-adam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adam
.. _`bioconductor-adam/tags`: https://quay.io/repository/biocontainers/bioconductor-adam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adam/README.html