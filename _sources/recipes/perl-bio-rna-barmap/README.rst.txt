:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-barmap'
.. highlight: bash

perl-bio-rna-barmap
===================

.. conda:recipe:: perl-bio-rna-barmap
   :replaces_section_title:
   :noindex:

   Parse and query BarMap mappings.

   :homepage: https://metacpan.org/pod/Bio::RNA::BarMap
   :license: GPL-3.0-or-later
   :recipe: /`perl-bio-rna-barmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barmap/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-barmap

   |downloads_perl-bio-rna-barmap| |docker_perl-bio-rna-barmap|

   :versions:
      
      

      ``0.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-ipc-system-simple: 
   :depends perl-moose: 
   :depends perl-moosex-strictconstructor: 
   :depends perl-namespace-autoclean: 
   :depends perl-test-exception: 
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

      mamba install perl-bio-rna-barmap

   and update with::

      mamba update perl-bio-rna-barmap

  To create a new environment, run::

      mamba create --name myenvname perl-bio-rna-barmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-rna-barmap:<tag>

   (see `perl-bio-rna-barmap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-rna-barmap| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-barmap.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-barmap
   :alt:   (downloads)
.. |docker_perl-bio-rna-barmap| image:: https://quay.io/repository/biocontainers/perl-bio-rna-barmap/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-barmap
.. _`perl-bio-rna-barmap/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-barmap?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-rna-barmap";
        var versions = ["0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-barmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-barmap/README.html