:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf-reformatter'
.. highlight: bash

vcf-reformatter
===============

.. conda:recipe:: vcf-reformatter
   :replaces_section_title:
   :noindex:

   Fast VCF file parser and reformatter with VEP and SnpEff annotation support

   :homepage: https://github.com/flalom/vcf-reformatter
   :documentation: https://github.com/flalom/vcf-reformatter/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`vcf-reformatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-reformatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-reformatter/meta.yaml>`_

   A Rust command\-line tool for parsing and reformatting VCF \(Variant Call Format\) files\, 
   with support for VEP \(Variant Effect Predictor\) and SnpEff annotations. 
   This tool flattens complex VCF files into tab\-separated values \(TSV\) format 
   for easier downstream analysis.



.. conda:package:: vcf-reformatter

   |downloads_vcf-reformatter| |docker_vcf-reformatter|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
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

      mamba install vcf-reformatter

   and update with::

      mamba update vcf-reformatter

  To create a new environment, run::

      mamba create --name myenvname vcf-reformatter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf-reformatter:<tag>

   (see `vcf-reformatter/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf-reformatter| image:: https://img.shields.io/conda/dn/bioconda/vcf-reformatter.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf-reformatter
   :alt:   (downloads)
.. |docker_vcf-reformatter| image:: https://quay.io/repository/biocontainers/vcf-reformatter/status
   :target: https://quay.io/repository/biocontainers/vcf-reformatter
.. _`vcf-reformatter/tags`: https://quay.io/repository/biocontainers/vcf-reformatter?tab=tags


.. raw:: html

    <script>
        var package = "vcf-reformatter";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf-reformatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf-reformatter/README.html