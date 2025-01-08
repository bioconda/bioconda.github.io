:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanaffydata'
.. highlight: bash

bioconductor-humanaffydata
==========================

.. conda:recipe:: bioconductor-humanaffydata
   :replaces_section_title:
   :noindex:

   GEO accession GSE64985 and ArrayExpress accession E\-MTAB\-62 as ExpressionSet objects

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/HumanAffyData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanaffydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanaffydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanaffydata/meta.yaml>`_

   Re\-analysis of human gene expression data generated on the Affymetrix HG U133PlusV2 \(EH176\) and Affymetrix HG U133A \(EH177\) platforms. The original data were normalized using robust multiarray averaging \(RMA\) to obtain an integrated gene expression atlas across diverse biological sample types and conditions. The entire compendia comprisee 9395 arrays for EH176 and 5372 arrays for EH177.


.. conda:package:: bioconductor-humanaffydata

   |downloads_bioconductor-humanaffydata| |docker_bioconductor-humanaffydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
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

      mamba install bioconductor-humanaffydata

   and update with::

      mamba update bioconductor-humanaffydata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-humanaffydata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humanaffydata:<tag>

   (see `bioconductor-humanaffydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humanaffydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanaffydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humanaffydata
   :alt:   (downloads)
.. |docker_bioconductor-humanaffydata| image:: https://quay.io/repository/biocontainers/bioconductor-humanaffydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanaffydata
.. _`bioconductor-humanaffydata/tags`: https://quay.io/repository/biocontainers/bioconductor-humanaffydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humanaffydata";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanaffydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanaffydata/README.html