:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fegenie'
.. highlight: bash

fegenie
=======

.. conda:recipe:: fegenie
   :replaces_section_title:
   :noindex:

   HMM\-based identification and categorization of iron genes and iron gene operons in genomes and metagenomes.

   :homepage: https://github.com/Arkadiy-Garber/FeGenie
   :license: AGPL / AGPL-3.0
   :recipe: /`fegenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fegenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fegenie/meta.yaml>`_
   :links: doi: :doi:`10.3389/fmicb.2020.00037`

   


.. conda:package:: fegenie

   |downloads_fegenie| |docker_fegenie|

   :versions:
      
      

      ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends blast: 
   :depends diamond: 
   :depends hmmer: 
   :depends metabat2: 
   :depends prodigal: 
   :depends python: ``>=3.7``
   :depends r-argparse: 
   :depends r-base: ``4.0.*``
   :depends r-broom: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gridbase: 
   :depends r-pvclust: 
   :depends r-reshape: 
   :depends r-reshape2: 
   :depends r-stringi: 
   :depends r-tidyverse: 
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

      mamba install fegenie

   and update with::

      mamba update fegenie

  To create a new environment, run::

      mamba create --name myenvname fegenie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fegenie:<tag>

   (see `fegenie/tags`_ for valid values for ``<tag>``)


.. |downloads_fegenie| image:: https://img.shields.io/conda/dn/bioconda/fegenie.svg?style=flat
   :target: https://anaconda.org/bioconda/fegenie
   :alt:   (downloads)
.. |docker_fegenie| image:: https://quay.io/repository/biocontainers/fegenie/status
   :target: https://quay.io/repository/biocontainers/fegenie
.. _`fegenie/tags`: https://quay.io/repository/biocontainers/fegenie?tab=tags


.. raw:: html

    <script>
        var package = "fegenie";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fegenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fegenie/README.html