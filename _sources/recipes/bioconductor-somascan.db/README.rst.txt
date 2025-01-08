:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-somascan.db'
.. highlight: bash

bioconductor-somascan.db
========================

.. conda:recipe:: bioconductor-somascan.db
   :replaces_section_title:
   :noindex:

   Somalogic SomaScan Annotation Data

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/SomaScan.db.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-somascan.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somascan.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somascan.db/meta.yaml>`_

   An R package providing extended biological annotations for the SomaScan Assay\, a proteomics platform developed by SomaLogic Operating Co.\, Inc. The annotations in this package were assembled using data from public repositories. For more information about the SomaScan assay and its data\, please reference the \'SomaLogic\/SomaLogic\-Data\' GitHub repository.


.. conda:package:: bioconductor-somascan.db

   |downloads_bioconductor-somascan.db| |docker_bioconductor-somascan.db|

   :versions:
      
      

      ``0.99.10-0``,  ``0.99.7-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
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

      mamba install bioconductor-somascan.db

   and update with::

      mamba update bioconductor-somascan.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-somascan.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-somascan.db:<tag>

   (see `bioconductor-somascan.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-somascan.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-somascan.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-somascan.db
   :alt:   (downloads)
.. |docker_bioconductor-somascan.db| image:: https://quay.io/repository/biocontainers/bioconductor-somascan.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-somascan.db
.. _`bioconductor-somascan.db/tags`: https://quay.io/repository/biocontainers/bioconductor-somascan.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-somascan.db";
        var versions = ["0.99.10","0.99.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-somascan.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-somascan.db/README.html