:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synlet'
.. highlight: bash

bioconductor-synlet
===================

.. conda:recipe:: bioconductor-synlet
   :replaces_section_title:
   :noindex:

   Hits Selection for Synthetic Lethal RNAi Screen Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/synlet.html
   :license: GPL-3
   :recipe: /`bioconductor-synlet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synlet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synlet/meta.yaml>`_
   :links: biotools: :biotools:`synlet`, doi: :doi:`10.1101/043570`

   Select hits from synthetic lethal RNAi screen data. For example\, there are two identical celllines except one gene is knocked\-down in one cellline. The interest is to find genes that lead to stronger lethal effect when they are knocked\-down further by siRNA. Quality control and various visualisation tools are implemented. Four different algorithms could be used to pick up the interesting hits. This package is designed based on 384 wells plates\, but may apply to other platforms with proper configuration.


.. conda:package:: bioconductor-synlet

   |downloads_bioconductor-synlet| |docker_bioconductor-synlet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rankprod: ``>=3.26.0,<3.27.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synlet

   and update with::

      conda update bioconductor-synlet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synlet:<tag>

   (see `bioconductor-synlet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synlet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synlet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synlet
   :alt:   (downloads)
.. |docker_bioconductor-synlet| image:: https://quay.io/repository/biocontainers/bioconductor-synlet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synlet
.. _`bioconductor-synlet/tags`: https://quay.io/repository/biocontainers/bioconductor-synlet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synlet";
        var versions = ["2.0.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synlet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synlet/README.html