:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bobafit'
.. highlight: bash

bioconductor-bobafit
====================

.. conda:recipe:: bioconductor-bobafit
   :replaces_section_title:
   :noindex:

   Refitting diploid region profiles using a clustering procedure

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BOBaFIT.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-bobafit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bobafit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bobafit/meta.yaml>`_

   This package provides a method to refit and correct the diploid region in copy number profiles. It uses a clustering algorithm to identify pathology\-specific normal \(diploid\) chromosomes and then use their copy number signal to refit the whole profile.  The package is composed by three functions\: DRrefit \(the main function\)\, ComputeNormalChromosome and PlotCluster.


.. conda:package:: bioconductor-bobafit

   |downloads_bioconductor-bobafit| |docker_bioconductor-bobafit|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-ggbio: ``>=1.54.0,<1.55.0``
   :depends bioconductor-plyranges: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-nbclust: 
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

      mamba install bioconductor-bobafit

   and update with::

      mamba update bioconductor-bobafit

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bobafit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bobafit:<tag>

   (see `bioconductor-bobafit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bobafit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bobafit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bobafit
   :alt:   (downloads)
.. |docker_bioconductor-bobafit| image:: https://quay.io/repository/biocontainers/bioconductor-bobafit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bobafit
.. _`bioconductor-bobafit/tags`: https://quay.io/repository/biocontainers/bioconductor-bobafit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bobafit";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bobafit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bobafit/README.html