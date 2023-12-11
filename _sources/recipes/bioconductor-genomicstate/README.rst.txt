:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicstate'
.. highlight: bash

bioconductor-genomicstate
=========================

.. conda:recipe:: bioconductor-genomicstate
   :replaces_section_title:
   :noindex:

   Build and access GenomicState objects for use with derfinder tools from sources like Gencode

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/GenomicState.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicstate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicstate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicstate/meta.yaml>`_

   This package contains functions for building GenomicState objects from different annotation sources such as Gencode. It also provides access to these files at JHPCE.


.. conda:package:: bioconductor-genomicstate

   |downloads_bioconductor-genomicstate| |docker_bioconductor-genomicstate|

   :versions:
      
      

      ``0.99.15-4``,  ``0.99.15-3``,  ``0.99.15-2``,  ``0.99.15-1``,  ``0.99.15-0``,  ``0.99.9-3``,  ``0.99.9-2``,  ``0.99.9-1``,  ``0.99.9-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-bumphunter: ``>=1.44.0,<1.45.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-derfinder: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
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

      mamba install bioconductor-genomicstate

   and update with::

      mamba update bioconductor-genomicstate

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicstate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicstate:<tag>

   (see `bioconductor-genomicstate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicstate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicstate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicstate
   :alt:   (downloads)
.. |docker_bioconductor-genomicstate| image:: https://quay.io/repository/biocontainers/bioconductor-genomicstate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicstate
.. _`bioconductor-genomicstate/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicstate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicstate";
        var versions = ["0.99.15","0.99.15","0.99.15","0.99.15","0.99.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicstate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicstate/README.html