:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-barriers'
.. highlight: bash

perl-bio-rna-barriers
=====================

.. conda:recipe:: perl-bio-rna-barriers
   :replaces_section_title:
   :noindex:

   Parse\, query and manipulate output of Barriers

   :homepage: https://metacpan.org/pod/Bio::RNA::Barriers
   :license: GPL-3.0-or-later
   :recipe: /`perl-bio-rna-barriers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barriers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barriers/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-barriers

   |downloads_perl-bio-rna-barriers| |docker_perl-bio-rna-barriers|

   :versions:
      
      

      ``0.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-slurp: 
   :depends perl-ipc-system-simple: 
   :depends perl-list-moreutils: 
   :depends perl-moose: 
   :depends perl-moosex-strictconstructor: 
   :depends perl-namespace-autoclean: 
   :depends perl-test-exception: 
   :depends perl-test-nowarnings: 
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

      mamba install perl-bio-rna-barriers

   and update with::

      mamba update perl-bio-rna-barriers

  To create a new environment, run::

      mamba create --name myenvname perl-bio-rna-barriers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-rna-barriers:<tag>

   (see `perl-bio-rna-barriers/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-rna-barriers| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-barriers.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-barriers
   :alt:   (downloads)
.. |docker_perl-bio-rna-barriers| image:: https://quay.io/repository/biocontainers/perl-bio-rna-barriers/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-barriers
.. _`perl-bio-rna-barriers/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-barriers?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-rna-barriers";
        var versions = ["0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-barriers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-barriers/README.html