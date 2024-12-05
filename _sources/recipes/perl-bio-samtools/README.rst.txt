:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-samtools'
.. highlight: bash

perl-bio-samtools
=================

.. conda:recipe:: perl-bio-samtools
   :replaces_section_title:
   :noindex:

   Read SAM\/BAM files

   :homepage: http://search.cpan.org/~lds/Bio-SamTools-1.43/
   :license: perl_5
   :recipe: /`perl-bio-samtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-samtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-samtools/meta.yaml>`_

   


.. conda:package:: perl-bio-samtools

   |downloads_perl-bio-samtools| |docker_perl-bio-samtools|

   :versions:
      
      

      ``1.43-5``,  ``1.43-4``,  ``1.43-3``,  ``1.43-2``,  ``1.43-1``,  ``1.43-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl-core: ``1.7.8.*``
   :depends perl-module-build: ``0.4234.*``
   :depends samtools: ``>=0.1.19,<1.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-bio-samtools

   and update with::

      mamba update perl-bio-samtools

  To create a new environment, run::

      mamba create --name myenvname perl-bio-samtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-samtools:<tag>

   (see `perl-bio-samtools/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-samtools| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-samtools.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-samtools
   :alt:   (downloads)
.. |docker_perl-bio-samtools| image:: https://quay.io/repository/biocontainers/perl-bio-samtools/status
   :target: https://quay.io/repository/biocontainers/perl-bio-samtools
.. _`perl-bio-samtools/tags`: https://quay.io/repository/biocontainers/perl-bio-samtools?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-samtools";
        var versions = ["1.43","1.43","1.43","1.43","1.43"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-samtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-samtools/README.html