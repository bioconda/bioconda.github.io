:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-db-embl'
.. highlight: bash

perl-bio-db-embl
================

.. conda:recipe:: perl-bio-db-embl/1.7.4
   :replaces_section_title:
   :noindex:

   Database object interface for EMBL entry retrieval

   :homepage: https://metacpan.org/release/Bio-DB-EMBL
   :license: perl_5
   :recipe: /`perl-bio-db-embl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-embl>`_/`1.7.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-embl/1.7.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-db-embl/1.7.4/meta.yaml>`_

   


.. conda:package:: perl-bio-db-embl

   |downloads_perl-bio-db-embl| |docker_perl-bio-db-embl|

   :versions:
      
      

      ``1.7.4-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-bio-db-embl

   and update with::

      mamba update perl-bio-db-embl

  To create a new environment, run::

      mamba create --name myenvname perl-bio-db-embl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-db-embl:<tag>

   (see `perl-bio-db-embl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-db-embl| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-db-embl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-db-embl
   :alt:   (downloads)
.. |docker_perl-bio-db-embl| image:: https://quay.io/repository/biocontainers/perl-bio-db-embl/status
   :target: https://quay.io/repository/biocontainers/perl-bio-db-embl
.. _`perl-bio-db-embl/tags`: https://quay.io/repository/biocontainers/perl-bio-db-embl?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-db-embl";
        var versions = ["1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-db-embl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-db-embl/README.html