:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.schemas'
.. highlight: bash

bioconductor-alabaster.schemas
==============================

.. conda:recipe:: bioconductor-alabaster.schemas
   :replaces_section_title:
   :noindex:

   Schemas for the Alabaster Framework

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alabaster.schemas.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.schemas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.schemas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.schemas/meta.yaml>`_

   Stores all schemas required by various alabaster.\* packages. No computation should be performed by this package\, as that is handled by alabaster.base. We use a separate package instead of storing the schemas in alabaster.base itself\, to avoid conflating management of the schemas with code maintenence.


.. conda:package:: bioconductor-alabaster.schemas

   |downloads_bioconductor-alabaster.schemas| |docker_bioconductor-alabaster.schemas|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-alabaster.schemas

   and update with::

      mamba update bioconductor-alabaster.schemas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alabaster.schemas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.schemas:<tag>

   (see `bioconductor-alabaster.schemas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.schemas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.schemas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.schemas
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.schemas| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas
.. _`bioconductor-alabaster.schemas/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.schemas";
        var versions = ["1.6.0","1.2.0","1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.schemas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.schemas/README.html