:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellmapperdata'
.. highlight: bash

bioconductor-cellmapperdata
===========================

.. conda:recipe:: bioconductor-cellmapperdata
   :replaces_section_title:
   :noindex:

   Pre\-processed data for use with the CellMapper package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/CellMapperData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellmapperdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapperdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapperdata/meta.yaml>`_

   Experiment data package. Contains microarray data from several large expression compendia that have been pre\-processed for use with the CellMapper package. This pre\-processed data is recommended for routine searches using the CellMapper package.


.. conda:package:: bioconductor-cellmapperdata

   |downloads_bioconductor-cellmapperdata| |docker_bioconductor-cellmapperdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cellmapper: ``>=1.26.0,<1.27.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cellmapperdata

   and update with::

      mamba update bioconductor-cellmapperdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellmapperdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellmapperdata:<tag>

   (see `bioconductor-cellmapperdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellmapperdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmapperdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellmapperdata
   :alt:   (downloads)
.. |docker_bioconductor-cellmapperdata| image:: https://quay.io/repository/biocontainers/bioconductor-cellmapperdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmapperdata
.. _`bioconductor-cellmapperdata/tags`: https://quay.io/repository/biocontainers/bioconductor-cellmapperdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellmapperdata";
        var versions = ["1.26.0","1.24.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmapperdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmapperdata/README.html