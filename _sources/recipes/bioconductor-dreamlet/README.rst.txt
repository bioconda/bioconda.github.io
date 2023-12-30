:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dreamlet'
.. highlight: bash

bioconductor-dreamlet
=====================

.. conda:recipe:: bioconductor-dreamlet
   :replaces_section_title:
   :noindex:

   Cohort\-scale differential expression analysis of single cell data using linear \(mixed\) models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/dreamlet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dreamlet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dreamlet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dreamlet/meta.yaml>`_

   Recent advances in single cell\/nucleus transcriptomic technology has enabled collection of cohort\-scale datasets to study cell type specific gene expression differences associated disease state\, stimulus\, and genetic regulation. The scale of these data\, complex study designs\, and low read count per cell mean that characterizing cell type specific molecular mechanisms requires a user\-frieldly\, purpose\-build analytical framework. We have developed the dreamlet package that applies a pseudobulk approach and fits a regression model for each gene and cell cluster to test differential expression across individuals associated with a trait of interest. Use of precision\-weighted linear mixed models enables accounting for repeated measures study designs\, high dimensional batch effects\, and varying sequencing depth or observed cells per biosample.


.. conda:package:: bioconductor-dreamlet

   |downloads_bioconductor-dreamlet| |docker_bioconductor-dreamlet|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-dreamlet

   and update with::

      mamba update bioconductor-dreamlet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dreamlet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dreamlet:<tag>

   (see `bioconductor-dreamlet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dreamlet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dreamlet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dreamlet
   :alt:   (downloads)
.. |docker_bioconductor-dreamlet| image:: https://quay.io/repository/biocontainers/bioconductor-dreamlet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dreamlet
.. _`bioconductor-dreamlet/tags`: https://quay.io/repository/biocontainers/bioconductor-dreamlet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dreamlet";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dreamlet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dreamlet/README.html