:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-libwww-perl'
.. highlight: bash

perl-libwww-perl
================

.. conda:recipe:: perl-libwww-perl
   :replaces_section_title:
   :noindex:

   The World\-Wide Web library for Perl

   :homepage: http://metacpan.org/pod/libwww-perl
   :license: perl_5
   :recipe: /`perl-libwww-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libwww-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libwww-perl/meta.yaml>`_

   


.. conda:package:: perl-libwww-perl

   |downloads_perl-libwww-perl| |docker_perl-libwww-perl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.67-0</code>,  <code>6.66-0</code>,  <code>6.64-0</code>,  <code>6.62-0</code>,  <code>6.61-0</code>,  <code>6.39-1</code>,  <code>6.39-0</code>,  <code>6.36-1</code>,  <code>6.36-0</code>,  </span></summary>
      

      ``6.67-0``,  ``6.66-0``,  ``6.64-0``,  ``6.62-0``,  ``6.61-0``,  ``6.39-1``,  ``6.39-0``,  ``6.36-1``,  ``6.36-0``,  ``6.15-1``,  ``6.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-digest-md5: 
   :depends perl-encode: 
   :depends perl-encode-locale: 
   :depends perl-file-listing: 
   :depends perl-html-parser: 
   :depends perl-http-cookies: 
   :depends perl-http-daemon: 
   :depends perl-http-date: 
   :depends perl-http-negotiate: 
   :depends perl-lwp-mediatypes: 
   :depends perl-mime-base64: 
   :depends perl-net-http: ``>=6.18``
   :depends perl-ntlm: 
   :depends perl-try-tiny: 
   :depends perl-uri: 
   :depends perl-www-robotrules: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-libwww-perl

   and update with::

      mamba update perl-libwww-perl

  To create a new environment, run::

      mamba create --name myenvname perl-libwww-perl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-libwww-perl:<tag>

   (see `perl-libwww-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-libwww-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-libwww-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-libwww-perl
   :alt:   (downloads)
.. |docker_perl-libwww-perl| image:: https://quay.io/repository/biocontainers/perl-libwww-perl/status
   :target: https://quay.io/repository/biocontainers/perl-libwww-perl
.. _`perl-libwww-perl/tags`: https://quay.io/repository/biocontainers/perl-libwww-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-libwww-perl";
        var versions = ["6.67","6.66","6.64","6.62","6.61"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-libwww-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-libwww-perl/README.html