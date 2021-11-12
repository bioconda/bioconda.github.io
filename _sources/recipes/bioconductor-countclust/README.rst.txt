:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-countclust'
.. highlight: bash

bioconductor-countclust
=======================

.. conda:recipe:: bioconductor-countclust
   :replaces_section_title:
   :noindex:

   Clustering and Visualizing RNA\-Seq Expression Data using Grade of Membership Models

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CountClust.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-countclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-countclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-countclust/meta.yaml>`_

   Fits grade of membership models \(GoM\, also known as admixture models\) to cluster RNA\-seq gene expression count data\, identifies characteristic genes driving cluster memberships\, and provides a visual summary of the cluster memberships.


.. conda:package:: bioconductor-countclust

   |downloads_bioconductor-countclust| |docker_bioconductor-countclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  </span></summary>
      

      ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-flexmix: 
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-gtools: 
   :depends r-maptpx: 
   :depends r-picante: 
   :depends r-plyr: ``>=1.7.1``
   :depends r-reshape2: 
   :depends r-slam: 
   :depends r-squarem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-countclust

   and update with::

      conda update bioconductor-countclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-countclust:<tag>

   (see `bioconductor-countclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-countclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-countclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-countclust
   :alt:   (downloads)
.. |docker_bioconductor-countclust| image:: https://quay.io/repository/biocontainers/bioconductor-countclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-countclust
.. _`bioconductor-countclust/tags`: https://quay.io/repository/biocontainers/bioconductor-countclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-countclust";
        var versions = ["1.21.0","1.20.0","1.18.0","1.18.0","1.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-countclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-countclust/README.html