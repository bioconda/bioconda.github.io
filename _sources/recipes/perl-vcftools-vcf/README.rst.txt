:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-vcftools-vcf'
.. highlight: bash

perl-vcftools-vcf
=================

.. conda:recipe:: perl-vcftools-vcf
   :replaces_section_title:
   :noindex:

   cpanm ready distribution of VCFtools Perl libraries.

   :homepage: https://github.com/vcftools/vcftools
   :documentation: https://vcftools.github.io
   
   :license: LGPL / LGPL-3.0-only
   :recipe: /`perl-vcftools-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vcftools-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vcftools-vcf/meta.yaml>`_
   :links: biotools: :biotools:`vcftools`

   


.. conda:package:: perl-vcftools-vcf

   |downloads_perl-vcftools-vcf| |docker_perl-vcftools-vcf|

   :versions:
      
      

      ``0.1.17-0``,  ``0.1.16-4``,  ``0.1.16-2``,  ``0.1.16-1``,  ``0.1.16-0``,  ``0.1.15-2``,  ``0.1.15-1``,  ``0.1.14-0``

      

   
   :depends htslib: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-vcftools-vcf

   and update with::

      mamba update perl-vcftools-vcf

  To create a new environment, run::

      mamba create --name myenvname perl-vcftools-vcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-vcftools-vcf:<tag>

   (see `perl-vcftools-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-vcftools-vcf| image:: https://img.shields.io/conda/dn/bioconda/perl-vcftools-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-vcftools-vcf
   :alt:   (downloads)
.. |docker_perl-vcftools-vcf| image:: https://quay.io/repository/biocontainers/perl-vcftools-vcf/status
   :target: https://quay.io/repository/biocontainers/perl-vcftools-vcf
.. _`perl-vcftools-vcf/tags`: https://quay.io/repository/biocontainers/perl-vcftools-vcf?tab=tags


.. raw:: html

    <script>
        var package = "perl-vcftools-vcf";
        var versions = ["0.1.17","0.1.16","0.1.16","0.1.16","0.1.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-vcftools-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-vcftools-vcf/README.html