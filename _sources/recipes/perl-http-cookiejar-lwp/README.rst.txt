:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-cookiejar-lwp'
.. highlight: bash

perl-http-cookiejar-lwp
=======================

.. conda:recipe:: perl-http-cookiejar-lwp
   :replaces_section_title:
   :noindex:

   A minimalist HTTP user agent cookie jar.

   :homepage: https://github.com/dagolden/HTTP-CookieJar
   :documentation: https://metacpan.org/pod/HTTP::CookieJar
   
   :license: APACHE / Apache-2.0
   :recipe: /`perl-http-cookiejar-lwp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookiejar-lwp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookiejar-lwp/meta.yaml>`_

   


.. conda:package:: perl-http-cookiejar-lwp

   |downloads_perl-http-cookiejar-lwp| |docker_perl-http-cookiejar-lwp|

   :versions:
      
      

      ``0.014-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-http-date: 
   :depends perl-parent: 
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

      mamba install perl-http-cookiejar-lwp

   and update with::

      mamba update perl-http-cookiejar-lwp

  To create a new environment, run::

      mamba create --name myenvname perl-http-cookiejar-lwp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-http-cookiejar-lwp:<tag>

   (see `perl-http-cookiejar-lwp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-cookiejar-lwp| image:: https://img.shields.io/conda/dn/bioconda/perl-http-cookiejar-lwp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-cookiejar-lwp
   :alt:   (downloads)
.. |docker_perl-http-cookiejar-lwp| image:: https://quay.io/repository/biocontainers/perl-http-cookiejar-lwp/status
   :target: https://quay.io/repository/biocontainers/perl-http-cookiejar-lwp
.. _`perl-http-cookiejar-lwp/tags`: https://quay.io/repository/biocontainers/perl-http-cookiejar-lwp?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-cookiejar-lwp";
        var versions = ["0.014"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-cookiejar-lwp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-cookiejar-lwp/README.html