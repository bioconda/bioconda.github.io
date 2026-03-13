:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-formatter'
.. highlight: bash

perl-html-formatter
===================

.. conda:recipe:: perl-html-formatter
   :replaces_section_title:
   :noindex:

   Base class for HTML formatters

   :homepage: https://metacpan.org/release/HTML-Formatter
   :license: perl_5
   :recipe: /`perl-html-formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-formatter/meta.yaml>`_

   


.. conda:package:: perl-html-formatter

   |downloads_perl-html-formatter| |docker_perl-html-formatter|

   :versions:
      
      

      ``2.16-1``,  ``2.16-0``,  ``2.14-1``,  ``2.14-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-carp: 
   :depends on perl-data-dumper: 
   :depends on perl-encode: 
   :depends on perl-font-afm: 
   :depends on perl-html-tree: 
   :depends on perl-parent: 

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

    pixi global install perl-html-formatter

to add into an existing workspace instead, run::

    pixi add perl-html-formatter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-html-formatter

Alternatively, to install into a new environment, run::

    conda create -n envname perl-html-formatter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-html-formatter:<tag>

(see `perl-html-formatter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-html-formatter| image:: https://img.shields.io/conda/dn/bioconda/perl-html-formatter.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-formatter
   :alt:   (downloads)
.. |docker_perl-html-formatter| image:: https://quay.io/repository/biocontainers/perl-html-formatter/status
   :target: https://quay.io/repository/biocontainers/perl-html-formatter
.. _`perl-html-formatter/tags`: https://quay.io/repository/biocontainers/perl-html-formatter?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-formatter";
        var versions = ["2.16","2.16","2.14","2.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-formatter/README.html