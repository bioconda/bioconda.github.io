:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-cookies'
.. highlight: bash

perl-http-cookies
=================

.. conda:recipe:: perl-http-cookies
   :replaces_section_title:
   :noindex:

   HTTP cookie jars

   :homepage: https://github.com/libwww-perl/http-cookies
   :license: perl_5
   :recipe: /`perl-http-cookies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookies/meta.yaml>`_

   


.. conda:package:: perl-http-cookies

   |downloads_perl-http-cookies| |docker_perl-http-cookies|

   :versions:
      
      

      ``6.10-0``,  ``6.04-1``,  ``6.04-0``,  ``6.01-1``,  ``6.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-http-date: 
   :depends perl-http-message: 
   :depends perl-time-local: 
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

      mamba install perl-http-cookies

   and update with::

      mamba update perl-http-cookies

  To create a new environment, run::

      mamba create --name myenvname perl-http-cookies

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-http-cookies:<tag>

   (see `perl-http-cookies/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-cookies| image:: https://img.shields.io/conda/dn/bioconda/perl-http-cookies.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-cookies
   :alt:   (downloads)
.. |docker_perl-http-cookies| image:: https://quay.io/repository/biocontainers/perl-http-cookies/status
   :target: https://quay.io/repository/biocontainers/perl-http-cookies
.. _`perl-http-cookies/tags`: https://quay.io/repository/biocontainers/perl-http-cookies?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-cookies";
        var versions = ["6.10","6.04","6.04","6.01","6.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-cookies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-cookies/README.html