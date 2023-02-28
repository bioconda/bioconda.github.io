:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetsearchdata'
.. highlight: bash

bioconductor-targetsearchdata
=============================

.. conda:recipe:: bioconductor-targetsearchdata
   :replaces_section_title:
   :noindex:

   Example GC\-MS data for TargetSearch Package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/TargetSearchData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-targetsearchdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearchdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearchdata/meta.yaml>`_

   Example files of GC\-MS data for the TargetSearch Package. The package contains raw NetCDF files from a E.coli salt stress experiment\, extracted peak lists\, and sample metadata required for a GC\-MS analysis. The raw data has been restricted for demonstration purposes.


.. conda:package:: bioconductor-targetsearchdata

   |downloads_bioconductor-targetsearchdata| |docker_bioconductor-targetsearchdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.35.2-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.35.2-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-targetsearchdata

   and update with::

      conda update bioconductor-targetsearchdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetsearchdata:<tag>

   (see `bioconductor-targetsearchdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetsearchdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetsearchdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetsearchdata
   :alt:   (downloads)
.. |docker_bioconductor-targetsearchdata| image:: https://quay.io/repository/biocontainers/bioconductor-targetsearchdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetsearchdata
.. _`bioconductor-targetsearchdata/tags`: https://quay.io/repository/biocontainers/bioconductor-targetsearchdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-targetsearchdata";
        var versions = ["1.35.2","1.32.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetsearchdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetsearchdata/README.html