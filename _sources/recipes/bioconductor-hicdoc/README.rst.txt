:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicdoc'
.. highlight: bash

bioconductor-hicdoc
===================

.. conda:recipe:: bioconductor-hicdoc
   :replaces_section_title:
   :noindex:

   A\/B compartment detection and differential analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/HiCDOC.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-hicdoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdoc/meta.yaml>`_

   HiCDOC normalizes intrachromosomal Hi\-C matrices\, uses unsupervised learning to predict A\/B compartments from multiple replicates\, and detects significant compartment changes between experiment conditions. It provides a collection of functions assembled into a pipeline to filter and normalize the data\, predict the compartments and visualize the results. It accepts several type of data\: tabular \`.tsv\` files\, Cooler \`.cool\` or \`.mcool\` files\, Juicer \`.hic\` files or HiC\-Pro \`.matrix\` and \`.bed\` files.


.. conda:package:: bioconductor-hicdoc

   |downloads_bioconductor-hicdoc| |docker_bioconductor-hicdoc|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-multihiccompare: ``>=1.18.0,<1.19.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-zlibbioc: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggextra: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-pbapply: 
   :depends r-rcpp: ``>=0.12.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicdoc

   and update with::

      conda update bioconductor-hicdoc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicdoc:<tag>

   (see `bioconductor-hicdoc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicdoc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicdoc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicdoc
   :alt:   (downloads)
.. |docker_bioconductor-hicdoc| image:: https://quay.io/repository/biocontainers/bioconductor-hicdoc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicdoc
.. _`bioconductor-hicdoc/tags`: https://quay.io/repository/biocontainers/bioconductor-hicdoc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicdoc";
        var versions = ["1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicdoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicdoc/README.html