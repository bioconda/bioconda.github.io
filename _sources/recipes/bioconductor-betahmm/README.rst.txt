:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-betahmm'
.. highlight: bash

bioconductor-betahmm
====================

.. conda:recipe:: bioconductor-betahmm
   :replaces_section_title:
   :noindex:

   A Hidden Markov Model Approach for Identifying Differentially Methylated Sites and Regions for Beta\-Valued DNA Methylation Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/betaHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-betahmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-betahmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-betahmm/meta.yaml>`_

   A novel approach utilizing a homogeneous hidden Markov model. And effectively model untransformed beta values. To identify DMCs while considering the spatial. Correlation of the adjacent CpG sites.


.. conda:package:: bioconductor-betahmm

   |downloads_bioconductor-betahmm| |docker_bioconductor-betahmm|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-proc: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
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

      mamba install bioconductor-betahmm

   and update with::

      mamba update bioconductor-betahmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-betahmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-betahmm:<tag>

   (see `bioconductor-betahmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-betahmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-betahmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-betahmm
   :alt:   (downloads)
.. |docker_bioconductor-betahmm| image:: https://quay.io/repository/biocontainers/bioconductor-betahmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-betahmm
.. _`bioconductor-betahmm/tags`: https://quay.io/repository/biocontainers/bioconductor-betahmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-betahmm";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-betahmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-betahmm/README.html