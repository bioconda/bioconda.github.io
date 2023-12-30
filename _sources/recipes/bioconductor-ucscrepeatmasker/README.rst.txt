:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ucscrepeatmasker'
.. highlight: bash

bioconductor-ucscrepeatmasker
=============================

.. conda:recipe:: bioconductor-ucscrepeatmasker
   :replaces_section_title:
   :noindex:

   UCSC RepeatMasker AnnotationHub resource metadata

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/UCSCRepeatMasker.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ucscrepeatmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucscrepeatmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucscrepeatmasker/meta.yaml>`_

   Store UCSC RepeatMasker AnnotationHub resource metadata. Provide provenance and citation information for UCSC RepeatMasker AnnotationHub resources. Illustrate in a vignette how to access those resources.


.. conda:package:: bioconductor-ucscrepeatmasker

   |downloads_bioconductor-ucscrepeatmasker| |docker_bioconductor-ucscrepeatmasker|

   :versions:
      
      

      ``3.15.2-2``,  ``3.15.2-1``,  ``3.15.2-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: 
   :depends r-xml: 
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

      mamba install bioconductor-ucscrepeatmasker

   and update with::

      mamba update bioconductor-ucscrepeatmasker

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ucscrepeatmasker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ucscrepeatmasker:<tag>

   (see `bioconductor-ucscrepeatmasker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ucscrepeatmasker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ucscrepeatmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ucscrepeatmasker
   :alt:   (downloads)
.. |docker_bioconductor-ucscrepeatmasker| image:: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker
.. _`bioconductor-ucscrepeatmasker/tags`: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ucscrepeatmasker";
        var versions = ["3.15.2","3.15.2","3.15.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ucscrepeatmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ucscrepeatmasker/README.html