:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-par-packer'
.. highlight: bash

perl-par-packer
===============

.. conda:recipe:: perl-par-packer/1.036
   :replaces_section_title:
   :noindex:

   PAR Packager

   :homepage: http://metacpan.org/pod/PAR::Packer
   :license: perl_5
   :recipe: /`perl-par-packer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer>`_/`1.036 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer/1.036>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer/1.036/meta.yaml>`_

   


.. conda:package:: perl-par-packer

   |downloads_perl-par-packer| |docker_perl-par-packer|

   :versions:
      
      

      ``1.036-6``,  ``1.036-5``,  ``1.036-4``,  ``1.036-3``,  ``1.036-2``,  ``1.036-1``,  ``1.036-0``

      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-getopt-argvfile: 
   :depends perl-getopt-long: ``>=2.58,<3.0a0``
   :depends perl-module-build: ``0.4234.*``
   :depends perl-module-scandeps: 
   :depends perl-par: 
   :depends perl-par-dist: 
   :depends perl-text-parsewords: 
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

      mamba install perl-par-packer

   and update with::

      mamba update perl-par-packer

  To create a new environment, run::

      mamba create --name myenvname perl-par-packer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-par-packer:<tag>

   (see `perl-par-packer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-par-packer| image:: https://img.shields.io/conda/dn/bioconda/perl-par-packer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-par-packer
   :alt:   (downloads)
.. |docker_perl-par-packer| image:: https://quay.io/repository/biocontainers/perl-par-packer/status
   :target: https://quay.io/repository/biocontainers/perl-par-packer
.. _`perl-par-packer/tags`: https://quay.io/repository/biocontainers/perl-par-packer?tab=tags


.. raw:: html

    <script>
        var package = "perl-par-packer";
        var versions = ["1.036","1.036","1.036","1.036","1.036"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-par-packer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-par-packer/README.html