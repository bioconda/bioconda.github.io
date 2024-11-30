:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cliprofiler'
.. highlight: bash

bioconductor-cliprofiler
========================

.. conda:recipe:: bioconductor-cliprofiler
   :replaces_section_title:
   :noindex:

   A package for the CLIP data visualization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cliProfiler.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cliprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliprofiler/meta.yaml>`_

   An easy and fast way to visualize and profile the high\-throughput IP data. This package generates the meta gene profile and other profiles. These profiles could provide valuable information for understanding the IP experiment results.


.. conda:package:: bioconductor-cliprofiler

   |downloads_bioconductor-cliprofiler| |docker_bioconductor-cliprofiler|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-cliprofiler

   and update with::

      mamba update bioconductor-cliprofiler

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cliprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cliprofiler:<tag>

   (see `bioconductor-cliprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cliprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cliprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cliprofiler
   :alt:   (downloads)
.. |docker_bioconductor-cliprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-cliprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cliprofiler
.. _`bioconductor-cliprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-cliprofiler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cliprofiler";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cliprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cliprofiler/README.html