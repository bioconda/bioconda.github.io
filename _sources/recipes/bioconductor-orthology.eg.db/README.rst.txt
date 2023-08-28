:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orthology.eg.db'
.. highlight: bash

bioconductor-orthology.eg.db
============================

.. conda:recipe:: bioconductor-orthology.eg.db
   :replaces_section_title:
   :noindex:

   Orthology mapping package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/Orthology.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-orthology.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthology.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthology.eg.db/meta.yaml>`_

   Orthology mapping package\, based on data from NCBI\, using NCBI Gene IDs and Taxonomy IDs.


.. conda:package:: bioconductor-orthology.eg.db

   |downloads_bioconductor-orthology.eg.db| |docker_bioconductor-orthology.eg.db|

   :versions:
      
      

      ``3.17.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-orthology.eg.db

   and update with::

      mamba update bioconductor-orthology.eg.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-orthology.eg.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orthology.eg.db:<tag>

   (see `bioconductor-orthology.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orthology.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orthology.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orthology.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-orthology.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-orthology.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orthology.eg.db
.. _`bioconductor-orthology.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-orthology.eg.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-orthology.eg.db";
        var versions = ["3.17.0","3.16.0","3.14.0","3.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orthology.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orthology.eg.db/README.html