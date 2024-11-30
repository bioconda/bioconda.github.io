:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr.alkanilineseq'
.. highlight: bash

bioconductor-rnamodr.alkanilineseq
==================================

.. conda:recipe:: bioconductor-rnamodr.alkanilineseq
   :replaces_section_title:
   :noindex:

   Detection of m7G\, m3C and D modification by AlkAnilineSeq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RNAmodR.AlkAnilineSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr.alkanilineseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.alkanilineseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.alkanilineseq/meta.yaml>`_

   RNAmodR.AlkAnilineSeq implements the detection of m7G\, m3C and D modifications on RNA from experimental data generated with the AlkAnilineSeq protocol. The package builds on the core functionality of the RNAmodR package to detect specific patterns of the modifications in high throughput sequencing data.


.. conda:package:: bioconductor-rnamodr.alkanilineseq

   |downloads_bioconductor-rnamodr.alkanilineseq| |docker_bioconductor-rnamodr.alkanilineseq|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rnamodr: ``>=1.16.0,<1.17.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rnamodr.alkanilineseq

   and update with::

      mamba update bioconductor-rnamodr.alkanilineseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnamodr.alkanilineseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnamodr.alkanilineseq:<tag>

   (see `bioconductor-rnamodr.alkanilineseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnamodr.alkanilineseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.alkanilineseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr.alkanilineseq
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr.alkanilineseq| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr.alkanilineseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr.alkanilineseq
.. _`bioconductor-rnamodr.alkanilineseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr.alkanilineseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnamodr.alkanilineseq";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr.alkanilineseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr.alkanilineseq/README.html