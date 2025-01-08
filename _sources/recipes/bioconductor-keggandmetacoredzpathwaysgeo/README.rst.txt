:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggandmetacoredzpathwaysgeo'
.. highlight: bash

bioconductor-keggandmetacoredzpathwaysgeo
=========================================

.. conda:recipe:: bioconductor-keggandmetacoredzpathwaysgeo
   :replaces_section_title:
   :noindex:

   Disease Datasets from GEO

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/KEGGandMetacoreDzPathwaysGEO.html
   :license: GPL-2
   :recipe: /`bioconductor-keggandmetacoredzpathwaysgeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggandmetacoredzpathwaysgeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggandmetacoredzpathwaysgeo/meta.yaml>`_

   This is a collection of 18 data sets for which the phenotype is a disease with a corresponding pathway in either KEGG or metacore database.This collection of datasets were used as gold standard in comparing gene set analysis methods.


.. conda:package:: bioconductor-keggandmetacoredzpathwaysgeo

   |downloads_bioconductor-keggandmetacoredzpathwaysgeo| |docker_bioconductor-keggandmetacoredzpathwaysgeo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-keggandmetacoredzpathwaysgeo

   and update with::

      mamba update bioconductor-keggandmetacoredzpathwaysgeo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-keggandmetacoredzpathwaysgeo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-keggandmetacoredzpathwaysgeo:<tag>

   (see `bioconductor-keggandmetacoredzpathwaysgeo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggandmetacoredzpathwaysgeo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggandmetacoredzpathwaysgeo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggandmetacoredzpathwaysgeo
   :alt:   (downloads)
.. |docker_bioconductor-keggandmetacoredzpathwaysgeo| image:: https://quay.io/repository/biocontainers/bioconductor-keggandmetacoredzpathwaysgeo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggandmetacoredzpathwaysgeo
.. _`bioconductor-keggandmetacoredzpathwaysgeo/tags`: https://quay.io/repository/biocontainers/bioconductor-keggandmetacoredzpathwaysgeo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-keggandmetacoredzpathwaysgeo";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggandmetacoredzpathwaysgeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggandmetacoredzpathwaysgeo/README.html