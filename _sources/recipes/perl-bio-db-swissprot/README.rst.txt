:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-db-swissprot'
.. highlight: bash

perl-bio-db-swissprot
=====================

.. conda:recipe:: perl-bio-db-swissprot/1.7.4
   :replaces_section_title:
   :noindex:

   Database object interface to SwissProt retrieval

   :homepage: https://metacpan.org/release/Bio-DB-SwissProt
   :license: perl_5
   :recipe: /`perl-bio-db-swissprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-swissprot>`_/`1.7.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-swissprot/1.7.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-swissprot/1.7.4/meta.yaml>`_

   


.. conda:package:: perl-bio-db-swissprot

   |downloads_perl-bio-db-swissprot| |docker_perl-bio-db-swissprot|

   :versions:
      
      

      ``1.7.4-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: 
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

      mamba install perl-bio-db-swissprot

   and update with::

      mamba update perl-bio-db-swissprot

  To create a new environment, run::

      mamba create --name myenvname perl-bio-db-swissprot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-db-swissprot:<tag>

   (see `perl-bio-db-swissprot/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-db-swissprot| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-db-swissprot.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-db-swissprot
   :alt:   (downloads)
.. |docker_perl-bio-db-swissprot| image:: https://quay.io/repository/biocontainers/perl-bio-db-swissprot/status
   :target: https://quay.io/repository/biocontainers/perl-bio-db-swissprot
.. _`perl-bio-db-swissprot/tags`: https://quay.io/repository/biocontainers/perl-bio-db-swissprot?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-db-swissprot";
        var versions = ["1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-db-swissprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-db-swissprot/README.html