:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-phylo-forest-dbtree'
.. highlight: bash

perl-bio-phylo-forest-dbtree
============================

.. conda:recipe:: perl-bio-phylo-forest-dbtree
   :replaces_section_title:
   :noindex:

   Tools and API for large phylogenies in SQLite databases.

   :homepage: https://metacpan.org/dist/Bio-Phylo-Forest-DBTree
   :license: perl_5
   :recipe: /`perl-bio-phylo-forest-dbtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-forest-dbtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-forest-dbtree/meta.yaml>`_

   


.. conda:package:: perl-bio-phylo-forest-dbtree

   |downloads_perl-bio-phylo-forest-dbtree| |docker_perl-bio-phylo-forest-dbtree|

   :versions:
      
      

      ``0.58-1``,  ``0.58-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-phylo: 
   :depends perl-dbd-sqlite: 
   :depends perl-module-implementation: 
   :depends perl-module-runtime: 
   :depends perl-namespace-clean: 
   :depends perl-package-stash: 
   :depends perl-sub-name: 
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

      mamba install perl-bio-phylo-forest-dbtree

   and update with::

      mamba update perl-bio-phylo-forest-dbtree

  To create a new environment, run::

      mamba create --name myenvname perl-bio-phylo-forest-dbtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-phylo-forest-dbtree:<tag>

   (see `perl-bio-phylo-forest-dbtree/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-phylo-forest-dbtree| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-phylo-forest-dbtree.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-phylo-forest-dbtree
   :alt:   (downloads)
.. |docker_perl-bio-phylo-forest-dbtree| image:: https://quay.io/repository/biocontainers/perl-bio-phylo-forest-dbtree/status
   :target: https://quay.io/repository/biocontainers/perl-bio-phylo-forest-dbtree
.. _`perl-bio-phylo-forest-dbtree/tags`: https://quay.io/repository/biocontainers/perl-bio-phylo-forest-dbtree?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-phylo-forest-dbtree";
        var versions = ["0.58","0.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-phylo-forest-dbtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-phylo-forest-dbtree/README.html