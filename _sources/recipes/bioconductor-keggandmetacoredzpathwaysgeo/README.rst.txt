:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggandmetacoredzpathwaysgeo'
.. highlight: bash

bioconductor-keggandmetacoredzpathwaysgeo
=========================================

.. conda:recipe:: bioconductor-keggandmetacoredzpathwaysgeo
   :replaces_section_title:

   This is a collection of 18 data sets for which the phenotype is a disease with a corresponding pathway in either KEGG or metacore database.This collection of datasets were used as gold standard in comparing gene set analysis methods.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/KEGGandMetacoreDzPathwaysGEO.html
   :license: GPL-2
   :recipe: /`bioconductor-keggandmetacoredzpathwaysgeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggandmetacoredzpathwaysgeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggandmetacoredzpathwaysgeo/meta.yaml>`_

   


.. conda:package:: bioconductor-keggandmetacoredzpathwaysgeo

   |downloads_bioconductor-keggandmetacoredzpathwaysgeo| |docker_bioconductor-keggandmetacoredzpathwaysgeo|

   :versions: 1.5.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-keggandmetacoredzpathwaysgeo

   and update with::

      conda update bioconductor-keggandmetacoredzpathwaysgeo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-keggandmetacoredzpathwaysgeo:<tag>

   (see `bioconductor-keggandmetacoredzpathwaysgeo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggandmetacoredzpathwaysgeo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggandmetacoredzpathwaysgeo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggandmetacoredzpathwaysgeo
   :alt:   (downloads)
.. |docker_bioconductor-keggandmetacoredzpathwaysgeo| image:: https://quay.io/repository/biocontainers/bioconductor-keggandmetacoredzpathwaysgeo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggandmetacoredzpathwaysgeo
.. _`bioconductor-keggandmetacoredzpathwaysgeo/tags`: https://quay.io/repository/biocontainers/bioconductor-keggandmetacoredzpathwaysgeo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggandmetacoredzpathwaysgeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggandmetacoredzpathwaysgeo/README.html