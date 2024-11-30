:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harvest-variants'
.. highlight: bash

harvest-variants
================

.. conda:recipe:: harvest-variants
   :replaces_section_title:
   :noindex:

   Harvest Variants is a pipeline for variant calling on SARS\-CoV\-2 samples

   :homepage: https://gitlab.com/treangenlab/sars-cov-2-harvest-variants
   :license: MIT
   :recipe: /`harvest-variants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harvest-variants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harvest-variants/meta.yaml>`_

   


.. conda:package:: harvest-variants

   |downloads_harvest-variants| |docker_harvest-variants|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.1-2``,  ``0.3.1-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends bcftools: ``>=1.15``
   :depends bedtools: ``>=2.30.0``
   :depends biopython: ``>=1.79``
   :depends bwa: ``>=0.7.17``
   :depends fastp: ``>=0.22``
   :depends fastqc: ``>=0.11.9``
   :depends lofreq: ``>=2.1.3``
   :depends parsnp: ``>=1.7.4``
   :depends python: ``>=3.6``
   :depends pyvcf: ``>=0.6.8``
   :depends samtools: ``>=1.15``
   :depends snpeff: ``>=5.1``
   :depends sra-tools: ``2.10.9.*``
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

      mamba install harvest-variants

   and update with::

      mamba update harvest-variants

  To create a new environment, run::

      mamba create --name myenvname harvest-variants

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/harvest-variants:<tag>

   (see `harvest-variants/tags`_ for valid values for ``<tag>``)


.. |downloads_harvest-variants| image:: https://img.shields.io/conda/dn/bioconda/harvest-variants.svg?style=flat
   :target: https://anaconda.org/bioconda/harvest-variants
   :alt:   (downloads)
.. |docker_harvest-variants| image:: https://quay.io/repository/biocontainers/harvest-variants/status
   :target: https://quay.io/repository/biocontainers/harvest-variants
.. _`harvest-variants/tags`: https://quay.io/repository/biocontainers/harvest-variants?tab=tags


.. raw:: html

    <script>
        var package = "harvest-variants";
        var versions = ["1.1.0","1.0.1","1.0.0","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harvest-variants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harvest-variants/README.html