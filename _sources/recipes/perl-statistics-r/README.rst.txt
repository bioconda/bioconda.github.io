:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-r'
.. highlight: bash

perl-statistics-r
=================

.. conda:recipe:: perl-statistics-r
   :replaces_section_title:
   :noindex:

   Statistics\:\:R \- Perl interface with the R statistical program

   :homepage: http://search.cpan.org/dist/Statistics-R/
   :license: Perl5
   :recipe: /`perl-statistics-r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-r/meta.yaml>`_

   


.. conda:package:: perl-statistics-r

   |downloads_perl-statistics-r| |docker_perl-statistics-r|

   :versions:
      
      

      ``0.34-7``,  ``0.34-6``,  ``0.34-5``,  ``0.34-4``,  ``0.34-3``,  ``0.34-2``,  ``0.34-1``,  ``0.34-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-ipc-run: 
   :depends on perl-regexp-common: 
   :depends on perl-text-balanced: ``>=1.97``
   :depends on perl-text-wrap: 
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install perl-statistics-r

to add into an existing workspace instead, run::

    pixi add perl-statistics-r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-statistics-r

Alternatively, to install into a new environment, run::

    conda create -n envname perl-statistics-r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-statistics-r:<tag>

(see `perl-statistics-r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-statistics-r| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-r.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-r
   :alt:   (downloads)
.. |docker_perl-statistics-r| image:: https://quay.io/repository/biocontainers/perl-statistics-r/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-r
.. _`perl-statistics-r/tags`: https://quay.io/repository/biocontainers/perl-statistics-r?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-r";
        var versions = ["0.34","0.34","0.34","0.34","0.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-r/README.html