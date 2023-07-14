:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nullranges'
.. highlight: bash

bioconductor-nullranges
=======================

.. conda:recipe:: bioconductor-nullranges
   :replaces_section_title:
   :noindex:

   Generation of null ranges via bootstrapping or covariate matching

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/nullranges.html
   :license: GPL-3
   :recipe: /`bioconductor-nullranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nullranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nullranges/meta.yaml>`_

   Modular package for generation of sets of ranges representing the null hypothesis. These can take the form of bootstrap samples of ranges \(using the block bootstrap framework of Bickel et al 2010\)\, or sets of control ranges that are matched across one or more covariates. nullranges is designed to be inter\-operable with other packages for analysis of genomic overlap enrichment\, including the plyranges Bioconductor package.


.. conda:package:: bioconductor-nullranges

   |downloads_bioconductor-nullranges| |docker_bioconductor-nullranges|

   :versions:
      
      

      ``1.6.2-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-plyranges: ``>=1.20.0,<1.21.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-progress: 
   :depends r-rlang: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nullranges

   and update with::

      conda update bioconductor-nullranges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nullranges:<tag>

   (see `bioconductor-nullranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nullranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nullranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nullranges
   :alt:   (downloads)
.. |docker_bioconductor-nullranges| image:: https://quay.io/repository/biocontainers/bioconductor-nullranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nullranges
.. _`bioconductor-nullranges/tags`: https://quay.io/repository/biocontainers/bioconductor-nullranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nullranges";
        var versions = ["1.6.2","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nullranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nullranges/README.html