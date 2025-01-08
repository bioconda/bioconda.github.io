:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pipets'
.. highlight: bash

bioconductor-pipets
===================

.. conda:recipe:: bioconductor-pipets
   :replaces_section_title:
   :noindex:

   Poisson Identification of PEaks from Term\-Seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PIPETS.html
   :license: GPL-3
   :recipe: /`bioconductor-pipets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipets/meta.yaml>`_

   PIPETS provides statistically robust analysis for 3\'\-seq\/term\-seq data. It utilizes a sliding window approach to apply a Poisson Distribution test to identify genomic positions with termination read coverage that is significantly higher than the surrounding signal. PIPETS then condenses proximal signal and produces strand specific results that contain all significant termination peaks.


.. conda:package:: bioconductor-pipets

   |downloads_bioconductor-pipets| |docker_bioconductor-pipets|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
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

      mamba install bioconductor-pipets

   and update with::

      mamba update bioconductor-pipets

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pipets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pipets:<tag>

   (see `bioconductor-pipets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pipets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pipets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pipets
   :alt:   (downloads)
.. |docker_bioconductor-pipets| image:: https://quay.io/repository/biocontainers/bioconductor-pipets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pipets
.. _`bioconductor-pipets/tags`: https://quay.io/repository/biocontainers/bioconductor-pipets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pipets";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pipets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pipets/README.html