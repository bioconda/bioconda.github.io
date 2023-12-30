:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbqtl'
.. highlight: bash

bioconductor-mbqtl
==================

.. conda:recipe:: bioconductor-mbqtl
   :replaces_section_title:
   :noindex:

   mbQTL\: A package for SNP\-Taxa mGWAS analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mbQTL.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mbqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbqtl/meta.yaml>`_

   mbQTL is a statistical R package for simultaneous 16srRNA\,16srDNA \(microbial\) and variant\, SNP\, SNV \(host\) relationship\, correlation\, regression studies. We apply linear\, logistic and correlation based statistics to identify the relationships of taxa\, genus\, species and variant\, SNP\, SNV in the infected host. We produce various statistical significance measures such as P values\, FDR\, BC and probability estimation to show significance of these relationships. Further we provide various visualization function for ease and clarification of the results of these analysis. The package is compatible with dataframe\, MRexperiment and text formats.


.. conda:package:: bioconductor-mbqtl

   |downloads_bioconductor-mbqtl| |docker_bioconductor-mbqtl|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-metagenomeseq: ``>=1.43.0,<1.44.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrixeqtl: 
   :depends r-pheatmap: 
   :depends r-readxl: 
   :depends r-stringr: 
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

      mamba install bioconductor-mbqtl

   and update with::

      mamba update bioconductor-mbqtl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mbqtl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbqtl:<tag>

   (see `bioconductor-mbqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbqtl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbqtl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbqtl
   :alt:   (downloads)
.. |docker_bioconductor-mbqtl| image:: https://quay.io/repository/biocontainers/bioconductor-mbqtl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbqtl
.. _`bioconductor-mbqtl/tags`: https://quay.io/repository/biocontainers/bioconductor-mbqtl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbqtl";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbqtl/README.html