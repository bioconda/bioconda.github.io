:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-net-ftp-recursive'
.. highlight: bash

perl-net-ftp-recursive
======================

.. conda:recipe:: perl-net-ftp-recursive/2.04
   :replaces_section_title:
   :noindex:

   Recursive FTP Client class

   :homepage: http://metacpan.org/pod/Net::FTP::Recursive
   :license: Perl
   :recipe: /`perl-net-ftp-recursive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp-recursive>`_/`2.04 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp-recursive/2.04>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp-recursive/2.04/meta.yaml>`_

   


.. conda:package:: perl-net-ftp-recursive

   |downloads_perl-net-ftp-recursive| |docker_perl-net-ftp-recursive|

   :versions:
      
      

      ``2.04-3``,  ``2.04-2``,  ``2.04-1``,  ``2.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-net-ftp: 
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

      mamba install perl-net-ftp-recursive

   and update with::

      mamba update perl-net-ftp-recursive

  To create a new environment, run::

      mamba create --name myenvname perl-net-ftp-recursive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-net-ftp-recursive:<tag>

   (see `perl-net-ftp-recursive/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-net-ftp-recursive| image:: https://img.shields.io/conda/dn/bioconda/perl-net-ftp-recursive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-net-ftp-recursive
   :alt:   (downloads)
.. |docker_perl-net-ftp-recursive| image:: https://quay.io/repository/biocontainers/perl-net-ftp-recursive/status
   :target: https://quay.io/repository/biocontainers/perl-net-ftp-recursive
.. _`perl-net-ftp-recursive/tags`: https://quay.io/repository/biocontainers/perl-net-ftp-recursive?tab=tags


.. raw:: html

    <script>
        var package = "perl-net-ftp-recursive";
        var versions = ["2.04","2.04","2.04","2.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-ftp-recursive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-ftp-recursive/README.html