:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regionalpcs'
.. highlight: bash

bioconductor-regionalpcs
========================

.. conda:recipe:: bioconductor-regionalpcs
   :replaces_section_title:
   :noindex:

   Summarizing Regional Methylation with Regional Principal Components Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/regionalpcs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-regionalpcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionalpcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionalpcs/meta.yaml>`_

   Functions to summarize DNA methylation data using regional principal components. Regional principal components are computed using principal components analysis within genomic regions to summarize the variability in methylation levels across CpGs. The number of principal components is chosen using either the Marcenko\-Pasteur or Gavish\-Donoho method to identify relevant signal in the data.


.. conda:package:: bioconductor-regionalpcs

   |downloads_bioconductor-regionalpcs| |docker_bioconductor-regionalpcs|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-pcatools: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-tibble: 
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

      mamba install bioconductor-regionalpcs

   and update with::

      mamba update bioconductor-regionalpcs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regionalpcs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regionalpcs:<tag>

   (see `bioconductor-regionalpcs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regionalpcs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regionalpcs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regionalpcs
   :alt:   (downloads)
.. |docker_bioconductor-regionalpcs| image:: https://quay.io/repository/biocontainers/bioconductor-regionalpcs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regionalpcs
.. _`bioconductor-regionalpcs/tags`: https://quay.io/repository/biocontainers/bioconductor-regionalpcs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regionalpcs";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regionalpcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regionalpcs/README.html