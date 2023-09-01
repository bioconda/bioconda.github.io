:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-bpwrapper'
.. highlight: bash

perl-bio-bpwrapper
==================

.. conda:recipe:: perl-bio-bpwrapper
   :replaces_section_title:
   :noindex:

   Bio\:\:BPWrapper \-\- command\-line utilities for Bio\:\:Perl

   :homepage: http://metacpan.org/pod/Bio::BPWrapper
   :license: perl_5
   :recipe: /`perl-bio-bpwrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-bpwrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-bpwrapper/meta.yaml>`_

   


.. conda:package:: perl-bio-bpwrapper

   |downloads_perl-bio-bpwrapper| |docker_perl-bio-bpwrapper|

   :versions:
      
      

      ``1.15-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-db-refseq: 
   :depends perl-bioperl: 
   :depends perl-path-tiny: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-bio-bpwrapper

   and update with::

      mamba update perl-bio-bpwrapper

  To create a new environment, run::

      mamba create --name myenvname perl-bio-bpwrapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-bpwrapper:<tag>

   (see `perl-bio-bpwrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-bpwrapper| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-bpwrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-bpwrapper
   :alt:   (downloads)
.. |docker_perl-bio-bpwrapper| image:: https://quay.io/repository/biocontainers/perl-bio-bpwrapper/status
   :target: https://quay.io/repository/biocontainers/perl-bio-bpwrapper
.. _`perl-bio-bpwrapper/tags`: https://quay.io/repository/biocontainers/perl-bio-bpwrapper?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-bpwrapper";
        var versions = ["1.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-bpwrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-bpwrapper/README.html