:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-progressbar'
.. highlight: bash

perl-term-progressbar
=====================

.. conda:recipe:: perl-term-progressbar
   :replaces_section_title:
   :noindex:

   Provide a progress meter on a standard terminal.

   :homepage: https://metacpan.org/pod/Term::ProgressBar
   :license: Perl_5
   :recipe: /`perl-term-progressbar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-progressbar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-progressbar/meta.yaml>`_

   


.. conda:package:: perl-term-progressbar

   |downloads_perl-term-progressbar| |docker_perl-term-progressbar|

   :versions:
      
      

      ``2.23-0``,  ``2.22-1``,  ``2.22-0``,  ``2.21-1``,  ``2.21-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-class-methodmaker: 

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

    pixi global install perl-term-progressbar

to add into an existing workspace instead, run::

    pixi add perl-term-progressbar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-term-progressbar

Alternatively, to install into a new environment, run::

    conda create -n envname perl-term-progressbar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-term-progressbar:<tag>

(see `perl-term-progressbar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-term-progressbar| image:: https://img.shields.io/conda/dn/bioconda/perl-term-progressbar.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-progressbar
   :alt:   (downloads)
.. |docker_perl-term-progressbar| image:: https://quay.io/repository/biocontainers/perl-term-progressbar/status
   :target: https://quay.io/repository/biocontainers/perl-term-progressbar
.. _`perl-term-progressbar/tags`: https://quay.io/repository/biocontainers/perl-term-progressbar?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-progressbar";
        var versions = ["2.23","2.22","2.22","2.21","2.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-progressbar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-progressbar/README.html