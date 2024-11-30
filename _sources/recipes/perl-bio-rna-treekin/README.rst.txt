:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-treekin'
.. highlight: bash

perl-bio-rna-treekin
====================

.. conda:recipe:: perl-bio-rna-treekin
   :replaces_section_title:
   :noindex:

   Classes for working with Treekin output.

   :homepage: https://metacpan.org/pod/Bio::RNA::Treekin
   :license: GPL-3.0-or-later
   :recipe: /`perl-bio-rna-treekin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-treekin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-treekin/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-treekin

   |downloads_perl-bio-rna-treekin| |docker_perl-bio-rna-treekin|

   :versions:
      
      

      ``0.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-crc: 
   :depends perl-file-slurp: 
   :depends perl-io-stringy: 
   :depends perl-ipc-system-simple: 
   :depends perl-moose: 
   :depends perl-moosex-strictconstructor: 
   :depends perl-namespace-autoclean: 
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

      mamba install perl-bio-rna-treekin

   and update with::

      mamba update perl-bio-rna-treekin

  To create a new environment, run::

      mamba create --name myenvname perl-bio-rna-treekin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-rna-treekin:<tag>

   (see `perl-bio-rna-treekin/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-rna-treekin| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-treekin.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-treekin
   :alt:   (downloads)
.. |docker_perl-bio-rna-treekin| image:: https://quay.io/repository/biocontainers/perl-bio-rna-treekin/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-treekin
.. _`perl-bio-rna-treekin/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-treekin?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-rna-treekin";
        var versions = ["0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-treekin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-treekin/README.html