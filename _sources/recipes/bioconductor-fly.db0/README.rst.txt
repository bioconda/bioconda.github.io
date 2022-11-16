:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fly.db0'
.. highlight: bash

bioconductor-fly.db0
====================

.. conda:recipe:: bioconductor-fly.db0
   :replaces_section_title:
   :noindex:

   Base Level Annotation databases for fly

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/fly.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fly.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fly.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fly.db0/meta.yaml>`_

   Base annotation databases for fly\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.


.. conda:package:: bioconductor-fly.db0

   |downloads_bioconductor-fly.db0| |docker_bioconductor-fly.db0|

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

      conda install bioconductor-fly.db0

   and update with::

      conda update bioconductor-fly.db0

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fly.db0:<tag>

   (see `bioconductor-fly.db0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fly.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fly.db0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fly.db0
   :alt:   (downloads)
.. |docker_bioconductor-fly.db0| image:: https://quay.io/repository/biocontainers/bioconductor-fly.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fly.db0
.. _`bioconductor-fly.db0/tags`: https://quay.io/repository/biocontainers/bioconductor-fly.db0?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fly.db0";
        var versions = ["3.16.0","3.14.0","3.14.0","3.13.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fly.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fly.db0/README.html