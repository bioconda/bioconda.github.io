:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cadd.v1.6.hg38'
.. highlight: bash

bioconductor-cadd.v1.6.hg38
===========================

.. conda:recipe:: bioconductor-cadd.v1.6.hg38
   :replaces_section_title:
   :noindex:

   CADD v1.6 Pathogenicity Scores AnnotationHub Resource Metadata for hg38

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/cadd.v1.6.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cadd.v1.6.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cadd.v1.6.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cadd.v1.6.hg38/meta.yaml>`_

   Store University of Washington CADD v1.6 hg38 pathogenicity scores AnnotationHub Resource Metadata. Provide provenance and citation information for University of Washington CADD v1.6 hg38 pathogenicity score AnnotationHub resources. Illustrate in a vignette how to access those resources.


.. conda:package:: bioconductor-cadd.v1.6.hg38

   |downloads_bioconductor-cadd.v1.6.hg38| |docker_bioconductor-cadd.v1.6.hg38|

   :versions:
      
      

      ``3.18.1-1``,  ``3.18.1-0``

      

   
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

      mamba install bioconductor-cadd.v1.6.hg38

   and update with::

      mamba update bioconductor-cadd.v1.6.hg38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cadd.v1.6.hg38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cadd.v1.6.hg38:<tag>

   (see `bioconductor-cadd.v1.6.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cadd.v1.6.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cadd.v1.6.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cadd.v1.6.hg38
   :alt:   (downloads)
.. |docker_bioconductor-cadd.v1.6.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-cadd.v1.6.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cadd.v1.6.hg38
.. _`bioconductor-cadd.v1.6.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-cadd.v1.6.hg38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cadd.v1.6.hg38";
        var versions = ["3.18.1","3.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cadd.v1.6.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cadd.v1.6.hg38/README.html