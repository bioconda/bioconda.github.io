:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tinc'
.. highlight: bash

r-tinc
======

.. conda:recipe:: r-tinc
   :replaces_section_title:
   :noindex:

   TINC is a package that implements algorithms to determine the contamination of a bulk sequencing sample in the context of cancer studies \(matched tumour\/ normal\). The contamination estimated by TINC can be either due to normal cells sampled in the tumour biopsy or to tumour cells in the normal biopsy. The former case is traditionally called purity\, or cellularity\, and a number of tools exist to estimate it. The latter case is less common\, and that is the main reason TINC has been developed. For this reason\, the package takes name TINC\, Tumour\-in\-Normal contamination. TINC is part of the evoverse\, a package that gathers multiple R packages to implement Cancer Evolution analyses.

   :homepage: https://github.com/caravagnalab/TINC
   :license: GPL3 / GPL-3
   :recipe: /`r-tinc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tinc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tinc/meta.yaml>`_

   


.. conda:package:: r-tinc

   |downloads_r-tinc| |docker_r-tinc|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bmix: 
   :depends r-cli: 
   :depends r-cnaqc: 
   :depends r-cowplot: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-mobster: 
   :depends r-pio: 
   :depends r-purrr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vcfr: 
   :depends r-viber: 
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

      mamba install r-tinc

   and update with::

      mamba update r-tinc

  To create a new environment, run::

      mamba create --name myenvname r-tinc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tinc:<tag>

   (see `r-tinc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tinc| image:: https://img.shields.io/conda/dn/bioconda/r-tinc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tinc
   :alt:   (downloads)
.. |docker_r-tinc| image:: https://quay.io/repository/biocontainers/r-tinc/status
   :target: https://quay.io/repository/biocontainers/r-tinc
.. _`r-tinc/tags`: https://quay.io/repository/biocontainers/r-tinc?tab=tags


.. raw:: html

    <script>
        var package = "r-tinc";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tinc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tinc/README.html