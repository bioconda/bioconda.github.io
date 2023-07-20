:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geva'
.. highlight: bash

bioconductor-geva
=================

.. conda:recipe:: bioconductor-geva
   :replaces_section_title:
   :noindex:

   Gene Expression Variation Analysis \(GEVA\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/geva.html
   :license: LGPL-3
   :recipe: /`bioconductor-geva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geva/meta.yaml>`_

   Statistic methods to evaluate variations of differential expression \(DE\) between multiple biological conditions. It takes into account the fold\-changes and p\-values from previous differential expression \(DE\) results that use large\-scale data \(\*e.g.\*\, microarray and RNA\-seq\) and evaluates which genes would react in response to the distinct experiments. This evaluation involves an unique pipeline of statistical methods\, including weighted summarization\, quantile detection\, cluster analysis\, and ANOVA tests\, in order to classify a subset of relevant genes whose DE is similar or dependent to certain biological factors.


.. conda:package:: bioconductor-geva

   |downloads_bioconductor-geva| |docker_bioconductor-geva|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbscan: 
   :depends r-fastcluster: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geva

   and update with::

      conda update bioconductor-geva

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geva:<tag>

   (see `bioconductor-geva/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geva.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geva
   :alt:   (downloads)
.. |docker_bioconductor-geva| image:: https://quay.io/repository/biocontainers/bioconductor-geva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geva
.. _`bioconductor-geva/tags`: https://quay.io/repository/biocontainers/bioconductor-geva?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geva";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geva/README.html