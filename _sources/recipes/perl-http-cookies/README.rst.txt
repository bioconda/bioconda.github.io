:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-cookies'
.. highlight: bash

perl-http-cookies
=================

.. conda:recipe:: perl-http-cookies
   :replaces_section_title:
   :noindex:

   HTTP cookie jars.

   :homepage: https://github.com/libwww-perl/http-cookies
   :license: perl_5
   :recipe: /`perl-http-cookies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookies/meta.yaml>`_

   


.. conda:package:: perl-http-cookies

   |downloads_perl-http-cookies| |docker_perl-http-cookies|

   :versions:
      
      

      ``6.11-0``,  ``6.10-0``,  ``6.04-1``,  ``6.04-0``,  ``6.01-1``,  ``6.01-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-http-date: 
   :depends on perl-http-message: 
   :depends on perl-time-local: 

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

    pixi global install perl-http-cookies

to add into an existing workspace instead, run::

    pixi add perl-http-cookies

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-http-cookies

Alternatively, to install into a new environment, run::

    conda create -n envname perl-http-cookies

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-http-cookies:<tag>

(see `perl-http-cookies/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-http-cookies| image:: https://img.shields.io/conda/dn/bioconda/perl-http-cookies.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-cookies
   :alt:   (downloads)
.. |docker_perl-http-cookies| image:: https://quay.io/repository/biocontainers/perl-http-cookies/status
   :target: https://quay.io/repository/biocontainers/perl-http-cookies
.. _`perl-http-cookies/tags`: https://quay.io/repository/biocontainers/perl-http-cookies?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-cookies";
        var versions = ["6.11","6.10","6.04","6.04","6.01"];
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