:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flames'
.. highlight: bash

bioconductor-flames
===================

.. conda:recipe:: bioconductor-flames
   :replaces_section_title:
   :noindex:

   FLAMES\: Full Length Analysis of Mutations and Splicing in long read RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/FLAMES.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-flames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flames/meta.yaml>`_

   Semi\-supervised isoform detection and annotation from both bulk and single\-cell long read RNA\-seq data. Flames provides automated pipelines for analysing isoforms\, as well as intermediate functions for manual execution.


.. conda:package:: bioconductor-flames

   |downloads_bioconductor-flames| |docker_bioconductor-flames|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``0.99.31-0``

      

   
   :depends bioconductor-basilisk: ``>=1.6.0,<1.7.0``
   :depends bioconductor-rhtslib: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-scater: ``>=1.22.0,<1.23.0``
   :depends bioconductor-scuttle: ``>=1.4.0,<1.5.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-zlibbioc: ``>=1.40.0,<1.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14.0.4``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :depends r-reticulate: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flames

   and update with::

      conda update bioconductor-flames

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flames:<tag>

   (see `bioconductor-flames/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flames| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flames.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flames
   :alt:   (downloads)
.. |docker_bioconductor-flames| image:: https://quay.io/repository/biocontainers/bioconductor-flames/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flames
.. _`bioconductor-flames/tags`: https://quay.io/repository/biocontainers/bioconductor-flames?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flames";
        var versions = ["1.0.2","1.0.2","1.0.2","0.99.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flames/README.html