:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncigraphdata'
.. highlight: bash

bioconductor-ncigraphdata
=========================

.. conda:recipe:: bioconductor-ncigraphdata
   :replaces_section_title:
   :noindex:

   Data for the NCIgraph software package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/NCIgraphData.html
   :license: GPL-3
   :recipe: /`bioconductor-ncigraphdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncigraphdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncigraphdata/meta.yaml>`_

   Provides pathways from the NCI Pathways Database as R graph objects


.. conda:package:: bioconductor-ncigraphdata

   |downloads_bioconductor-ncigraphdata| |docker_bioconductor-ncigraphdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-ncigraphdata

   and update with::

      mamba update bioconductor-ncigraphdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ncigraphdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncigraphdata:<tag>

   (see `bioconductor-ncigraphdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncigraphdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncigraphdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncigraphdata
   :alt:   (downloads)
.. |docker_bioconductor-ncigraphdata| image:: https://quay.io/repository/biocontainers/bioconductor-ncigraphdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncigraphdata
.. _`bioconductor-ncigraphdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ncigraphdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ncigraphdata";
        var versions = ["1.36.0","1.33.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncigraphdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncigraphdata/README.html