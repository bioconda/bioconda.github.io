:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr.ribomethseq'
.. highlight: bash

bioconductor-rnamodr.ribomethseq
================================

.. conda:recipe:: bioconductor-rnamodr.ribomethseq
   :replaces_section_title:
   :noindex:

   Detection of 2\'\-O methylations by RiboMethSeq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RNAmodR.RiboMethSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr.ribomethseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.ribomethseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.ribomethseq/meta.yaml>`_

   RNAmodR.RiboMethSeq implements the detection of 2\'\-O methylations on RNA from experimental data generated with the RiboMethSeq protocol. The package builds on the core functionality of the RNAmodR package to detect specific patterns of the modifications in high throughput sequencing data.


.. conda:package:: bioconductor-rnamodr.ribomethseq

   |downloads_bioconductor-rnamodr.ribomethseq| |docker_bioconductor-rnamodr.ribomethseq|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rnamodr: ``>=1.14.0,<1.15.0``
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

      mamba install bioconductor-rnamodr.ribomethseq

   and update with::

      mamba update bioconductor-rnamodr.ribomethseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnamodr.ribomethseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnamodr.ribomethseq:<tag>

   (see `bioconductor-rnamodr.ribomethseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnamodr.ribomethseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.ribomethseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr.ribomethseq
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr.ribomethseq| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ribomethseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ribomethseq
.. _`bioconductor-rnamodr.ribomethseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ribomethseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnamodr.ribomethseq";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr.ribomethseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr.ribomethseq/README.html