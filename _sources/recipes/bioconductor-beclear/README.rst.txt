:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beclear'
.. highlight: bash

bioconductor-beclear
====================

.. conda:recipe:: bioconductor-beclear
   :replaces_section_title:
   :noindex:

   Correction of batch effects in DNA methylation data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/BEclear.html
   :license: GPL-3
   :recipe: /`bioconductor-beclear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beclear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beclear/meta.yaml>`_
   :links: biotools: :biotools:`beclear`, doi: :doi:`10.1371/journal.pone.0159921`

   Provides functions to detect and correct for batch effects in DNA methylation data. The core function is based on latent factor models and can also be used to predict missing values in any other matrix containing real numbers.


.. conda:package:: bioconductor-beclear

   |downloads_bioconductor-beclear| |docker_bioconductor-beclear|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.10.0-2</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-abind: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-dixontest: 
   :depends r-futile.logger: 
   :depends r-ids: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rdpack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beclear

   and update with::

      conda update bioconductor-beclear

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beclear:<tag>

   (see `bioconductor-beclear/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beclear| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beclear.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beclear
   :alt:   (downloads)
.. |docker_bioconductor-beclear| image:: https://quay.io/repository/biocontainers/bioconductor-beclear/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beclear
.. _`bioconductor-beclear/tags`: https://quay.io/repository/biocontainers/bioconductor-beclear?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beclear";
        var versions = ["2.14.0","2.10.0","2.10.0","2.10.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beclear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beclear/README.html