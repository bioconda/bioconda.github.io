:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spotlight'
.. highlight: bash

bioconductor-spotlight
======================

.. conda:recipe:: bioconductor-spotlight
   :replaces_section_title:
   :noindex:

   \`SPOTlight\`\: Spatial Transcriptomics Deconvolution

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SPOTlight.html
   :license: GPL-3
   :recipe: /`bioconductor-spotlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spotlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spotlight/meta.yaml>`_

   \`SPOTlight\`provides a method to deconvolute spatial transcriptomics spots using a seeded NMF approach along with visualization tools to assess the results. Spatially resolved gene expression profiles are key to understand tissue organization and function. However\, novel spatial transcriptomics \(ST\) profiling techniques lack single\-cell resolution and require a combination with single\-cell RNA sequencing \(scRNA\-seq\) information to deconvolute the spatially indexed datasets. Leveraging the strengths of both data types\, we developed SPOTlight\, a computational tool that enables the integration of ST with scRNA\-seq data to infer the location of cell types and states within a complex tissue. SPOTlight is centered around a seeded non\-negative matrix factorization \(NMF\) regression\, initialized using cell\-type marker genes and non\-negative least squares \(NNLS\) to subsequently deconvolute ST capture locations \(spots\).


.. conda:package:: bioconductor-spotlight

   |downloads_bioconductor-spotlight| |docker_bioconductor-spotlight|

   :versions:
      
      

      ``1.4.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nmf: 
   :depends r-nnls: 
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

      mamba install bioconductor-spotlight

   and update with::

      mamba update bioconductor-spotlight

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spotlight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spotlight:<tag>

   (see `bioconductor-spotlight/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spotlight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spotlight.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spotlight
   :alt:   (downloads)
.. |docker_bioconductor-spotlight| image:: https://quay.io/repository/biocontainers/bioconductor-spotlight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spotlight
.. _`bioconductor-spotlight/tags`: https://quay.io/repository/biocontainers/bioconductor-spotlight?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spotlight";
        var versions = ["1.4.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spotlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spotlight/README.html