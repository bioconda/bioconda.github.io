:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatssamplesize'
.. highlight: bash

bioconductor-msstatssamplesize
==============================

.. conda:recipe:: bioconductor-msstatssamplesize
   :replaces_section_title:
   :noindex:

   Simulation tool for optimal design of high\-dimensional MS\-based proteomics experiment

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MSstatsSampleSize.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatssamplesize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatssamplesize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatssamplesize/meta.yaml>`_

   The packages estimates the variance in the input protein abundance data and simulates data with predefined number of biological replicates based on the variance estimation. It reports the mean predictive accuracy of the classifier and mean protein importance over multiple iterations of the simulation.


.. conda:package:: bioconductor-msstatssamplesize

   |downloads_bioconductor-msstatssamplesize| |docker_bioconductor-msstatssamplesize|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-msstats: ``>=4.0.0,<4.1.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatssamplesize

   and update with::

      conda update bioconductor-msstatssamplesize

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatssamplesize:<tag>

   (see `bioconductor-msstatssamplesize/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatssamplesize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatssamplesize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatssamplesize
   :alt:   (downloads)
.. |docker_bioconductor-msstatssamplesize| image:: https://quay.io/repository/biocontainers/bioconductor-msstatssamplesize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatssamplesize
.. _`bioconductor-msstatssamplesize/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatssamplesize?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatssamplesize";
        var versions = ["1.6.0","1.4.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatssamplesize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatssamplesize/README.html