:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.gnomad.r2.1.grch38'
.. highlight: bash

bioconductor-mafdb.gnomad.r2.1.grch38
=====================================

.. conda:recipe:: bioconductor-mafdb.gnomad.r2.1.grch38
   :replaces_section_title:
   :noindex:

   Minor allele frequency data from gnomAD release 2.1 for GRCh38

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/MafDb.gnomAD.r2.1.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.gnomad.r2.1.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.gnomad.r2.1.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.gnomad.r2.1.grch38/meta.yaml>`_

   Store minor allele frequency data from the Genome Aggregation Database \(gnomAD release 2.1\) for the human genome version GRCh38.


.. conda:package:: bioconductor-mafdb.gnomad.r2.1.grch38

   |downloads_bioconductor-mafdb.gnomad.r2.1.grch38| |docker_bioconductor-mafdb.gnomad.r2.1.grch38|

   :versions:
      
      

      ``3.10.0-4``,  ``3.10.0-3``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.9.0-1``

      

   
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicscores: ``>=2.6.0,<2.7.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends curl: ``>=7.80.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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

      mamba install bioconductor-mafdb.gnomad.r2.1.grch38

   and update with::

      mamba update bioconductor-mafdb.gnomad.r2.1.grch38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mafdb.gnomad.r2.1.grch38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mafdb.gnomad.r2.1.grch38:<tag>

   (see `bioconductor-mafdb.gnomad.r2.1.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mafdb.gnomad.r2.1.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.gnomad.r2.1.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.gnomad.r2.1.grch38
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.gnomad.r2.1.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomad.r2.1.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomad.r2.1.grch38
.. _`bioconductor-mafdb.gnomad.r2.1.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomad.r2.1.grch38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mafdb.gnomad.r2.1.grch38";
        var versions = ["3.10.0","3.10.0","3.10.0","3.10.0","3.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.gnomad.r2.1.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.gnomad.r2.1.grch38/README.html