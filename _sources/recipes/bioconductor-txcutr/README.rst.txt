:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txcutr'
.. highlight: bash

bioconductor-txcutr
===================

.. conda:recipe:: bioconductor-txcutr
   :replaces_section_title:
   :noindex:

   Transcriptome CUTteR

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/txcutr.html
   :license: GPL-3
   :recipe: /`bioconductor-txcutr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txcutr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txcutr/meta.yaml>`_

   Various mRNA sequencing library preparation methods generate sequencing reads specifically from the transcript ends. Analyses that focus on quantification of isoform usage from such data can be aided by using truncated versions of transcriptome annotations\, both at the alignment or pseudo\-alignment stage\, as well as in downstream analysis. This package implements some convenience methods for readily generating such truncated annotations and their corresponding sequences.


.. conda:package:: bioconductor-txcutr

   |downloads_bioconductor-txcutr| |docker_bioconductor-txcutr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
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

      mamba install bioconductor-txcutr

   and update with::

      mamba update bioconductor-txcutr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txcutr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txcutr:<tag>

   (see `bioconductor-txcutr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txcutr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txcutr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txcutr
   :alt:   (downloads)
.. |docker_bioconductor-txcutr| image:: https://quay.io/repository/biocontainers/bioconductor-txcutr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txcutr
.. _`bioconductor-txcutr/tags`: https://quay.io/repository/biocontainers/bioconductor-txcutr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txcutr";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txcutr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txcutr/README.html