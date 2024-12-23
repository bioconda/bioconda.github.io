:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alphamissense.v2023.hg19'
.. highlight: bash

bioconductor-alphamissense.v2023.hg19
=====================================

.. conda:recipe:: bioconductor-alphamissense.v2023.hg19
   :replaces_section_title:
   :noindex:

   AlphaMissense v2023 Pathogenicity Scores AnnotationHub Resource Metadata for hg19

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/AlphaMissense.v2023.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-alphamissense.v2023.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphamissense.v2023.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphamissense.v2023.hg19/meta.yaml>`_

   Store Google DeepMind AlphaMissense v2023 hg19 pathogenicity scores AnnotationHub Resource Metadata. Provide provenance and citation information for Google DeepMind AlphaMissense v2023 hg19 pathogenicity score AnnotationHub resources. Illustrate in a vignette how to access those resources.


.. conda:package:: bioconductor-alphamissense.v2023.hg19

   |downloads_bioconductor-alphamissense.v2023.hg19| |docker_bioconductor-alphamissense.v2023.hg19|

   :versions:
      
      

      ``3.18.2-1``,  ``3.18.2-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicscores: ``>=2.18.0,<2.19.0``
   :depends curl: 
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

      mamba install bioconductor-alphamissense.v2023.hg19

   and update with::

      mamba update bioconductor-alphamissense.v2023.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alphamissense.v2023.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alphamissense.v2023.hg19:<tag>

   (see `bioconductor-alphamissense.v2023.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alphamissense.v2023.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alphamissense.v2023.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alphamissense.v2023.hg19
   :alt:   (downloads)
.. |docker_bioconductor-alphamissense.v2023.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-alphamissense.v2023.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alphamissense.v2023.hg19
.. _`bioconductor-alphamissense.v2023.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-alphamissense.v2023.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alphamissense.v2023.hg19";
        var versions = ["3.18.2","3.18.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alphamissense.v2023.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alphamissense.v2023.hg19/README.html