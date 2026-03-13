:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-net-http'
.. highlight: bash

perl-net-http
=============

.. conda:recipe:: perl-net-http
   :replaces_section_title:
   :noindex:

   Low\-level HTTP connection \(client\).

   :homepage: https://github.com/libwww-perl/Net-HTTP
   :documentation: https://metacpan.org/pod/Net::HTTP
   
   :license: Perl_5
   :recipe: /`perl-net-http <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-http>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-http/meta.yaml>`_

   


.. conda:package:: perl-net-http

   |downloads_perl-net-http| |docker_perl-net-http|

   :versions:
      
      

      ``6.24-0``,  ``6.23-0``,  ``6.22-0``,  ``6.19-1``,  ``6.19-0``,  ``6.18-0``,  ``6.09-1``,  ``6.09-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-carp: 
   :depends on perl-compress-raw-zlib: 
   :depends on perl-io-socket-ssl: 
   :depends on perl-uri: 

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

    pixi global install perl-net-http

to add into an existing workspace instead, run::

    pixi add perl-net-http

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-net-http

Alternatively, to install into a new environment, run::

    conda create -n envname perl-net-http

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-net-http:<tag>

(see `perl-net-http/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-net-http| image:: https://img.shields.io/conda/dn/bioconda/perl-net-http.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-net-http
   :alt:   (downloads)
.. |docker_perl-net-http| image:: https://quay.io/repository/biocontainers/perl-net-http/status
   :target: https://quay.io/repository/biocontainers/perl-net-http
.. _`perl-net-http/tags`: https://quay.io/repository/biocontainers/perl-net-http?tab=tags


.. raw:: html

    <script>
        var package = "perl-net-http";
        var versions = ["6.24","6.23","6.22","6.19","6.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-http/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-http/README.html