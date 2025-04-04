:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.athaliana.biomart.plantsmart51'
.. highlight: bash

bioconductor-txdb.athaliana.biomart.plantsmart51
================================================

.. conda:recipe:: bioconductor-txdb.athaliana.biomart.plantsmart51
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/TxDb.Athaliana.BioMart.plantsmart51.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.athaliana.biomart.plantsmart51 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.athaliana.biomart.plantsmart51>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.athaliana.biomart.plantsmart51/meta.yaml>`_

   Exposes an annotation databases generated from BioMart by exposing these as TxDb objects. This package is for Arabidopsis thaliana \(taxID\: 3702\). The BioMart plantsmart release number is 51.


.. conda:package:: bioconductor-txdb.athaliana.biomart.plantsmart51

   |downloads_bioconductor-txdb.athaliana.biomart.plantsmart51| |docker_bioconductor-txdb.athaliana.biomart.plantsmart51|

   :versions:
      
      

      ``0.99.0-5``,  ``0.99.0-4``,  ``0.99.0-3``,  ``0.99.0-2``,  ``0.99.0-1``,  ``0.99.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
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

      mamba install bioconductor-txdb.athaliana.biomart.plantsmart51

   and update with::

      mamba update bioconductor-txdb.athaliana.biomart.plantsmart51

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.athaliana.biomart.plantsmart51

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart51:<tag>

   (see `bioconductor-txdb.athaliana.biomart.plantsmart51/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.athaliana.biomart.plantsmart51| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.athaliana.biomart.plantsmart51.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.athaliana.biomart.plantsmart51
   :alt:   (downloads)
.. |docker_bioconductor-txdb.athaliana.biomart.plantsmart51| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart51/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart51
.. _`bioconductor-txdb.athaliana.biomart.plantsmart51/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart51?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.athaliana.biomart.plantsmart51";
        var versions = ["0.99.0","0.99.0","0.99.0","0.99.0","0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.athaliana.biomart.plantsmart51/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.athaliana.biomart.plantsmart51/README.html