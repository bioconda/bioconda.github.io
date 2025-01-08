:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggdzpathwaysgeo'
.. highlight: bash

bioconductor-keggdzpathwaysgeo
==============================

.. conda:recipe:: bioconductor-keggdzpathwaysgeo
   :replaces_section_title:
   :noindex:

   KEGG Disease Datasets from GEO

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/KEGGdzPathwaysGEO.html
   :license: GPL-2
   :recipe: /`bioconductor-keggdzpathwaysgeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggdzpathwaysgeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggdzpathwaysgeo/meta.yaml>`_

   This is a collection of 24 data sets for which the phenotype is a disease with a corresponding pathway in the KEGG database.This collection of datasets were used as gold standard in comparing gene set analysis methods by the PADOG package.


.. conda:package:: bioconductor-keggdzpathwaysgeo

   |downloads_bioconductor-keggdzpathwaysgeo| |docker_bioconductor-keggdzpathwaysgeo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``

      
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

      mamba install bioconductor-keggdzpathwaysgeo

   and update with::

      mamba update bioconductor-keggdzpathwaysgeo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-keggdzpathwaysgeo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
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