:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepstats'
.. highlight: bash

deepstats
=========

.. conda:recipe:: deepstats
   :replaces_section_title:
   :noindex:

   A statistical and dataviz toolbox for deeptools\, genomic signals\, and more.

   :homepage: https://github.com/gtrichard/deepStats
   :license: GPL3
   :recipe: /`deepstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepstats/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3336593`

   


.. conda:package:: deepstats

   |downloads_deepstats| |docker_deepstats|

   :versions:
      
      

      ``0.4-1``,  ``0.4-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends bioconductor-iranges: 
   :depends bioconductor-rsamtools: 
   :depends r-argparse: 
   :depends r-base: ``>=3.5.1``
   :depends r-boot: 
   :depends r-cowplot: 
   :depends r-dichromat: 
   :depends r-essentials: 
   :depends r-ggplot2: 
   :depends r-optparse: 
   :depends r-purrr: 
   :depends r-seqinr: 
   :depends r-showtext: 
   :depends r-stringr: 
   :depends r-tidyverse: 
   :depends r-vroom: 
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

      mamba install deepstats

   and update with::

      mamba update deepstats

  To create a new environment, run::

      mamba create --name myenvname deepstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepstats:<tag>

   (see `deepstats/tags`_ for valid values for ``<tag>``)


.. |downloads_deepstats| image:: https://img.shields.io/conda/dn/bioconda/deepstats.svg?style=flat
   :target: https://anaconda.org/bioconda/deepstats
   :alt:   (downloads)
.. |docker_deepstats| image:: https://quay.io/repository/biocontainers/deepstats/status
   :target: https://quay.io/repository/biocontainers/deepstats
.. _`deepstats/tags`: https://quay.io/repository/biocontainers/deepstats?tab=tags


.. raw:: html

    <script>
        var package = "deepstats";
        var versions = ["0.4","0.4","0.3.1","0.3","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepstats/README.html