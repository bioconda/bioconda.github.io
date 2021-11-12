:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowai'
.. highlight: bash

bioconductor-flowai
===================

.. conda:recipe:: bioconductor-flowai
   :replaces_section_title:
   :noindex:

   Automatic and interactive quality control for flow cytometry data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/flowAI.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-flowai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowai/meta.yaml>`_
   :links: biotools: :biotools:`flowai`, doi: :doi:`10.1093/bioinformatics/btw191`

   The package is able to perform an automatic or interactive quality control on FCS data acquired using flow cytometry instruments. By evaluating three different properties\: 1\) flow rate\, 2\) signal acquisition\, 3\) dynamic range\, the quality control enables the detection and removal of anomalies.


.. conda:package:: bioconductor-flowai

   |downloads_bioconductor-flowai| |docker_bioconductor-flowai|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.12.7-0</code>,  <code>1.12.1-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.7-0``,  ``1.12.1-0``,  ``1.10.1-0``,  ``1.6.2-0``,  ``1.4.4-0``,  ``1.2.9-0``,  ``1.2.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-changepoint: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowai

   and update with::

      conda update bioconductor-flowai

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowai:<tag>

   (see `bioconductor-flowai/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowai.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowai
   :alt:   (downloads)
.. |docker_bioconductor-flowai| image:: https://quay.io/repository/biocontainers/bioconductor-flowai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowai
.. _`bioconductor-flowai/tags`: https://quay.io/repository/biocontainers/bioconductor-flowai?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowai";
        var versions = ["1.24.0","1.22.0","1.20.1","1.20.0","1.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowai/README.html