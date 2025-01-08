:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtpca'
.. highlight: bash

bioconductor-rtpca
==================

.. conda:recipe:: bioconductor-rtpca
   :replaces_section_title:
   :noindex:

   Thermal proximity co\-aggregation with R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rtpca.html
   :license: GPL-3
   :recipe: /`bioconductor-rtpca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtpca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtpca/meta.yaml>`_

   R package for performing thermal proximity co\-aggregation analysis with thermal proteome profiling datasets to analyse protein complex assembly and \(differential\) protein\-protein interactions across conditions.


.. conda:package:: bioconductor-rtpca

   |downloads_bioconductor-rtpca| |docker_bioconductor-rtpca|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-fdrtool: 
   :depends r-ggplot2: 
   :depends r-proc: 
   :depends r-tibble: 
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

      mamba install bioconductor-rtpca

   and update with::

      mamba update bioconductor-rtpca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtpca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtpca:<tag>

   (see `bioconductor-rtpca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtpca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtpca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtpca
   :alt:   (downloads)
.. |docker_bioconductor-rtpca| image:: https://quay.io/repository/biocontainers/bioconductor-rtpca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtpca
.. _`bioconductor-rtpca/tags`: https://quay.io/repository/biocontainers/bioconductor-rtpca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtpca";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtpca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtpca/README.html