:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crcl18'
.. highlight: bash

bioconductor-crcl18
===================

.. conda:recipe:: bioconductor-crcl18
   :replaces_section_title:
   :noindex:

   CRC cell line dataset

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/CRCL18.html
   :license: GPL-2
   :recipe: /`bioconductor-crcl18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crcl18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crcl18/meta.yaml>`_

   colorectal cancer mRNA and miRNA on 18 cell lines


.. conda:package:: bioconductor-crcl18

   |downloads_bioconductor-crcl18| |docker_bioconductor-crcl18|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crcl18

   and update with::

      conda update bioconductor-crcl18

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crcl18:<tag>

   (see `bioconductor-crcl18/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crcl18| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crcl18.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crcl18
   :alt:   (downloads)
.. |docker_bioconductor-crcl18| image:: https://quay.io/repository/biocontainers/bioconductor-crcl18/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crcl18
.. _`bioconductor-crcl18/tags`: https://quay.io/repository/biocontainers/bioconductor-crcl18?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crcl18";
        var versions = ["1.14.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crcl18/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crcl18/README.html