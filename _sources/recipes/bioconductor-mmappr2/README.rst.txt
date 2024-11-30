:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmappr2'
.. highlight: bash

bioconductor-mmappr2
====================

.. conda:recipe:: bioconductor-mmappr2
   :replaces_section_title:
   :noindex:

   Mutation Mapping Analysis Pipeline for Pooled RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MMAPPR2.html
   :license: GPL-3
   :recipe: /`bioconductor-mmappr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2/meta.yaml>`_

   MMAPPR2 maps mutations resulting from pooled RNA\-seq data from the F2 cross of forward genetic screens. Its predecessor is described in a paper published in Genome Research \(Hill et al. 2013\). MMAPPR2 accepts aligned BAM files as well as a reference genome as input\, identifies loci of high sequence disparity between the control and mutant RNA sequences\, predicts variant effects using Ensembl\'s Variant Effect Predictor\, and outputs a ranked list of candidate mutations.


.. conda:package:: bioconductor-mmappr2

   |downloads_bioconductor-mmappr2| |docker_bioconductor-mmappr2|

   :versions:
      
      

      ``1.14.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-ensemblvep: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gmapr: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends bioconductor-varianttools: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-mmappr2

   and update with::

      mamba update bioconductor-mmappr2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mmappr2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmappr2:<tag>

   (see `bioconductor-mmappr2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmappr2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmappr2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmappr2
   :alt:   (downloads)
.. |docker_bioconductor-mmappr2| image:: https://quay.io/repository/biocontainers/bioconductor-mmappr2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmappr2
.. _`bioconductor-mmappr2/tags`: https://quay.io/repository/biocontainers/bioconductor-mmappr2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mmappr2";
        var versions = ["1.14.0","1.8.0","1.6.0","1.4.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmappr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmappr2/README.html