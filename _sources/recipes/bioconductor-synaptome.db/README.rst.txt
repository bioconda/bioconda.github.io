:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synaptome.db'
.. highlight: bash

bioconductor-synaptome.db
=========================

.. conda:recipe:: bioconductor-synaptome.db
   :replaces_section_title:
   :noindex:

   Synamptosome Proteome Database

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/synaptome.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-synaptome.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.db/meta.yaml>`_

   The package contains local copy of the Synaptic proteome database. On top of this it provide a set of utility R functions to query and analyse its content. It allows extraction of information for specific genes and building the protein\-protein interaction graph for gene sets\, synaptic compartments\, and brain regions.


.. conda:package:: bioconductor-synaptome.db

   |downloads_bioconductor-synaptome.db| |docker_bioconductor-synaptome.db|

   :versions:
      
      

      ``0.99.15-0``,  ``0.99.12-1``,  ``0.99.12-0``,  ``0.99.8-1``,  ``0.99.8-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-synaptome.data: ``>=0.99.0,<0.100.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-dbplyr: 
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-rdpack: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-synaptome.db

   and update with::

      mamba update bioconductor-synaptome.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-synaptome.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synaptome.db:<tag>

   (see `bioconductor-synaptome.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synaptome.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synaptome.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synaptome.db
   :alt:   (downloads)
.. |docker_bioconductor-synaptome.db| image:: https://quay.io/repository/biocontainers/bioconductor-synaptome.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synaptome.db
.. _`bioconductor-synaptome.db/tags`: https://quay.io/repository/biocontainers/bioconductor-synaptome.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synaptome.db";
        var versions = ["0.99.15","0.99.12","0.99.12","0.99.8","0.99.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synaptome.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synaptome.db/README.html