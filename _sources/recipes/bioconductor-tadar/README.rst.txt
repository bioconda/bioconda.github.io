:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tadar'
.. highlight: bash

bioconductor-tadar
==================

.. conda:recipe:: bioconductor-tadar
   :replaces_section_title:
   :noindex:

   Transcriptome Analysis of Differential Allelic Representation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tadar.html
   :license: GPL-3
   :recipe: /`bioconductor-tadar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadar/meta.yaml>`_

   This package provides functions to standardise the analysis of Differential Allelic Representation \(DAR\). DAR compromises the integrity of Differential Expression analysis results as it can bias expression\, influencing the classification of genes \(or transcripts\) as being differentially expressed. DAR analysis results in an easy\-to\-interpret value between 0 and 1 for each genetic feature of interest\, where 0 represents identical allelic representation and 1 represents complete diversity. This metric can be used to identify features prone to false\-positive calls in Differential Expression analysis\, and can be leveraged with statistical methods to alleviate the impact of such artefacts on RNA\-seq data.


.. conda:package:: bioconductor-tadar

   |downloads_bioconductor-tadar| |docker_bioconductor-tadar|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-rlang: 
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

      mamba install bioconductor-tadar

   and update with::

      mamba update bioconductor-tadar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tadar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tadar:<tag>

   (see `bioconductor-tadar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tadar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tadar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tadar
   :alt:   (downloads)
.. |docker_bioconductor-tadar| image:: https://quay.io/repository/biocontainers/bioconductor-tadar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tadar
.. _`bioconductor-tadar/tags`: https://quay.io/repository/biocontainers/bioconductor-tadar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tadar";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tadar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tadar/README.html