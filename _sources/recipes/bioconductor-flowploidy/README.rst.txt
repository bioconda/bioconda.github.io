:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowploidy'
.. highlight: bash

bioconductor-flowploidy
=======================

.. conda:recipe:: bioconductor-flowploidy
   :replaces_section_title:
   :noindex:

   Analyze flow cytometer data to determine sample ploidy

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/flowPloidy.html
   :license: GPL-3
   :recipe: /`bioconductor-flowploidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidy/meta.yaml>`_
   :links: biotools: :biotools:`flowploidy`, doi: :doi:`10.1038/nmeth.3252`

   Determine sample ploidy via flow cytometry histogram analysis. Reads Flow Cytometry Standard \(FCS\) files via the flowCore bioconductor package\, and provides functions for determining the DNA ploidy of samples based on internal standards.


.. conda:package:: bioconductor-flowploidy

   |downloads_bioconductor-flowploidy| |docker_bioconductor-flowploidy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-car: 
   :depends r-catools: 
   :depends r-knitr: 
   :depends r-minpack.lm: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowploidy

   and update with::

      conda update bioconductor-flowploidy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowploidy:<tag>

   (see `bioconductor-flowploidy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowploidy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowploidy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowploidy
   :alt:   (downloads)
.. |docker_bioconductor-flowploidy| image:: https://quay.io/repository/biocontainers/bioconductor-flowploidy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowploidy
.. _`bioconductor-flowploidy/tags`: https://quay.io/repository/biocontainers/bioconductor-flowploidy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowploidy";
        var versions = ["1.20.0","1.18.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowploidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowploidy/README.html