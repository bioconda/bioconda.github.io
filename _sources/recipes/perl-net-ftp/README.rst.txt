:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-net-ftp'
.. highlight: bash

perl-net-ftp
============

.. conda:recipe:: perl-net-ftp/2.79
   :replaces_section_title:
   :noindex:

   FTP Client class

   :homepage: http://metacpan.org/pod/Net::FTP
   :license: perl_5
   :recipe: /`perl-net-ftp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp>`_/`2.79 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp/2.79>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp/2.79/meta.yaml>`_

   


.. conda:package:: perl-net-ftp

   |downloads_perl-net-ftp| |docker_perl-net-ftp|

   :versions:
      
      

      ``2.79-2``,  ``2.79-1``,  ``2.79-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-net-ftp

   and update with::

      mamba update perl-net-ftp

  To create a new environment, run::

      mamba create --name myenvname perl-net-ftp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-net-ftp:<tag>

   (see `perl-net-ftp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-net-ftp| image:: https://img.shields.io/conda/dn/bioconda/perl-net-ftp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-net-ftp
   :alt:   (downloads)
.. |docker_perl-net-ftp| image:: https://quay.io/repository/biocontainers/perl-net-ftp/status
   :target: https://quay.io/repository/biocontainers/perl-net-ftp
.. _`perl-net-ftp/tags`: https://quay.io/repository/biocontainers/perl-net-ftp?tab=tags


.. raw:: html

    <script>
        var package = "perl-net-ftp";
        var versions = ["2.79","2.79","2.79"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-ftp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-ftp/README.html