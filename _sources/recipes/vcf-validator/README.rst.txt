:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf-validator'
.. highlight: bash

vcf-validator
=============

.. conda:recipe:: vcf-validator
   :replaces_section_title:
   :noindex:

   EBI EVA \- Validation tool for VCF file format compliance

   :homepage: https://github.com/EBIVariation/vcf-validator
   :license: Apache-2.0
   :recipe: /`vcf-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-validator/meta.yaml>`_

   


.. conda:package:: vcf-validator

   |downloads_vcf-validator| |docker_vcf-validator|

   :versions:
      
      

      ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.7-0``,  ``0.9.6-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends c-ares: ``>=1.34.5,<2.0a0``
   :depends libboost: ``>=1.84.0,<1.85.0a0``
   :depends libcurl: ``>=8.14.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.1,<4.0a0``
   :depends zstd: ``>=1.5.7,<1.6.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install vcf-validator

   and update with::

      mamba update vcf-validator

  To create a new environment, run::

      mamba create --name myenvname vcf-validator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf-validator:<tag>

   (see `vcf-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf-validator| image:: https://img.shields.io/conda/dn/bioconda/vcf-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf-validator
   :alt:   (downloads)
.. |docker_vcf-validator| image:: https://quay.io/repository/biocontainers/vcf-validator/status
   :target: https://quay.io/repository/biocontainers/vcf-validator
.. _`vcf-validator/tags`: https://quay.io/repository/biocontainers/vcf-validator?tab=tags


.. raw:: html

    <script>
        var package = "vcf-validator";
        var versions = ["0.10.2","0.10.1","0.10.0","0.10.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf-validator/README.html