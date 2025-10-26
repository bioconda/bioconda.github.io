:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-www-mechanize'
.. highlight: bash

perl-www-mechanize
==================

.. conda:recipe:: perl-www-mechanize
   :replaces_section_title:
   :noindex:

   Handy web browsing in a Perl object.

   :homepage: https://metacpan.org/pod/WWW::Mechanize
   :license: Perl_5
   :recipe: /`perl-www-mechanize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-www-mechanize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-www-mechanize/meta.yaml>`_

   


.. conda:package:: perl-www-mechanize

   |downloads_perl-www-mechanize| |docker_perl-www-mechanize|

   :versions:
      
      

      ``2.20-0``,  ``2.19-0``,  ``1.91-2``,  ``1.91-1``,  ``1.91-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-cgi: 
   :depends perl-encode-locale: 
   :depends perl-html-form: 
   :depends perl-html-tree: 
   :depends perl-http-server-simple: 
   :depends perl-libwww-perl: 
   :depends perl-module-build: 
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

      mamba install perl-www-mechanize

   and update with::

      mamba update perl-www-mechanize

  To create a new environment, run::

      mamba create --name myenvname perl-www-mechanize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-www-mechanize:<tag>

   (see `perl-www-mechanize/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-www-mechanize| image:: https://img.shields.io/conda/dn/bioconda/perl-www-mechanize.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-www-mechanize
   :alt:   (downloads)
.. |docker_perl-www-mechanize| image:: https://quay.io/repository/biocontainers/perl-www-mechanize/status
   :target: https://quay.io/repository/biocontainers/perl-www-mechanize
.. _`perl-www-mechanize/tags`: https://quay.io/repository/biocontainers/perl-www-mechanize?tab=tags


.. raw:: html

    <script>
        var package = "perl-www-mechanize";
        var versions = ["2.20","2.19","1.91","1.91","1.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-www-mechanize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-www-mechanize/README.html