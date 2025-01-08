:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phylop35way.ucsc.mm39'
.. highlight: bash

bioconductor-phylop35way.ucsc.mm39
==================================

.. conda:recipe:: bioconductor-phylop35way.ucsc.mm39
   :replaces_section_title:
   :noindex:

   UCSC phyloP mm39 conservation scores AnnotationHub Resource Metadata

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/phyloP35way.UCSC.mm39.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-phylop35way.ucsc.mm39 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phylop35way.ucsc.mm39>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phylop35way.ucsc.mm39/meta.yaml>`_

   Store UCSC phyloP mm39 conservation scores AnnotationHub Resource Metadata. Provide provenance and citation information for UCSC phyloP mm39 conservation score AnnotationHub resources. Illustrate in a vignette how to access those resources.


.. conda:package:: bioconductor-phylop35way.ucsc.mm39

   |downloads_bioconductor-phylop35way.ucsc.mm39| |docker_bioconductor-phylop35way.ucsc.mm39|

   :versions:
      
      

      ``3.16.0-3``,  ``3.16.0-2``,  ``3.16.0-1``,  ``3.16.0-0``

      

   
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

      mamba install bioconductor-phylop35way.ucsc.mm39

   and update with::

      mamba update bioconductor-phylop35way.ucsc.mm39

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phylop35way.ucsc.mm39

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phylop35way.ucsc.mm39:<tag>

   (see `bioconductor-phylop35way.ucsc.mm39/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phylop35way.ucsc.mm39| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phylop35way.ucsc.mm39.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phylop35way.ucsc.mm39
   :alt:   (downloads)
.. |docker_bioconductor-phylop35way.ucsc.mm39| image:: https://quay.io/repository/biocontainers/bioconductor-phylop35way.ucsc.mm39/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phylop35way.ucsc.mm39
.. _`bioconductor-phylop35way.ucsc.mm39/tags`: https://quay.io/repository/biocontainers/bioconductor-phylop35way.ucsc.mm39?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phylop35way.ucsc.mm39";
        var versions = ["3.16.0","3.16.0","3.16.0","3.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phylop35way.ucsc.mm39/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phylop35way.ucsc.mm39/README.html