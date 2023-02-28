:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecolik12.db0'
.. highlight: bash

bioconductor-ecolik12.db0
=========================

.. conda:recipe:: bioconductor-ecolik12.db0
   :replaces_section_title:
   :noindex:

   Base Level Annotation databases for E coli K12 Strain

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/ecoliK12.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ecolik12.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolik12.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolik12.db0/meta.yaml>`_

   Base annotation databases for E coli K12 Strain\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.


.. conda:package:: bioconductor-ecolik12.db0

   |downloads_bioconductor-ecolik12.db0| |docker_bioconductor-ecolik12.db0|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.16.0-0</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.11.2-0</code>,  <code>3.10.0-0</code>,  <code>3.8.2-1</code>,  </span></summary>
      

      ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.2-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecolik12.db0

   and update with::

      conda update bioconductor-ecolik12.db0

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecolik12.db0:<tag>

   (see `bioconductor-ecolik12.db0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecolik12.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecolik12.db0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecolik12.db0
   :alt:   (downloads)
.. |docker_bioconductor-ecolik12.db0| image:: https://quay.io/repository/biocontainers/bioconductor-ecolik12.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecolik12.db0
.. _`bioconductor-ecolik12.db0/tags`: https://quay.io/repository/biocontainers/bioconductor-ecolik12.db0?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ecolik12.db0";
        var versions = ["3.16.0","3.14.0","3.14.0","3.13.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecolik12.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecolik12.db0/README.html