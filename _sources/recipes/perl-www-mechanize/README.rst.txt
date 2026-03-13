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

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-cgi: 
   :depends on perl-encode-locale: 
   :depends on perl-html-form: 
   :depends on perl-html-tree: 
   :depends on perl-http-server-simple: 
   :depends on perl-libwww-perl: 
   :depends on perl-module-build: 

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

    pixi global install perl-www-mechanize

to add into an existing workspace instead, run::

    pixi add perl-www-mechanize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-www-mechanize

Alternatively, to install into a new environment, run::

    conda create -n envname perl-www-mechanize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-www-mechanize:<tag>

(see `perl-www-mechanize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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