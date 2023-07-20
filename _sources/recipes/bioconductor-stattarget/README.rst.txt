:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stattarget'
.. highlight: bash

bioconductor-stattarget
=======================

.. conda:recipe:: bioconductor-stattarget
   :replaces_section_title:
   :noindex:

   Statistical Analysis of Molecular Profiles

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/statTarget.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-stattarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stattarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stattarget/meta.yaml>`_

   A streamlined tool provides a graphical user interface for quality control based signal drift correction \(QC\-RFSC\)\, integration of data from multi\-batch MS\-based experiments\, and the comprehensive statistical analysis in metabolomics and proteomics.


.. conda:package:: bioconductor-stattarget

   |downloads_bioconductor-stattarget| |docker_bioconductor-stattarget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-roc: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-pdist: 
   :depends r-pls: 
   :depends r-plyr: 
   :depends r-randomforest: 
   :depends r-rrcov: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stattarget

   and update with::

      conda update bioconductor-stattarget

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stattarget:<tag>

   (see `bioconductor-stattarget/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stattarget| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stattarget.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stattarget
   :alt:   (downloads)
.. |docker_bioconductor-stattarget| image:: https://quay.io/repository/biocontainers/bioconductor-stattarget/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stattarget
.. _`bioconductor-stattarget/tags`: https://quay.io/repository/biocontainers/bioconductor-stattarget?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stattarget";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stattarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stattarget/README.html