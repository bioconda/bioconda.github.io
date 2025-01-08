:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spiky'
.. highlight: bash

bioconductor-spiky
==================

.. conda:recipe:: bioconductor-spiky
   :replaces_section_title:
   :noindex:

   Spike\-in calibration for cell\-free MeDIP

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spiky.html
   :license: GPL-2
   :recipe: /`bioconductor-spiky <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiky>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiky/meta.yaml>`_

   spiky implements methods and model generation for cfMeDIP \(cell\-free methylated DNA immunoprecipitation\) with spike\-in controls. CfMeDIP is an enrichment protocol which avoids destructive conversion of scarce template\, making it ideal as a \"liquid biopsy\,\" but creating certain challenges in comparing results across specimens\, subjects\, and experiments. The use of synthetic spike\-in standard oligos allows diagnostics performed with cfMeDIP to quantitatively compare samples across subjects\, experiments\, and time points in both relative and absolute terms.


.. conda:package:: bioconductor-spiky

   |downloads_bioconductor-spiky| |docker_bioconductor-spiky|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-bamlss: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-blandaltmanleh: 
   :depends r-ggplot2: 
   :depends r-scales: 
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

      mamba install bioconductor-spiky

   and update with::

      mamba update bioconductor-spiky

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spiky

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spiky:<tag>

   (see `bioconductor-spiky/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spiky| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spiky.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spiky
   :alt:   (downloads)
.. |docker_bioconductor-spiky| image:: https://quay.io/repository/biocontainers/bioconductor-spiky/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spiky
.. _`bioconductor-spiky/tags`: https://quay.io/repository/biocontainers/bioconductor-spiky?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spiky";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spiky/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spiky/README.html