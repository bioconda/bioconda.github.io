:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnameconverter'
.. highlight: bash

bioconductor-mirnameconverter
=============================

.. conda:recipe:: bioconductor-mirnameconverter
   :replaces_section_title:
   :noindex:

   Convert miRNA Names to Different miRBase Versions

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/miRNAmeConverter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mirnameconverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnameconverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnameconverter/meta.yaml>`_
   :links: biotools: :biotools:`mirnameconverter`

   Translating mature miRNA names to different miRBase versions\, sequence retrieval\, checking names for validity and detecting miRBase version of a given set of names \(data from http\:\/\/www.mirbase.org\/\).


.. conda:package:: bioconductor-mirnameconverter

   |downloads_bioconductor-mirnameconverter| |docker_bioconductor-mirnameconverter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-mirbaseversions.db: ``>=1.1.0,<1.2.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dbi: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirnameconverter

   and update with::

      conda update bioconductor-mirnameconverter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnameconverter:<tag>

   (see `bioconductor-mirnameconverter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnameconverter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnameconverter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnameconverter
   :alt:   (downloads)
.. |docker_bioconductor-mirnameconverter| image:: https://quay.io/repository/biocontainers/bioconductor-mirnameconverter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnameconverter
.. _`bioconductor-mirnameconverter/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnameconverter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnameconverter";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnameconverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnameconverter/README.html