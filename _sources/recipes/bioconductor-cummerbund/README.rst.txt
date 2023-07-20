:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cummerbund'
.. highlight: bash

bioconductor-cummerbund
=======================

.. conda:recipe:: bioconductor-cummerbund
   :replaces_section_title:
   :noindex:

   Analysis\, exploration\, manipulation\, and visualization of Cufflinks high\-throughput sequencing data.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cummeRbund.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cummerbund <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cummerbund>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cummerbund/meta.yaml>`_
   :links: biotools: :biotools:`cummerbund`, doi: :doi:`10.1038/nprot.2012.016`

   Allows for persistent storage\, access\, exploration\, and manipulation of Cufflinks high\-throughput sequencing data.  In addition\, provides numerous plotting functions for commonly used visualizations.


.. conda:package:: bioconductor-cummerbund

   |downloads_bioconductor-cummerbund| |docker_bioconductor-cummerbund|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  </span></summary>
      

      ``2.42.0-0``,  ``2.40.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.1-1``,  ``2.12.1-0``,  ``2.8.2-1``,  ``2.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fastcluster: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cummerbund

   and update with::

      conda update bioconductor-cummerbund

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cummerbund:<tag>

   (see `bioconductor-cummerbund/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cummerbund| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cummerbund.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cummerbund
   :alt:   (downloads)
.. |docker_bioconductor-cummerbund| image:: https://quay.io/repository/biocontainers/bioconductor-cummerbund/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cummerbund
.. _`bioconductor-cummerbund/tags`: https://quay.io/repository/biocontainers/bioconductor-cummerbund?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cummerbund";
        var versions = ["2.42.0","2.40.0","2.36.0","2.34.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cummerbund/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cummerbund/README.html