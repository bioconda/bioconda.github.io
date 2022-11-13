:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigfuge'
.. highlight: bash

bioconductor-sigfuge
====================

.. conda:recipe:: bioconductor-sigfuge
   :replaces_section_title:
   :noindex:

   SigFuge

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/SigFuge.html
   :license: GPL-3
   :recipe: /`bioconductor-sigfuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfuge/meta.yaml>`_
   :links: biotools: :biotools:`sigfuge`, doi: :doi:`10.1093/nar/gku521`

   Algorithm for testing significance of clustering in RNA\-seq data.


.. conda:package:: bioconductor-sigfuge

   |downloads_bioconductor-sigfuge| |docker_bioconductor-sigfuge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-matlab: 
   :depends r-reshape: 
   :depends r-sigclust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigfuge

   and update with::

      conda update bioconductor-sigfuge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigfuge:<tag>

   (see `bioconductor-sigfuge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigfuge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigfuge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigfuge
   :alt:   (downloads)
.. |docker_bioconductor-sigfuge| image:: https://quay.io/repository/biocontainers/bioconductor-sigfuge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigfuge
.. _`bioconductor-sigfuge/tags`: https://quay.io/repository/biocontainers/bioconductor-sigfuge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sigfuge";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigfuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigfuge/README.html