:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maftools'
.. highlight: bash

bioconductor-maftools
=====================

.. conda:recipe:: bioconductor-maftools
   :replaces_section_title:
   :noindex:

   Summarize\, Analyze and Visualize MAF Files

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/maftools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-maftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maftools/meta.yaml>`_

   Analyze and visualize Mutation Annotation Format \(MAF\) files from large scale sequencing studies. This package provides various functions to perform most commonly used analyses in cancer genomics and to create feature rich customizable visualzations with minimal effort.


.. conda:package:: bioconductor-maftools

   |downloads_bioconductor-maftools| |docker_bioconductor-maftools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.05-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.05-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.10-0</code>,  </span></summary>
      

      ``2.10.05-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.05-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.10-0``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.15-0``,  ``1.4.27-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhtslib: ``>=1.26.0,<1.27.0``
   :depends bioconductor-zlibbioc: ``>=1.40.0,<1.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maftools

   and update with::

      conda update bioconductor-maftools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maftools:<tag>

   (see `bioconductor-maftools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maftools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maftools
   :alt:   (downloads)
.. |docker_bioconductor-maftools| image:: https://quay.io/repository/biocontainers/bioconductor-maftools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maftools
.. _`bioconductor-maftools/tags`: https://quay.io/repository/biocontainers/bioconductor-maftools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maftools";
        var versions = ["2.10.05","2.10.0","2.10.0","2.8.0","2.6.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maftools/README.html