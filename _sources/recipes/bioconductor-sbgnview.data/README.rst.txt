:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sbgnview.data'
.. highlight: bash

bioconductor-sbgnview.data
==========================

.. conda:recipe:: bioconductor-sbgnview.data
   :replaces_section_title:
   :noindex:

   Supporting datasets for SBGNview package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/SBGNview.data.html
   :license: AGPL-3
   :recipe: /`bioconductor-sbgnview.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbgnview.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbgnview.data/meta.yaml>`_

   This package contains\: 1. A microarray gene expression dataset from a human breast cancer study. 2. A RNA\-Seq gene expression dataset from a mouse study on IFNG knockout. 3. ID mapping tables between gene IDs and SBGN\-ML file glyph IDs. 4. Percent of orthologs detected in other species of the genes in a pathway. Cutoffs of this percentage for defining if a pathway exists in another species. 5. XML text of SBGN\-ML files for all pre\-collected pathways.


.. conda:package:: bioconductor-sbgnview.data

   |downloads_bioconductor-sbgnview.data| |docker_bioconductor-sbgnview.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bookdown: 
   :depends r-knitr: 
   :depends r-rmarkdown: 
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

      mamba install bioconductor-sbgnview.data

   and update with::

      mamba update bioconductor-sbgnview.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sbgnview.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sbgnview.data:<tag>

   (see `bioconductor-sbgnview.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sbgnview.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sbgnview.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sbgnview.data
   :alt:   (downloads)
.. |docker_bioconductor-sbgnview.data| image:: https://quay.io/repository/biocontainers/bioconductor-sbgnview.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sbgnview.data
.. _`bioconductor-sbgnview.data/tags`: https://quay.io/repository/biocontainers/bioconductor-sbgnview.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sbgnview.data";
        var versions = ["1.14.0","1.12.0","1.11.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sbgnview.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sbgnview.data/README.html