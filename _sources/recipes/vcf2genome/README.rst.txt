:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2genome'
.. highlight: bash

vcf2genome
==========

.. conda:recipe:: vcf2genome
   :replaces_section_title:
   :noindex:

   A tool to create a draft genome file out of a GATK VCF file and enabling users to filter the VCF in a single step.

   :homepage: https://github.com/apeltzer/vcf2genome
   :license: GPLv3
   :recipe: /`vcf2genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2genome/meta.yaml>`_

   


.. conda:package:: vcf2genome

   |downloads_vcf2genome| |docker_vcf2genome|

   :versions:
      
      

      ``0.91-2``,  ``0.91-1``,  ``0.91-0``

      

   
   :depends openjdk: 
   :depends python: 
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

      mamba install vcf2genome

   and update with::

      mamba update vcf2genome

  To create a new environment, run::

      mamba create --name myenvname vcf2genome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2genome:<tag>

   (see `vcf2genome/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2genome| image:: https://img.shields.io/conda/dn/bioconda/vcf2genome.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2genome
   :alt:   (downloads)
.. |docker_vcf2genome| image:: https://quay.io/repository/biocontainers/vcf2genome/status
   :target: https://quay.io/repository/biocontainers/vcf2genome
.. _`vcf2genome/tags`: https://quay.io/repository/biocontainers/vcf2genome?tab=tags


.. raw:: html

    <script>
        var package = "vcf2genome";
        var versions = ["0.91","0.91","0.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2genome/README.html