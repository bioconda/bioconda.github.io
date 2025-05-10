:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mobster'
.. highlight: bash

r-mobster
=========

.. conda:recipe:: r-mobster
   :replaces_section_title:
   :noindex:

   Model\-based subclonal deconvolution from bulk sequencing.

   :homepage: https://github.com/caravagnalab/mobster
   :documentation: https://caravagnalab.github.io/mobster/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-mobster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mobster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mobster/meta.yaml>`_

   MOBSTER is a package that implements a statistical model for tumour
   subclonal deconvolution which combines Dirichlet mixtures with distributions
   predicted by theoretical population genetics. The model implemented is a
   parametric \(finite\) mixture with multiple Beta components\, and one Pareto
   power law tail. Beta components capture mutations that rise up in frequency
   by positive selection\, and the Pareto tail models alleles resulting from
   neutral\, intra\-clone\, evolutionary dynamics.



.. conda:package:: r-mobster

   |downloads_r-mobster| |docker_r-mobster|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-clisymbols: 
   :depends r-cowplot: 
   :depends r-crayon: 
   :depends r-dndscv: 
   :depends r-dplyr: 
   :depends r-easypar: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-ggthemes: 
   :depends r-magrittr: 
   :depends r-pio: 
   :depends r-sads: 
   :depends r-tidyr: 
   :depends r-tidyverse: 
   :depends r-vcfr: 
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

      mamba install r-mobster

   and update with::

      mamba update r-mobster

  To create a new environment, run::

      mamba create --name myenvname r-mobster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mobster:<tag>

   (see `r-mobster/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mobster| image:: https://img.shields.io/conda/dn/bioconda/r-mobster.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mobster
   :alt:   (downloads)
.. |docker_r-mobster| image:: https://quay.io/repository/biocontainers/r-mobster/status
   :target: https://quay.io/repository/biocontainers/r-mobster
.. _`r-mobster/tags`: https://quay.io/repository/biocontainers/r-mobster?tab=tags


.. raw:: html

    <script>
        var package = "r-mobster";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mobster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mobster/README.html