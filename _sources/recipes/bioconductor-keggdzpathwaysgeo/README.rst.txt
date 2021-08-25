:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggdzpathwaysgeo'
.. highlight: bash

bioconductor-keggdzpathwaysgeo
==============================

.. conda:recipe:: bioconductor-keggdzpathwaysgeo
   :replaces_section_title:
   :noindex:

   KEGG Disease Datasets from GEO

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/KEGGdzPathwaysGEO.html
   :license: GPL-2
   :recipe: /`bioconductor-keggdzpathwaysgeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggdzpathwaysgeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggdzpathwaysgeo/meta.yaml>`_

   This is a collection of 24 data sets for which the phenotype is a disease with a corresponding pathway in the KEGG database.This collection of datasets were used as gold standard in comparing gene set analysis methods by the PADOG package.


.. conda:package:: bioconductor-keggdzpathwaysgeo

   |downloads_bioconductor-keggdzpathwaysgeo| |docker_bioconductor-keggdzpathwaysgeo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-keggdzpathwaysgeo

   and update with::

      conda update bioconductor-keggdzpathwaysgeo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-keggdzpathwaysgeo:<tag>

   (see `bioconductor-keggdzpathwaysgeo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggdzpathwaysgeo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggdzpathwaysgeo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggdzpathwaysgeo
   :alt:   (downloads)
.. |docker_bioconductor-keggdzpathwaysgeo| image:: https://quay.io/repository/biocontainers/bioconductor-keggdzpathwaysgeo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggdzpathwaysgeo
.. _`bioconductor-keggdzpathwaysgeo/tags`: https://quay.io/repository/biocontainers/bioconductor-keggdzpathwaysgeo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-keggdzpathwaysgeo";
        var versions = ["1.30.0","1.28.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggdzpathwaysgeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggdzpathwaysgeo/README.html