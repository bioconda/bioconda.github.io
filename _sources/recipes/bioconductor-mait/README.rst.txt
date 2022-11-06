:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mait'
.. highlight: bash

bioconductor-mait
=================

.. conda:recipe:: bioconductor-mait
   :replaces_section_title:
   :noindex:

   Statistical Analysis of Metabolomic Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MAIT.html
   :license: GPL-2
   :recipe: /`bioconductor-mait <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mait>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mait/meta.yaml>`_

   The MAIT package contains functions to perform end\-to\-end statistical analysis of LC\/MS Metabolomic Data. Special emphasis is put on peak annotation and in modular function design of the functions.


.. conda:package:: bioconductor-mait

   |downloads_bioconductor-mait| |docker_bioconductor-mait|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-1``,  ``1.16.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-camera: ``>=1.54.0,<1.55.0``
   :depends bioconductor-xcms: ``>=3.20.0,<3.21.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-agricolae: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-caret: 
   :depends r-class: 
   :depends r-e1071: 
   :depends r-gplots: 
   :depends r-mass: 
   :depends r-pls: 
   :depends r-plsgenomics: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mait

   and update with::

      conda update bioconductor-mait

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mait:<tag>

   (see `bioconductor-mait/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mait| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mait.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mait
   :alt:   (downloads)
.. |docker_bioconductor-mait| image:: https://quay.io/repository/biocontainers/bioconductor-mait/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mait
.. _`bioconductor-mait/tags`: https://quay.io/repository/biocontainers/bioconductor-mait?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mait";
        var versions = ["1.32.0","1.28.0","1.28.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mait/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mait/README.html