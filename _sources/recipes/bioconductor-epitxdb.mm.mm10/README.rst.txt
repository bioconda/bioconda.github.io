:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epitxdb.mm.mm10'
.. highlight: bash

bioconductor-epitxdb.mm.mm10
============================

.. conda:recipe:: bioconductor-epitxdb.mm.mm10
   :replaces_section_title:
   :noindex:

   Annotation package for EpiTxDb objects

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/EpiTxDb.Mm.mm10.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epitxdb.mm.mm10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb.mm.mm10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb.mm.mm10/meta.yaml>`_

   Exposes an annotation databases generated from several sources by exposing these as EpiTxDb object. Generated for Mus musculus\/mm10.


.. conda:package:: bioconductor-epitxdb.mm.mm10

   |downloads_bioconductor-epitxdb.mm.mm10| |docker_bioconductor-epitxdb.mm.mm10|

   :versions:
      
      

      ``0.99.6-6``,  ``0.99.6-5``,  ``0.99.6-4``,  ``0.99.6-3``,  ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``,  ``0.99.4-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-epitxdb: ``>=1.12.0,<1.13.0``
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

      mamba install bioconductor-epitxdb.mm.mm10

   and update with::

      mamba update bioconductor-epitxdb.mm.mm10

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epitxdb.mm.mm10

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epitxdb.mm.mm10:<tag>

   (see `bioconductor-epitxdb.mm.mm10/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epitxdb.mm.mm10| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epitxdb.mm.mm10.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epitxdb.mm.mm10
   :alt:   (downloads)
.. |docker_bioconductor-epitxdb.mm.mm10| image:: https://quay.io/repository/biocontainers/bioconductor-epitxdb.mm.mm10/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epitxdb.mm.mm10
.. _`bioconductor-epitxdb.mm.mm10/tags`: https://quay.io/repository/biocontainers/bioconductor-epitxdb.mm.mm10?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epitxdb.mm.mm10";
        var versions = ["0.99.6","0.99.6","0.99.6","0.99.6","0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epitxdb.mm.mm10/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epitxdb.mm.mm10/README.html