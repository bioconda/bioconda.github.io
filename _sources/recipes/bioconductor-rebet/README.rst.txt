:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rebet'
.. highlight: bash

bioconductor-rebet
==================

.. conda:recipe:: bioconductor-rebet
   :replaces_section_title:
   :noindex:

   The subREgion\-based BurdEn Test \(REBET\)

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/REBET.html
   :license: GPL-2
   :recipe: /`bioconductor-rebet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rebet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rebet/meta.yaml>`_

   There is an increasing focus to investigate the association between rare variants and diseases. The REBET package implements the subREgion\-based BurdEn Test which is a powerful burden test that simultaneously identifies susceptibility loci and sub\-regions.


.. conda:package:: bioconductor-rebet

   |downloads_bioconductor-rebet| |docker_bioconductor-rebet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-asset: ``>=2.16.0,<2.17.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rebet

   and update with::

      conda update bioconductor-rebet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rebet:<tag>

   (see `bioconductor-rebet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rebet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rebet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rebet
   :alt:   (downloads)
.. |docker_bioconductor-rebet| image:: https://quay.io/repository/biocontainers/bioconductor-rebet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rebet
.. _`bioconductor-rebet/tags`: https://quay.io/repository/biocontainers/bioconductor-rebet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rebet";
        var versions = ["1.16.0","1.12.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rebet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rebet/README.html