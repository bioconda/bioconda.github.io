:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-partcnv'
.. highlight: bash

bioconductor-partcnv
====================

.. conda:recipe:: bioconductor-partcnv
   :replaces_section_title:
   :noindex:

   Infer locally aneuploid cells using single cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/partCNV.html
   :license: GPL-2
   :recipe: /`bioconductor-partcnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-partcnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-partcnv/meta.yaml>`_

   This package uses a statistical framework for rapid and accurate detection of aneuploid cells with local copy number deletion or amplification. Our method uses an EM algorithm with mixtures of Poisson distributions while incorporating cytogenetics information \(e.g.\, regional deletion or amplification\) to guide the classification \(partCNV\). When applicable\, we further improve the accuracy by integrating a Hidden Markov Model for feature selection \(partCNVH\).


.. conda:package:: bioconductor-partcnv

   |downloads_bioconductor-partcnv| |docker_bioconductor-partcnv|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-depmixs4: 
   :depends r-magrittr: 
   :depends r-seurat: 
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

      mamba install bioconductor-partcnv

   and update with::

      mamba update bioconductor-partcnv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-partcnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-partcnv:<tag>

   (see `bioconductor-partcnv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-partcnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-partcnv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-partcnv
   :alt:   (downloads)
.. |docker_bioconductor-partcnv| image:: https://quay.io/repository/biocontainers/bioconductor-partcnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-partcnv
.. _`bioconductor-partcnv/tags`: https://quay.io/repository/biocontainers/bioconductor-partcnv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-partcnv";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-partcnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-partcnv/README.html