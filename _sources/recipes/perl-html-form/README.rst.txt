:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-form'
.. highlight: bash

perl-html-form
==============

.. conda:recipe:: perl-html-form
   :replaces_section_title:
   :noindex:

   Class that represents an HTML form element.

   :homepage: https://metacpan.org/pod/HTML::Form
   :license: perl_5
   :recipe: /`perl-html-form <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-form>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-form/meta.yaml>`_

   


.. conda:package:: perl-html-form

   |downloads_perl-html-form| |docker_perl-html-form|

   :versions:
      
      

      ``6.11-0``,  ``6.07-0``,  ``6.04-1``,  ``6.04-0``,  ``6.03-1``,  ``6.03-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-cpan-meta: 
   :depends on perl-data-dumper: 
   :depends on perl-extutils-cbuilder: 
   :depends on perl-extutils-manifest: 
   :depends on perl-extutils-parsexs: 
   :depends on perl-file-path: 
   :depends on perl-getopt-long: 
   :depends on perl-html-parser: 
   :depends on perl-http-message: ``>=6.18``
   :depends on perl-module-metadata: 
   :depends on perl-perl-ostype: 
   :depends on perl-text-abbrev: 
   :depends on perl-text-parsewords: 
   :depends on perl-uri: 
   :depends on perl-version: 

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

    pixi global install perl-html-form

to add into an existing workspace instead, run::

    pixi add perl-html-form

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-html-form

Alternatively, to install into a new environment, run::

    conda create -n envname perl-html-form

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-html-form:<tag>

(see `perl-html-form/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-html-form| image:: https://img.shields.io/conda/dn/bioconda/perl-html-form.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-form
   :alt:   (downloads)
.. |docker_perl-html-form| image:: https://quay.io/repository/biocontainers/perl-html-form/status
   :target: https://quay.io/repository/biocontainers/perl-html-form
.. _`perl-html-form/tags`: https://quay.io/repository/biocontainers/perl-html-form?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-form";
        var versions = ["6.11","6.07","6.04","6.04","6.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-form/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-form/README.html