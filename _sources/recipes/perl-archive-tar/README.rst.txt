:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-tar'
.. highlight: bash

perl-archive-tar
================

.. conda:recipe:: perl-archive-tar
   :replaces_section_title:
   :noindex:

   Manipulates TAR archives.

   :homepage: https://metacpan.org/pod/Archive::Tar
   :license: Perl_5
   :recipe: /`perl-archive-tar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar/meta.yaml>`_

   


.. conda:package:: perl-archive-tar

   |downloads_perl-archive-tar| |docker_perl-archive-tar|

   :versions:
      
      

      ``3.04-0``,  ``2.40-0``,  ``2.32-1``,  ``2.32-0``,  ``2.18-3``,  ``2.18-2``,  ``2.18-1``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-io-compress: 
   :depends perl-io-zlib: 
   :depends perl-pathtools: 
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

      mamba install perl-archive-tar

   and update with::

      mamba update perl-archive-tar

  To create a new environment, run::

      mamba create --name myenvname perl-archive-tar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-archive-tar:<tag>

   (see `perl-archive-tar/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-archive-tar| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-tar.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-archive-tar
   :alt:   (downloads)
.. |docker_perl-archive-tar| image:: https://quay.io/repository/biocontainers/perl-archive-tar/status
   :target: https://quay.io/repository/biocontainers/perl-archive-tar
.. _`perl-archive-tar/tags`: https://quay.io/repository/biocontainers/perl-archive-tar?tab=tags


.. raw:: html

    <script>
        var package = "perl-archive-tar";
        var versions = ["3.04","2.40","2.32","2.32","2.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-tar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-tar/README.html