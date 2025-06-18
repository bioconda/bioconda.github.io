:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stemcnv-check'
.. highlight: bash

stemcnv-check
=============

.. conda:recipe:: stemcnv-check
   :replaces_section_title:
   :noindex:

   StemCNV\-check\: CNV Based Quality Control Workflow for Stem Cell SNP Array Data

   :homepage: https://github.com/bihealth/StemCNV-check
   :license: MIT / MIT License
   :recipe: /`stemcnv-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stemcnv-check>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stemcnv-check/meta.yaml>`_

   


.. conda:package:: stemcnv-check

   |downloads_stemcnv-check| |docker_stemcnv-check|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends apptainer: ``>=1.3``
   :depends bcftools-gtc2vcf-plugin: ``1.16.*``
   :depends deepdiff: ``>=8.0``
   :depends loguru: ``>=0.7``
   :depends openpyxl: ``>=3.1``
   :depends pandas: ``>=2.2``
   :depends pydantic: ``>=2.8``
   :depends python: ``>=3.12``
   :depends ruamel.yaml: ``>=0.18``
   :depends snakemake-minimal: ``>=8,<9``
   :depends xlsxwriter: ``>=3.2``
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

      mamba install stemcnv-check

   and update with::

      mamba update stemcnv-check

  To create a new environment, run::

      mamba create --name myenvname stemcnv-check

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stemcnv-check:<tag>

   (see `stemcnv-check/tags`_ for valid values for ``<tag>``)


.. |downloads_stemcnv-check| image:: https://img.shields.io/conda/dn/bioconda/stemcnv-check.svg?style=flat
   :target: https://anaconda.org/bioconda/stemcnv-check
   :alt:   (downloads)
.. |docker_stemcnv-check| image:: https://quay.io/repository/biocontainers/stemcnv-check/status
   :target: https://quay.io/repository/biocontainers/stemcnv-check
.. _`stemcnv-check/tags`: https://quay.io/repository/biocontainers/stemcnv-check?tab=tags


.. raw:: html

    <script>
        var package = "stemcnv-check";
        var versions = ["0.5.1","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stemcnv-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stemcnv-check/README.html