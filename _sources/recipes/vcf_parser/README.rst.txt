:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf_parser'
.. highlight: bash

vcf_parser
==========

.. conda:recipe:: vcf_parser
   :replaces_section_title:
   :noindex:

   Small library for parsing vcf files.

   :homepage: https://github.com/moonso/vcf_parser
   :license: MIT / MIT
   :recipe: /`vcf_parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf_parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf_parser/meta.yaml>`_

   


.. conda:package:: vcf_parser

   |downloads_vcf_parser| |docker_vcf_parser|

   :versions:
      
      

      ``1.6-0``

      

   
   :depends click: 
   :depends pytest: 
   :depends python: ``>=3``
   :depends setuptools: 
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

      mamba install vcf_parser

   and update with::

      mamba update vcf_parser

  To create a new environment, run::

      mamba create --name myenvname vcf_parser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf_parser:<tag>

   (see `vcf_parser/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf_parser| image:: https://img.shields.io/conda/dn/bioconda/vcf_parser.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf_parser
   :alt:   (downloads)
.. |docker_vcf_parser| image:: https://quay.io/repository/biocontainers/vcf_parser/status
   :target: https://quay.io/repository/biocontainers/vcf_parser
.. _`vcf_parser/tags`: https://quay.io/repository/biocontainers/vcf_parser?tab=tags


.. raw:: html

    <script>
        var package = "vcf_parser";
        var versions = ["1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf_parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf_parser/README.html