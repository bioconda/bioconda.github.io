:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msnbase'
.. highlight: bash

bioconductor-msnbase
====================

.. conda:recipe:: bioconductor-msnbase
   :replaces_section_title:
   :noindex:

   Base Functions and Classes for Mass Spectrometry and Proteomics

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MSnbase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msnbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnbase/meta.yaml>`_
   :links: biotools: :biotools:`msnbase`

   MSnbase provides infrastructure for manipulation\, processing and visualisation of mass spectrometry and proteomics data\, ranging from raw to quantitative and annotated data.


.. conda:package:: bioconductor-msnbase

   |downloads_bioconductor-msnbase| |docker_bioconductor-msnbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.20.4-1</code>,  <code>2.20.4-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.1-0</code>,  <code>2.16.0-0</code>,  <code>2.14.1-0</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.20.4-1``,  ``2.20.4-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.1-0``,  ``2.16.0-0``,  ``2.14.1-0``,  ``2.12.0-0``,  ``2.10.1-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-mscoreutils: ``>=1.10.0,<1.11.0``
   :depends bioconductor-mzid: ``>=1.36.0,<1.37.0``
   :depends bioconductor-mzr: ``>=2.32.0,<2.33.0``
   :depends bioconductor-pcamethods: ``>=1.90.0,<1.91.0``
   :depends bioconductor-protgenerics: ``>=1.30.0,<1.31.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-vsn: ``>=3.66.0,<3.67.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-digest: 
   :depends r-ggplot2: 
   :depends r-lattice: 
   :depends r-maldiquant: ``>=1.16``
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-scales: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msnbase

   and update with::

      conda update bioconductor-msnbase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msnbase:<tag>

   (see `bioconductor-msnbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msnbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msnbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msnbase
   :alt:   (downloads)
.. |docker_bioconductor-msnbase| image:: https://quay.io/repository/biocontainers/bioconductor-msnbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msnbase
.. _`bioconductor-msnbase/tags`: https://quay.io/repository/biocontainers/bioconductor-msnbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msnbase";
        var versions = ["2.24.0","2.20.4","2.20.4","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msnbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msnbase/README.html