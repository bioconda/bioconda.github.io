:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigsquared'
.. highlight: bash

bioconductor-sigsquared
=======================

.. conda:recipe:: bioconductor-sigsquared
   :replaces_section_title:
   :noindex:

   Gene signature generation for functionally validated signaling pathways

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sigsquared.html
   :license: GPL version 3
   :recipe: /`bioconductor-sigsquared <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigsquared>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigsquared/meta.yaml>`_

   By leveraging statistical properties \(log\-rank test for survival\) of patient cohorts defined by binary thresholds\, poor\-prognosis patients are identified by the sigsquared package via optimization over a cost function reducing type I and II error.


.. conda:package:: bioconductor-sigsquared

   |downloads_bioconductor-sigsquared| |docker_bioconductor-sigsquared|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigsquared

   and update with::

      conda update bioconductor-sigsquared

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigsquared:<tag>

   (see `bioconductor-sigsquared/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigsquared| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigsquared.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigsquared
   :alt:   (downloads)
.. |docker_bioconductor-sigsquared| image:: https://quay.io/repository/biocontainers/bioconductor-sigsquared/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigsquared
.. _`bioconductor-sigsquared/tags`: https://quay.io/repository/biocontainers/bioconductor-sigsquared?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sigsquared";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigsquared/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigsquared/README.html