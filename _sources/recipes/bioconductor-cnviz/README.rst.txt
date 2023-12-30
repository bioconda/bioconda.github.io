:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnviz'
.. highlight: bash

bioconductor-cnviz
==================

.. conda:recipe:: bioconductor-cnviz
   :replaces_section_title:
   :noindex:

   Copy Number Visualization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CNViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnviz/meta.yaml>`_

   CNViz takes probe\, gene\, and segment\-level log2 copy number ratios and launches a Shiny app to visualize your sample\'s copy number profile. You can also integrate loss of heterozygosity \(LOH\) and single nucleotide variant \(SNV\) data.


.. conda:package:: bioconductor-cnviz

   |downloads_bioconductor-cnviz| |docker_bioconductor-cnviz|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-copynumberplots: ``>=1.18.0,<1.19.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-karyoploter: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-scales: 
   :depends r-shiny: ``>=1.5.0``
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

      mamba install bioconductor-cnviz

   and update with::

      mamba update bioconductor-cnviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cnviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnviz:<tag>

   (see `bioconductor-cnviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnviz
   :alt:   (downloads)
.. |docker_bioconductor-cnviz| image:: https://quay.io/repository/biocontainers/bioconductor-cnviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnviz
.. _`bioconductor-cnviz/tags`: https://quay.io/repository/biocontainers/bioconductor-cnviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnviz";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnviz/README.html