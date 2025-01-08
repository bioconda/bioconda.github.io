:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drugtargetinteractions'
.. highlight: bash

bioconductor-drugtargetinteractions
===================================

.. conda:recipe:: bioconductor-drugtargetinteractions
   :replaces_section_title:
   :noindex:

   Drug\-Target Interactions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/drugTargetInteractions.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-drugtargetinteractions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugtargetinteractions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugtargetinteractions/meta.yaml>`_

   Provides utilities for identifying drug\-target interactions for sets of small molecule or gene\/protein identifiers. The required drug\-target interaction information is obained from a local SQLite instance of the ChEMBL database. ChEMBL has been chosen for this purpose\, because it provides one of the most comprehensive and best annotatated knowledge resources for drug\-target information available in the public domain.


.. conda:package:: bioconductor-drugtargetinteractions

   |downloads_bioconductor-drugtargetinteractions| |docker_bioconductor-drugtargetinteractions|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationfilter: ``>=1.30.0,<1.31.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-uniprot.ws: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-rappdirs: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-drugtargetinteractions

   and update with::

      mamba update bioconductor-drugtargetinteractions

  To create a new environment, run::

      mamba create --name myenvname bioconductor-drugtargetinteractions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drugtargetinteractions:<tag>

   (see `bioconductor-drugtargetinteractions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drugtargetinteractions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drugtargetinteractions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drugtargetinteractions
   :alt:   (downloads)
.. |docker_bioconductor-drugtargetinteractions| image:: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions
.. _`bioconductor-drugtargetinteractions/tags`: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-drugtargetinteractions";
        var versions = ["1.14.0","1.10.1","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drugtargetinteractions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drugtargetinteractions/README.html