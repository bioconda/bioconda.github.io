:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xcms'
.. highlight: bash

bioconductor-xcms
=================

.. conda:recipe:: bioconductor-xcms
   :replaces_section_title:
   :noindex:

   LC\-MS and GC\-MS Data Analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/xcms.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-xcms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcms/meta.yaml>`_

   Framework for processing and visualization of chromatographically separated and single\-spectra mass spectral data. Imports from AIA\/ANDI NetCDF\, mzXML\, mzData and mzML files. Preprocesses data for high\-throughput\, untargeted analyte profiling.


.. conda:package:: bioconductor-xcms

   |downloads_bioconductor-xcms| |docker_bioconductor-xcms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.16.1-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.6.1-0</code>,  <code>3.4.4-0</code>,  </span></summary>
      

      ``3.16.1-0``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.1-0``,  ``3.4.4-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.1-0``,  ``1.48.0-1``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-massspecwavelet: ``>=1.60.0,<1.61.0``
   :depends bioconductor-mscoreutils: ``>=1.6.0,<1.7.0``
   :depends bioconductor-msfeatures: ``>=1.2.0,<1.3.0``
   :depends bioconductor-msnbase: ``>=2.20.0,<2.21.0``
   :depends bioconductor-mzr: ``>=2.28.0,<2.29.0``
   :depends bioconductor-protgenerics: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=12.0.1``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-lattice: 
   :depends r-plyr: 
   :depends r-rann: 
   :depends r-rcolorbrewer: 
   :depends r-robustbase: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xcms

   and update with::

      conda update bioconductor-xcms

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xcms:<tag>

   (see `bioconductor-xcms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xcms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xcms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xcms
   :alt:   (downloads)
.. |docker_bioconductor-xcms| image:: https://quay.io/repository/biocontainers/bioconductor-xcms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xcms
.. _`bioconductor-xcms/tags`: https://quay.io/repository/biocontainers/bioconductor-xcms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xcms";
        var versions = ["3.16.1","3.16.0","3.14.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xcms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xcms/README.html