:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idr2d'
.. highlight: bash

bioconductor-idr2d
==================

.. conda:recipe:: bioconductor-idr2d
   :replaces_section_title:
   :noindex:

   Irreproducible Discovery Rate for Genomic Interactions Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/idr2d.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-idr2d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idr2d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idr2d/meta.yaml>`_

   A tool to measure reproducibility between genomic experiments that produce two\-dimensional peaks \(interactions between peaks\)\, such as ChIA\-PET\, HiChIP\, and HiC. idr2d is an extension of the original idr package\, which is intended for \(one\-dimensional\) ChIP\-seq peaks.


.. conda:package:: bioconductor-idr2d

   |downloads_bioconductor-idr2d| |docker_bioconductor-idr2d|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-futile.logger: ``>=1.4.3``
   :depends r-ggplot2: ``>=3.1.1``
   :depends r-idr: ``>=1.2``
   :depends r-magrittr: ``>=1.5``
   :depends r-reticulate: ``>=1.13``
   :depends r-scales: ``>=1.0.0``
   :depends r-stringr: ``>=1.3.1``
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

      mamba install bioconductor-idr2d

   and update with::

      mamba update bioconductor-idr2d

  To create a new environment, run::

      mamba create --name myenvname bioconductor-idr2d

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-idr2d:<tag>

   (see `bioconductor-idr2d/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-idr2d| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idr2d.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idr2d
   :alt:   (downloads)
.. |docker_bioconductor-idr2d| image:: https://quay.io/repository/biocontainers/bioconductor-idr2d/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idr2d
.. _`bioconductor-idr2d/tags`: https://quay.io/repository/biocontainers/bioconductor-idr2d?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-idr2d";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idr2d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idr2d/README.html