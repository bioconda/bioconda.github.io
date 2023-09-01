:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cssq'
.. highlight: bash

bioconductor-cssq
=================

.. conda:recipe:: bioconductor-cssq
   :replaces_section_title:
   :noindex:

   Chip\-seq Signal Quantifier Pipeline

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CSSQ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cssq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cssq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cssq/meta.yaml>`_

   This package is desgined to perform statistical analysis to identify statistically significant differentially bound regions between multiple groups of ChIP\-seq dataset.


.. conda:package:: bioconductor-cssq

   |downloads_bioconductor-cssq| |docker_bioconductor-cssq|

   :versions:
      
      

      ``1.12.1-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
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

      mamba install bioconductor-cssq

   and update with::

      mamba update bioconductor-cssq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cssq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cssq:<tag>

   (see `bioconductor-cssq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cssq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cssq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cssq
   :alt:   (downloads)
.. |docker_bioconductor-cssq| image:: https://quay.io/repository/biocontainers/bioconductor-cssq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cssq
.. _`bioconductor-cssq/tags`: https://quay.io/repository/biocontainers/bioconductor-cssq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cssq";
        var versions = ["1.12.1","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cssq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cssq/README.html