:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qfeatures'
.. highlight: bash

bioconductor-qfeatures
======================

.. conda:recipe:: bioconductor-qfeatures
   :replaces_section_title:
   :noindex:

   Quantitative features for mass spectrometry data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/QFeatures.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-qfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qfeatures/meta.yaml>`_

   The QFeatures infrastructure enables the management and processing of quantitative features for high\-throughput mass spectrometry assays. It provides a familiar Bioconductor user experience to manages quantitative data across different assay levels \(such as peptide spectrum matches\, peptides and proteins\) in a coherent and tractable format.


.. conda:package:: bioconductor-qfeatures

   |downloads_bioconductor-qfeatures| |docker_bioconductor-qfeatures|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationfilter: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-mscoreutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-lazyeval: 
   :depends r-plotly: 
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

      mamba install bioconductor-qfeatures

   and update with::

      mamba update bioconductor-qfeatures

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qfeatures

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qfeatures:<tag>

   (see `bioconductor-qfeatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qfeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qfeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qfeatures
   :alt:   (downloads)
.. |docker_bioconductor-qfeatures| image:: https://quay.io/repository/biocontainers/bioconductor-qfeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qfeatures
.. _`bioconductor-qfeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-qfeatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qfeatures";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qfeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qfeatures/README.html