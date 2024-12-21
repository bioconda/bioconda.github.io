:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scanmir'
.. highlight: bash

bioconductor-scanmir
====================

.. conda:recipe:: bioconductor-scanmir
   :replaces_section_title:
   :noindex:

   scanMiR

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scanMiR.html
   :license: GPL-3
   :recipe: /`bioconductor-scanmir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanmir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanmir/meta.yaml>`_

   A set of tools for working with miRNA affinity models \(KdModels\)\, efficiently scanning for miRNA binding sites\, and predicting target repression. It supports scanning using miRNA seeds\, full miRNA sequences \(enabling 3\' alignment\) and KdModels\, and includes the prediction of slicing and TDMD sites. Finally\, it includes utility and plotting functions \(e.g. for the visual representation of miRNA\-target alignment\).


.. conda:package:: bioconductor-scanmir

   |downloads_bioconductor-scanmir| |docker_bioconductor-scanmir|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-seqlogo: ``>=1.72.0,<1.73.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-stringi: 
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

      mamba install bioconductor-scanmir

   and update with::

      mamba update bioconductor-scanmir

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scanmir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scanmir:<tag>

   (see `bioconductor-scanmir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scanmir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scanmir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scanmir
   :alt:   (downloads)
.. |docker_bioconductor-scanmir| image:: https://quay.io/repository/biocontainers/bioconductor-scanmir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scanmir
.. _`bioconductor-scanmir/tags`: https://quay.io/repository/biocontainers/bioconductor-scanmir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scanmir";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scanmir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scanmir/README.html