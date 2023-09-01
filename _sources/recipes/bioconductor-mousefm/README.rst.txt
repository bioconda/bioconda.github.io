:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mousefm'
.. highlight: bash

bioconductor-mousefm
====================

.. conda:recipe:: bioconductor-mousefm
   :replaces_section_title:
   :noindex:

   In\-silico methods for genetic finemapping in inbred mice

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MouseFM.html
   :license: GPL-3
   :recipe: /`bioconductor-mousefm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousefm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousefm/meta.yaml>`_

   This package provides methods for genetic finemapping in inbred mice by taking advantage of their very high homozygosity rate \(\>95\%\).


.. conda:package:: bioconductor-mousefm

   |downloads_bioconductor-mousefm| |docker_bioconductor-mousefm|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-reshape2: 
   :depends r-rlist: 
   :depends r-scales: 
   :depends r-tidyr: 
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

      mamba install bioconductor-mousefm

   and update with::

      mamba update bioconductor-mousefm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mousefm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mousefm:<tag>

   (see `bioconductor-mousefm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mousefm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mousefm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mousefm
   :alt:   (downloads)
.. |docker_bioconductor-mousefm| image:: https://quay.io/repository/biocontainers/bioconductor-mousefm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mousefm
.. _`bioconductor-mousefm/tags`: https://quay.io/repository/biocontainers/bioconductor-mousefm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mousefm";
        var versions = ["1.10.0","1.8.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mousefm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mousefm/README.html