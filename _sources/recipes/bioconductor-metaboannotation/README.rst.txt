:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaboannotation'
.. highlight: bash

bioconductor-metaboannotation
=============================

.. conda:recipe:: bioconductor-metaboannotation
   :replaces_section_title:
   :noindex:

   Utilities for Annotation of Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MetaboAnnotation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metaboannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaboannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaboannotation/meta.yaml>`_

   High level functions to assist in annotation of \(metabolomics\) data sets. These include functions to perform simple tentative annotations based on mass matching but also functions to consider m\/z and retention times for annotation of LC\-MS features given that respective reference values are available. In addition\, the function provides high\-level functions to simplify matching of LC\-MS\/MS spectra against spectral libraries and objects and functionality to represent and manage such matched data.


.. conda:package:: bioconductor-metaboannotation

   |downloads_bioconductor-metaboannotation| |docker_bioconductor-metaboannotation|

   :versions:
      
      

      ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-compounddb: ``>=1.6.0,<1.7.0``
   :depends bioconductor-metabocoreutils: ``>=1.10.0,<1.11.0``
   :depends bioconductor-mscoreutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends bioconductor-qfeatures: ``>=1.12.0,<1.13.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-spectra: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
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

      mamba install bioconductor-metaboannotation

   and update with::

      mamba update bioconductor-metaboannotation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metaboannotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaboannotation:<tag>

   (see `bioconductor-metaboannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaboannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaboannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaboannotation
   :alt:   (downloads)
.. |docker_bioconductor-metaboannotation| image:: https://quay.io/repository/biocontainers/bioconductor-metaboannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaboannotation
.. _`bioconductor-metaboannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-metaboannotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metaboannotation";
        var versions = ["1.6.1","1.4.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaboannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaboannotation/README.html