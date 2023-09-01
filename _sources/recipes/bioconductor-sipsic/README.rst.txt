:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sipsic'
.. highlight: bash

bioconductor-sipsic
===================

.. conda:recipe:: bioconductor-sipsic
   :replaces_section_title:
   :noindex:

   Calculate Pathway Scores for Each Cell in scRNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SiPSiC.html
   :license: file LICENSE
   :recipe: /`bioconductor-sipsic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sipsic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sipsic/meta.yaml>`_

   Infer biological pathway activity of cells from single\-cell RNA\-sequencing data by calculating a pathway score for each cell \(pathway genes are specified by the user\). It is recommended to have the data in Transcripts\-Per\-Million \(TPM\) or Counts\-Per\-Million \(CPM\) units for best results. Scores may change when adding cells to or removing cells off the data. SiPSiC stands for Single Pathway analysis in Single Cells.


.. conda:package:: bioconductor-sipsic

   |downloads_bioconductor-sipsic| |docker_bioconductor-sipsic|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-sipsic

   and update with::

      mamba update bioconductor-sipsic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sipsic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sipsic:<tag>

   (see `bioconductor-sipsic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sipsic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sipsic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sipsic
   :alt:   (downloads)
.. |docker_bioconductor-sipsic| image:: https://quay.io/repository/biocontainers/bioconductor-sipsic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sipsic
.. _`bioconductor-sipsic/tags`: https://quay.io/repository/biocontainers/bioconductor-sipsic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sipsic";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sipsic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sipsic/README.html