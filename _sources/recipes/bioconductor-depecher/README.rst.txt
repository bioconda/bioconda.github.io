:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-depecher'
.. highlight: bash

bioconductor-depecher
=====================

.. conda:recipe:: bioconductor-depecher
   :replaces_section_title:
   :noindex:

   Determination of essential phenotypic elements of clusters in high\-dimensional entities

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DepecheR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-depecher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-depecher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-depecher/meta.yaml>`_

   The purpose of this package is to identify traits in a dataset that can separate groups. This is done on two levels. First\, clustering is performed\, using an implementation of sparse K\-means. Secondly\, the generated clusters are used to predict outcomes of groups of individuals based on their distribution of observations in the different clusters. As certain clusters with separating information will be identified\, and these clusters are defined by a sparse number of variables\, this method can reduce the complexity of data\, to only emphasize the data that actually matters.


.. conda:package:: bioconductor-depecher

   |downloads_bioconductor-depecher| |docker_bioconductor-depecher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-mixomics: ``>=6.22.0,<6.23.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-beanplot: ``>=1.2``
   :depends r-dosnow: ``>=1.0.16``
   :depends r-dplyr: ``>=0.7.8``
   :depends r-fnn: ``>=1.1.3``
   :depends r-foreach: ``>=1.4.4``
   :depends r-ggplot2: ``>=3.1.0``
   :depends r-gmodels: ``>=2.18.1``
   :depends r-gplots: ``>=3.0.1``
   :depends r-mass: ``>=7.3.51``
   :depends r-matrixstats: ``>=0.54.0``
   :depends r-moments: ``>=0.14``
   :depends r-rcpp: ``>=1.0.0``
   :depends r-rcppeigen: 
   :depends r-reshape2: ``>=1.4.3``
   :depends r-robustbase: ``>=0.93.5``
   :depends r-viridis: ``>=0.5.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-depecher

   and update with::

      conda update bioconductor-depecher

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-depecher:<tag>

   (see `bioconductor-depecher/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-depecher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-depecher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-depecher
   :alt:   (downloads)
.. |docker_bioconductor-depecher| image:: https://quay.io/repository/biocontainers/bioconductor-depecher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-depecher
.. _`bioconductor-depecher/tags`: https://quay.io/repository/biocontainers/bioconductor-depecher?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-depecher";
        var versions = ["1.14.0","1.10.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-depecher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-depecher/README.html