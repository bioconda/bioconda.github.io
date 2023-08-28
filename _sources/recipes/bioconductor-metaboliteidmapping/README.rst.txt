:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaboliteidmapping'
.. highlight: bash

bioconductor-metaboliteidmapping
================================

.. conda:recipe:: bioconductor-metaboliteidmapping
   :replaces_section_title:
   :noindex:

   Mapping of Metabolite IDs from Different Sources

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/metaboliteIDmapping.html
   :license: GPL-3
   :recipe: /`bioconductor-metaboliteidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaboliteidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaboliteidmapping/meta.yaml>`_

   The package provides a comprehensive mapping table of nine different Metabolite ID formats and their common name. The data has been collected and merged from four publicly available source\, including HMDB\, Comptox Dashboard\, ChEBI\, and the graphite Bioconductor R package.


.. conda:package:: bioconductor-metaboliteidmapping

   |downloads_bioconductor-metaboliteidmapping| |docker_bioconductor-metaboliteidmapping|

   :versions:
      
      

      ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.99.8-1``,  ``0.99.8-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
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

      mamba install bioconductor-metaboliteidmapping

   and update with::

      mamba update bioconductor-metaboliteidmapping

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metaboliteidmapping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaboliteidmapping:<tag>

   (see `bioconductor-metaboliteidmapping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaboliteidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaboliteidmapping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaboliteidmapping
   :alt:   (downloads)
.. |docker_bioconductor-metaboliteidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-metaboliteidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaboliteidmapping
.. _`bioconductor-metaboliteidmapping/tags`: https://quay.io/repository/biocontainers/bioconductor-metaboliteidmapping?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metaboliteidmapping";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaboliteidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaboliteidmapping/README.html