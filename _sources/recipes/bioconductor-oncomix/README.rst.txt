:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oncomix'
.. highlight: bash

bioconductor-oncomix
====================

.. conda:recipe:: bioconductor-oncomix
   :replaces_section_title:
   :noindex:

   Identifying Genes Overexpressed in Subsets of Tumors from Tumor\-Normal mRNA Expression Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/oncomix.html
   :license: GPL-3
   :recipe: /`bioconductor-oncomix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncomix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncomix/meta.yaml>`_

   This package helps identify mRNAs that are overexpressed in subsets of tumors relative to normal tissue. Ideal inputs would be paired tumor\-normal data from the same tissue from many patients \(\>15 pairs\). This unsupervised approach relies on the observation that oncogenes are characteristically overexpressed in only a subset of tumors in the population\, and may help identify oncogene candidates purely based on differences in mRNA expression between previously unknown subtypes.


.. conda:package:: bioconductor-oncomix

   |downloads_bioconductor-oncomix| |docker_bioconductor-oncomix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-mclust: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oncomix

   and update with::

      conda update bioconductor-oncomix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oncomix:<tag>

   (see `bioconductor-oncomix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oncomix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oncomix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oncomix
   :alt:   (downloads)
.. |docker_bioconductor-oncomix| image:: https://quay.io/repository/biocontainers/bioconductor-oncomix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oncomix
.. _`bioconductor-oncomix/tags`: https://quay.io/repository/biocontainers/bioconductor-oncomix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oncomix";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oncomix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oncomix/README.html