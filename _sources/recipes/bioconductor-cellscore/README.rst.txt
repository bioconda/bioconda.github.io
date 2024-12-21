:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellscore'
.. highlight: bash

bioconductor-cellscore
======================

.. conda:recipe:: bioconductor-cellscore
   :replaces_section_title:
   :noindex:

   Tool for Evaluation of Cell Identity from Transcription Profiles

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CellScore.html
   :license: GPL-3
   :recipe: /`bioconductor-cellscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscore/meta.yaml>`_

   The CellScore package contains functions to evaluate the cell identity of a test sample\, given a cell transition defined with a starting \(donor\) cell type and a desired target cell type. The evaluation is based upon a scoring system\, which uses a set of standard samples of known cell types\, as the reference set. The functions have been carried out on a large set of microarray data from one platform \(Affymetrix Human Genome U133 Plus 2.0\). In principle\, the method could be applied to any expression dataset\, provided that there are a sufficient number of standard samples and that the data are normalized.


.. conda:package:: bioconductor-cellscore

   |downloads_bioconductor-cellscore| |docker_bioconductor-cellscore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gplots: ``>=3.0.1``
   :depends r-lsa: ``>=0.73.1``
   :depends r-rcolorbrewer: ``>=1.1-2``
   :depends r-squash: ``>=1.0.8``
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

      mamba install bioconductor-cellscore

   and update with::

      mamba update bioconductor-cellscore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellscore:<tag>

   (see `bioconductor-cellscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellscore
   :alt:   (downloads)
.. |docker_bioconductor-cellscore| image:: https://quay.io/repository/biocontainers/bioconductor-cellscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellscore
.. _`bioconductor-cellscore/tags`: https://quay.io/repository/biocontainers/bioconductor-cellscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellscore";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellscore/README.html