:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ace'
.. highlight: bash

bioconductor-ace
================

.. conda:recipe:: bioconductor-ace
   :replaces_section_title:
   :noindex:

   Absolute Copy Number Estimation from Low\-coverage Whole Genome Sequencing

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ACE.html
   :license: GPL-2
   :recipe: /`bioconductor-ace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ace/meta.yaml>`_

   Uses segmented copy number data to estimate tumor cell percentage and produce copy number plots displaying absolute copy numbers.


.. conda:package:: bioconductor-ace

   |downloads_bioconductor-ace| |docker_bioconductor-ace|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-qdnaseq: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ace

   and update with::

      conda update bioconductor-ace

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ace:<tag>

   (see `bioconductor-ace/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ace
   :alt:   (downloads)
.. |docker_bioconductor-ace| image:: https://quay.io/repository/biocontainers/bioconductor-ace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ace
.. _`bioconductor-ace/tags`: https://quay.io/repository/biocontainers/bioconductor-ace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ace";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ace/README.html