:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-webbioc'
.. highlight: bash

bioconductor-webbioc
====================

.. conda:recipe:: bioconductor-webbioc
   :replaces_section_title:
   :noindex:

   Bioconductor Web Interface

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/webbioc.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-webbioc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-webbioc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-webbioc/meta.yaml>`_
   :links: biotools: :biotools:`webbioc`, doi: :doi:`10.1007/0-387-29362-0_18`

   An integrated web interface for doing microarray analysis using several of the Bioconductor packages. It is intended to be deployed as a centralized bioinformatics resource for use by many users. \(Currently only Affymetrix oligonucleotide analysis is supported.\)


.. conda:package:: bioconductor-webbioc

   |downloads_bioconductor-webbioc| |docker_bioconductor-webbioc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-annaffy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-gcrma: ``>=2.70.0,<2.71.0``
   :depends bioconductor-multtest: ``>=2.54.0,<2.55.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends bioconductor-vsn: ``>=3.66.0,<3.67.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-webbioc

   and update with::

      conda update bioconductor-webbioc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-webbioc:<tag>

   (see `bioconductor-webbioc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-webbioc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-webbioc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-webbioc
   :alt:   (downloads)
.. |docker_bioconductor-webbioc| image:: https://quay.io/repository/biocontainers/bioconductor-webbioc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-webbioc
.. _`bioconductor-webbioc/tags`: https://quay.io/repository/biocontainers/bioconductor-webbioc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-webbioc";
        var versions = ["1.70.0","1.66.0","1.64.0","1.62.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-webbioc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-webbioc/README.html