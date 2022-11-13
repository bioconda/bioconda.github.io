:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reconsi'
.. highlight: bash

bioconductor-reconsi
====================

.. conda:recipe:: bioconductor-reconsi
   :replaces_section_title:
   :noindex:

   Resampling Collapsed Null Distributions for Simultaneous Inference

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/reconsi.html
   :license: GPL-2
   :recipe: /`bioconductor-reconsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reconsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reconsi/meta.yaml>`_

   Improves simultaneous inference under dependence of tests by estimating a collapsed null distribution through resampling. Accounting for the dependence between tests increases the power while reducing the variability of the false discovery proportion. This dependence is common in genomics applications\, e.g. when combining flow cytometry measurements with microbiome sequence counts.


.. conda:package:: bioconductor-reconsi

   |downloads_bioconductor-reconsi| |docker_bioconductor-reconsi|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-phyloseq: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-ks: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reconsi

   and update with::

      conda update bioconductor-reconsi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reconsi:<tag>

   (see `bioconductor-reconsi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reconsi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reconsi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reconsi
   :alt:   (downloads)
.. |docker_bioconductor-reconsi| image:: https://quay.io/repository/biocontainers/bioconductor-reconsi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reconsi
.. _`bioconductor-reconsi/tags`: https://quay.io/repository/biocontainers/bioconductor-reconsi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reconsi";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reconsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reconsi/README.html