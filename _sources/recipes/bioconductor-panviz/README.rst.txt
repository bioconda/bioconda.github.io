:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panviz'
.. highlight: bash

bioconductor-panviz
===================

.. conda:recipe:: bioconductor-panviz
   :replaces_section_title:
   :noindex:

   Integrating Multi\-Omic Network Data With Summay\-Level GWAS Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PanViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-panviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panviz/meta.yaml>`_

   This pacakge integrates data from the Kyoto Encyclopedia of Genes and Genomes \(KEGG\) with summary\-level genome\-wide association \(GWAS\) data\, such as that provided by the GWAS Catalog or GWAS Central databases\, or a user\'s own study or dataset\, in order to produce biological networks\, termed IMONs \(Integrated Multi\-Omic Networks\). IMONs can be used to analyse trait\-specific polymorphic data within the context of biochemical and metabolic reaction networks\, providing greater biological interpretability for GWAS data.


.. conda:package:: bioconductor-panviz

   |downloads_bioconductor-panviz| |docker_bioconductor-panviz|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorspace: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-easycsv: 
   :depends r-futile.logger: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-rentrez: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-panviz

   and update with::

      mamba update bioconductor-panviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-panviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panviz:<tag>

   (see `bioconductor-panviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panviz
   :alt:   (downloads)
.. |docker_bioconductor-panviz| image:: https://quay.io/repository/biocontainers/bioconductor-panviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panviz
.. _`bioconductor-panviz/tags`: https://quay.io/repository/biocontainers/bioconductor-panviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-panviz";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panviz/README.html