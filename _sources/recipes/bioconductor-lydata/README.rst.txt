:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lydata'
.. highlight: bash

bioconductor-lydata
===================

.. conda:recipe:: bioconductor-lydata
   :replaces_section_title:
   :noindex:

   Example Dataset for crossmeta Package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/lydata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lydata/meta.yaml>`_

   Raw data downloaded from GEO for the compound LY294002. Raw data is from multiple platforms from Affymetrix and Illumina. This data is used to illustrate the cross\-platform meta\-analysis of microarray data using the crossmeta package.


.. conda:package:: bioconductor-lydata

   |downloads_bioconductor-lydata| |docker_bioconductor-lydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.23.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.23.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-lydata

   and update with::

      mamba update bioconductor-lydata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lydata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lydata:<tag>

   (see `bioconductor-lydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lydata
   :alt:   (downloads)
.. |docker_bioconductor-lydata| image:: https://quay.io/repository/biocontainers/bioconductor-lydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lydata
.. _`bioconductor-lydata/tags`: https://quay.io/repository/biocontainers/bioconductor-lydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lydata";
        var versions = ["1.26.0","1.23.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lydata/README.html