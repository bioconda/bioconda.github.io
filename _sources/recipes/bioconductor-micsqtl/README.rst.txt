:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-micsqtl'
.. highlight: bash

bioconductor-micsqtl
====================

.. conda:recipe:: bioconductor-micsqtl
   :replaces_section_title:
   :noindex:

   MICSQTL \(Multi\-omic deconvolution\, Integration and Cell\-type\-specific Quantitative Trait Loci\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MICSQTL.html
   :license: GPL-3
   :recipe: /`bioconductor-micsqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-micsqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-micsqtl/meta.yaml>`_

   Our pipeline\, MICSQTL\, utilizes scRNA\-seq reference and bulk transcriptomes to estimate cellular composition in the matched bulk proteomes. The expression of genes and proteins at either bulk level or cell type level can be integrated by Angle\-based Joint and Individual Variation Explained \(AJIVE\) framework. Meanwhile\, MICSQTL can perform cell\-type\-specic quantitative trait loci \(QTL\) mapping to proteins or transcripts based on the input of bulk expression data and the estimated cellular composition per molecule type\, without the need for single cell sequencing. We use matched transcriptome\-proteome from human brain frontal cortex tissue samples to demonstrate the input and output of our tool.


.. conda:package:: bioconductor-micsqtl

   |downloads_bioconductor-micsqtl| |docker_bioconductor-micsqtl|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-micsqtl

   and update with::

      mamba update bioconductor-micsqtl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-micsqtl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-micsqtl:<tag>

   (see `bioconductor-micsqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-micsqtl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-micsqtl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-micsqtl
   :alt:   (downloads)
.. |docker_bioconductor-micsqtl| image:: https://quay.io/repository/biocontainers/bioconductor-micsqtl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-micsqtl
.. _`bioconductor-micsqtl/tags`: https://quay.io/repository/biocontainers/bioconductor-micsqtl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-micsqtl";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-micsqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-micsqtl/README.html