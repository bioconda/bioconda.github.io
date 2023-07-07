:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deltagseg'
.. highlight: bash

bioconductor-deltagseg
======================

.. conda:recipe:: bioconductor-deltagseg
   :replaces_section_title:
   :noindex:

   deltaGseg

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/deltaGseg.html
   :license: GPL-2
   :recipe: /`bioconductor-deltagseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltagseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltagseg/meta.yaml>`_

   Identifying distinct subpopulations through multiscale time series analysis


.. conda:package:: bioconductor-deltagseg

   |downloads_bioconductor-deltagseg| |docker_bioconductor-deltagseg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.37.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.37.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-changepoint: 
   :depends r-fbasics: 
   :depends r-ggplot2: 
   :depends r-pvclust: 
   :depends r-reshape: 
   :depends r-scales: 
   :depends r-tseries: 
   :depends r-wavethresh: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deltagseg

   and update with::

      conda update bioconductor-deltagseg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deltagseg:<tag>

   (see `bioconductor-deltagseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deltagseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deltagseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deltagseg
   :alt:   (downloads)
.. |docker_bioconductor-deltagseg| image:: https://quay.io/repository/biocontainers/bioconductor-deltagseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deltagseg
.. _`bioconductor-deltagseg/tags`: https://quay.io/repository/biocontainers/bioconductor-deltagseg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deltagseg";
        var versions = ["1.40.0","1.37.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deltagseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deltagseg/README.html