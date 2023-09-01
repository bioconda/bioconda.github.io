:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conipher'
.. highlight: bash

conipher
========

.. conda:recipe:: conipher
   :replaces_section_title:
   :noindex:

   CONIPHER is an R package for clustering mutation data and reconstruction of tumor phylogenetic trees from DNA sequencing.

   :homepage: https://github.com/McGranahanLab/CONIPHER/
   :license: BSD-3-Clause
   :recipe: /`conipher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conipher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conipher/meta.yaml>`_
   :links: doi: :doi:`10.21203/rs.3.pex-2158/v1`

   


.. conda:package:: conipher

   |downloads_conipher| |docker_conipher|

   :versions:
      
      

      ``2.1.0-1``,  ``2.1.0-0``

      

   
   :depends pyclone: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-beeswarm: 
   :depends r-biocmanager: 
   :depends r-boot: 
   :depends r-bootstrap: 
   :depends r-catools: 
   :depends r-coin: 
   :depends r-cowplot: 
   :depends r-devtools: 
   :depends r-fst: 
   :depends r-ggpubr: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-igraph: 
   :depends r-kernsmooth: 
   :depends r-mapplots: 
   :depends r-optparse: 
   :depends r-parallelly: 
   :depends r-rcolorbrewer: 
   :depends r-tidyverse: 
   :depends r-wordcloud: 
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

      mamba install conipher

   and update with::

      mamba update conipher

  To create a new environment, run::

      mamba create --name myenvname conipher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/conipher:<tag>

   (see `conipher/tags`_ for valid values for ``<tag>``)


.. |downloads_conipher| image:: https://img.shields.io/conda/dn/bioconda/conipher.svg?style=flat
   :target: https://anaconda.org/bioconda/conipher
   :alt:   (downloads)
.. |docker_conipher| image:: https://quay.io/repository/biocontainers/conipher/status
   :target: https://quay.io/repository/biocontainers/conipher
.. _`conipher/tags`: https://quay.io/repository/biocontainers/conipher?tab=tags


.. raw:: html

    <script>
        var package = "conipher";
        var versions = ["2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conipher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conipher/README.html