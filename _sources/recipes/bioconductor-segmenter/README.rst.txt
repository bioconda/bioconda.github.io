:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-segmenter'
.. highlight: bash

bioconductor-segmenter
======================

.. conda:recipe:: bioconductor-segmenter
   :replaces_section_title:
   :noindex:

   Perform Chromatin Segmentation Analysis in R by Calling ChromHMM

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/segmenter.html
   :license: GPL-3
   :recipe: /`bioconductor-segmenter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-segmenter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-segmenter/meta.yaml>`_

   Chromatin segmentation analysis transforms ChIP\-seq data into signals over the genome. The latter represents the observed states in a multivariate Markov model to predict the chromatin\'s underlying states. ChromHMM\, written in Java\, integrates histone modification datasets to learn the chromatin states de\-novo. The goal of this package is to call chromHMM from within R\, capture the output files in an S4 object and interface to other relevant Bioconductor analysis tools. In addition\, segmenter provides functions to test\, select and visualize the output of the segmentation.


.. conda:package:: bioconductor-segmenter

   |downloads_bioconductor-segmenter| |docker_bioconductor-segmenter|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bamsignals: ``>=1.32.0,<1.33.0``
   :depends bioconductor-chipseeker: ``>=1.36.0,<1.37.0``
   :depends bioconductor-chromhmmdata: ``>=0.99.0,<0.100.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-segmenter

   and update with::

      mamba update bioconductor-segmenter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-segmenter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-segmenter:<tag>

   (see `bioconductor-segmenter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-segmenter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-segmenter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-segmenter
   :alt:   (downloads)
.. |docker_bioconductor-segmenter| image:: https://quay.io/repository/biocontainers/bioconductor-segmenter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-segmenter
.. _`bioconductor-segmenter/tags`: https://quay.io/repository/biocontainers/bioconductor-segmenter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-segmenter";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-segmenter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-segmenter/README.html