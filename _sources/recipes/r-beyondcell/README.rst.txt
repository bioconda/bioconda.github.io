:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-beyondcell'
.. highlight: bash

r-beyondcell
============

.. conda:recipe:: r-beyondcell
   :replaces_section_title:
   :noindex:

   Tool for the Analysis of tumour therapeutic heterogeneity in single\-cell RNA\-seq

   :homepage: https://gitlab.com/bu_cnio/beyondcell
   :license: GPL-3
   :recipe: /`r-beyondcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-beyondcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-beyondcell/meta.yaml>`_

   Beyondcell is a methodology for the identification of drug vulnerabilities in single\-cell RNA\-seq \(scRNA\-seq\) data. To this end\, Beyondcell focuses on the analysis of drug\-related commonalities between cells by classifying them into distinct Therapeutic Clusters \(TCs\).


.. conda:package:: r-beyondcell

   |downloads_r-beyondcell| |docker_r-beyondcell|

   :versions:
      
      

      ``1.3.3-1``,  ``1.3.3-0``

      

   
   :depends bioconductor-qusage: ``>=2.22.0``
   :depends numba: ``0.46.*``
   :depends python: ``3.6.*``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bnstruct: ``>=1.0.6``
   :depends r-cowplot: ``>=1.1.0``
   :depends r-deldir: ``>=1.0_2``
   :depends r-gdata: ``>=2.18.0``
   :depends r-ggplot2: ``>=3.3.2``
   :depends r-ggrepel: ``>=0.8.2``
   :depends r-patchwork: ``>=1.0.1``
   :depends r-plyr: ``>=1.8.6``
   :depends r-rcolorbrewer: ``>=1.1-2``
   :depends r-reshape2: ``>=1.4.4``
   :depends r-scales: ``>=1.1.1``
   :depends r-see: 
   :depends r-seurat: ``>=3.2.2``
   :depends r-useful: 
   :depends r-viridis: ``>=0.5.1``
   :depends umap-learn: ``0.4.6.*``
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

      mamba install r-beyondcell

   and update with::

      mamba update r-beyondcell

  To create a new environment, run::

      mamba create --name myenvname r-beyondcell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-beyondcell:<tag>

   (see `r-beyondcell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-beyondcell| image:: https://img.shields.io/conda/dn/bioconda/r-beyondcell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-beyondcell
   :alt:   (downloads)
.. |docker_r-beyondcell| image:: https://quay.io/repository/biocontainers/r-beyondcell/status
   :target: https://quay.io/repository/biocontainers/r-beyondcell
.. _`r-beyondcell/tags`: https://quay.io/repository/biocontainers/r-beyondcell?tab=tags


.. raw:: html

    <script>
        var package = "r-beyondcell";
        var versions = ["1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-beyondcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-beyondcell/README.html