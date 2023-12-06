:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-octad.db'
.. highlight: bash

bioconductor-octad.db
=====================

.. conda:recipe:: bioconductor-octad.db
   :replaces_section_title:
   :noindex:

   Open Cancer TherApeutic Discovery \(OCTAD\) database

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/octad.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-octad.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad.db/meta.yaml>`_

   Open Cancer TherApeutic Discovery \(OCTAD\) package implies sRGES approach for the drug discovery. The essential idea is to identify drugs that reverse the gene expression signature of a disease by tamping down over\-expressed genes and stimulating weakly expressed ones. The following package contains all required precomputed data for whole OCTAD pipeline computation.


.. conda:package:: bioconductor-octad.db

   |downloads_bioconductor-octad.db| |docker_bioconductor-octad.db|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-octad.db

   and update with::

      mamba update bioconductor-octad.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-octad.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-octad.db:<tag>

   (see `bioconductor-octad.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-octad.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-octad.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-octad.db
   :alt:   (downloads)
.. |docker_bioconductor-octad.db| image:: https://quay.io/repository/biocontainers/bioconductor-octad.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-octad.db
.. _`bioconductor-octad.db/tags`: https://quay.io/repository/biocontainers/bioconductor-octad.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-octad.db";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-octad.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-octad.db/README.html