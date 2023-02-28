:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-duoclustering2018'
.. highlight: bash

bioconductor-duoclustering2018
==============================

.. conda:recipe:: bioconductor-duoclustering2018
   :replaces_section_title:
   :noindex:

   Data\, Clustering Results and Visualization Functions From Duò et al \(2018\)

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/DuoClustering2018.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-duoclustering2018 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-duoclustering2018>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-duoclustering2018/meta.yaml>`_

   Preprocessed experimental and simulated scRNA\-seq data sets used for evaluation of clustering methods for scRNA\-seq data in Duò et al \(2018\). Also contains results from applying several clustering methods to each of the data sets\, and functions for plotting method performance.


.. conda:package:: bioconductor-duoclustering2018

   |downloads_bioconductor-duoclustering2018| |docker_bioconductor-duoclustering2018|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-magrittr: 
   :depends r-mclust: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-tidyr: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-duoclustering2018

   and update with::

      conda update bioconductor-duoclustering2018

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-duoclustering2018:<tag>

   (see `bioconductor-duoclustering2018/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-duoclustering2018| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-duoclustering2018.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-duoclustering2018
   :alt:   (downloads)
.. |docker_bioconductor-duoclustering2018| image:: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018/status
   :target: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018
.. _`bioconductor-duoclustering2018/tags`: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-duoclustering2018";
        var versions = ["1.16.0","1.12.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-duoclustering2018/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-duoclustering2018/README.html