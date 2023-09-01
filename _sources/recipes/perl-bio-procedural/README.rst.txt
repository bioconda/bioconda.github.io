:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-procedural'
.. highlight: bash

perl-bio-procedural
===================

.. conda:recipe:: perl-bio-procedural/1.7.4
   :replaces_section_title:
   :noindex:

   Simple low\-dependency procedural interfaces to BioPerl

   :homepage: https://metacpan.org/release/Bio-Procedural
   :license: perl_5
   :recipe: /`perl-bio-procedural <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural>`_/`1.7.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural/1.7.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural/1.7.4/meta.yaml>`_

   


.. conda:package:: perl-bio-procedural

   |downloads_perl-bio-procedural| |docker_perl-bio-procedural|

   :versions:
      
      

      ``1.7.4-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bio-db-embl: ``1.7.4.*``
   :depends perl-bio-db-refseq: ``1.7.4.*``
   :depends perl-bio-db-swissprot: ``1.7.4.*``
   :depends perl-bio-tools-run-remoteblast: ``1.7.3.*``
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

      mamba install perl-bio-procedural

   and update with::

      mamba update perl-bio-procedural

  To create a new environment, run::

      mamba create --name myenvname perl-bio-procedural

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-procedural:<tag>

   (see `perl-bio-procedural/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-procedural| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-procedural.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-procedural
   :alt:   (downloads)
.. |docker_perl-bio-procedural| image:: https://quay.io/repository/biocontainers/perl-bio-procedural/status
   :target: https://quay.io/repository/biocontainers/perl-bio-procedural
.. _`perl-bio-procedural/tags`: https://quay.io/repository/biocontainers/perl-bio-procedural?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-procedural";
        var versions = ["1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-procedural/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-procedural/README.html