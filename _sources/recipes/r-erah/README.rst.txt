:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-erah'
.. highlight: bash

r-erah
======

.. conda:recipe:: r-erah
   :replaces_section_title:
   :noindex:

   Automated compound deconvolution\, alignment across samples\, and identification of metabolites by spectral library matching in Gas Chromatography \- Mass spectrometry \(GC\-MS\) untargeted metabolomics.

   :homepage: https://CRAN.R-project.org/package=erah
   :license: GPL-2.0-or-later
   :recipe: /`r-erah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-erah>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-erah/meta.yaml>`_

   Outputs a table with compound names\, matching scores and the integrated area of the compound for each sample. Package implementation is described in Domingo\-Almenara et al. \(2016\) \<doi\:10.1021\/acs.analchem.6b02927\>.


.. conda:package:: r-erah

   |downloads_r-erah| |docker_r-erah|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-furrr: 
   :depends r-future: 
   :depends r-hiclimr: 
   :depends r-igraph: 
   :depends r-osd: 
   :depends r-progress: 
   :depends r-quantreg: 
   :depends r-signal: 
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

      mamba install r-erah

   and update with::

      mamba update r-erah

  To create a new environment, run::

      mamba create --name myenvname r-erah

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-erah:<tag>

   (see `r-erah/tags`_ for valid values for ``<tag>``)


.. |downloads_r-erah| image:: https://img.shields.io/conda/dn/bioconda/r-erah.svg?style=flat
   :target: https://anaconda.org/bioconda/r-erah
   :alt:   (downloads)
.. |docker_r-erah| image:: https://quay.io/repository/biocontainers/r-erah/status
   :target: https://quay.io/repository/biocontainers/r-erah
.. _`r-erah/tags`: https://quay.io/repository/biocontainers/r-erah?tab=tags


.. raw:: html

    <script>
        var package = "r-erah";
        var versions = ["2.0.1","2.0.0","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-erah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-erah/README.html