:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasnv'
.. highlight: bash

metasnv
=======

.. conda:recipe:: metasnv
   :replaces_section_title:
   :noindex:

   SNV calling software

   :homepage: http://metasnv.embl.de
   :license: GPLv3
   :recipe: /`metasnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnv/meta.yaml>`_

   


.. conda:package:: metasnv

   |downloads_metasnv| |docker_metasnv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-2</code>,  <code>2.0.4-1</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.3-4</code>,  </span></summary>
      

      ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.26``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends numpy: 
   :depends pandas: 
   :depends pandoc: ``>=2.1``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends r-ape: 
   :depends r-base: ``>=4.0``
   :depends r-batchtools: 
   :depends r-cairo: 
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-forcats: 
   :depends r-fpc: 
   :depends r-futile.logger: 
   :depends r-getopt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-kableextra: 
   :depends r-optparse: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-tidyr: 
   :depends samtools: ``>=1.12``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metasnv

   and update with::

      conda update metasnv

   or use the docker container::

      docker pull quay.io/biocontainers/metasnv:<tag>

   (see `metasnv/tags`_ for valid values for ``<tag>``)


.. |downloads_metasnv| image:: https://img.shields.io/conda/dn/bioconda/metasnv.svg?style=flat
   :target: https://anaconda.org/bioconda/metasnv
   :alt:   (downloads)
.. |docker_metasnv| image:: https://quay.io/repository/biocontainers/metasnv/status
   :target: https://quay.io/repository/biocontainers/metasnv
.. _`metasnv/tags`: https://quay.io/repository/biocontainers/metasnv?tab=tags


.. raw:: html

    <script>
        var package = "metasnv";
        var versions = ["2.0.4","2.0.4","2.0.4","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasnv/README.html