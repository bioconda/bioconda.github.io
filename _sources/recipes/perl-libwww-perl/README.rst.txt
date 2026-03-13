:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-libwww-perl'
.. highlight: bash

perl-libwww-perl
================

.. conda:recipe:: perl-libwww-perl
   :replaces_section_title:
   :noindex:

   The World\-Wide Web library for Perl.

   :homepage: https://metacpan.org/pod/HTTP::CookieJar
   :developer docs: https://github.com/libwww-perl/libwww-perl
   :license: Perl_5
   :recipe: /`perl-libwww-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libwww-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libwww-perl/meta.yaml>`_

   


.. conda:package:: perl-libwww-perl

   |downloads_perl-libwww-perl| |docker_perl-libwww-perl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.81-0</code>,  <code>6.80-0</code>,  <code>6.79-0</code>,  <code>6.68-0</code>,  <code>6.67-1</code>,  <code>6.67-0</code>,  <code>6.66-0</code>,  <code>6.64-0</code>,  <code>6.62-0</code>,  </span></summary>
      

      ``6.81-0``,  ``6.80-0``,  ``6.79-0``,  ``6.68-0``,  ``6.67-1``,  ``6.67-0``,  ``6.66-0``,  ``6.64-0``,  ``6.62-0``,  ``6.61-0``,  ``6.39-1``,  ``6.39-0``,  ``6.36-1``,  ``6.36-0``,  ``6.15-1``,  ``6.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-data-dump: 
   :depends on perl-digest-md5: 
   :depends on perl-encode: 
   :depends on perl-encode-locale: 
   :depends on perl-file-listing: 
   :depends on perl-html-parser: 
   :depends on perl-http-cookiejar-lwp: 
   :depends on perl-http-cookies: 
   :depends on perl-http-daemon: 
   :depends on perl-http-date: 
   :depends on perl-http-negotiate: 
   :depends on perl-lwp-mediatypes: 
   :depends on perl-lwp-protocol-https: 
   :depends on perl-mime-base64: 
   :depends on perl-module-load: 
   :depends on perl-net-http: ``>=6.18``
   :depends on perl-ntlm: 
   :depends on perl-try-tiny: 
   :depends on perl-uri: 
   :depends on perl-www-robotrules: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install perl-libwww-perl

to add into an existing workspace instead, run::

    pixi add perl-libwww-perl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-libwww-perl

Alternatively, to install into a new environment, run::

    conda create -n envname perl-libwww-perl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-libwww-perl:<tag>

(see `perl-libwww-perl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-libwww-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-libwww-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-libwww-perl
   :alt:   (downloads)
.. |docker_perl-libwww-perl| image:: https://quay.io/repository/biocontainers/perl-libwww-perl/status
   :target: https://quay.io/repository/biocontainers/perl-libwww-perl
.. _`perl-libwww-perl/tags`: https://quay.io/repository/biocontainers/perl-libwww-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-libwww-perl";
        var versions = ["6.81","6.80","6.79","6.68","6.67"];
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