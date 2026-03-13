:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-getopt-long-descriptive'
.. highlight: bash

perl-getopt-long-descriptive
============================

.. conda:recipe:: perl-getopt-long-descriptive
   :replaces_section_title:
   :noindex:

   Getopt\:\:Long\, but simpler and more powerful.

   :homepage: https://github.com/rjbs/Getopt-Long-Descriptive
   :documentation: https://metacpan.org/pod/Getopt::Long::Descriptive
   
   :license: Perl_5
   :recipe: /`perl-getopt-long-descriptive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-long-descriptive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-long-descriptive/meta.yaml>`_

   


.. conda:package:: perl-getopt-long-descriptive

   |downloads_perl-getopt-long-descriptive| |docker_perl-getopt-long-descriptive|

   :versions:
      
      

      ``0.117-0``,  ``0.116-0``,  ``0.111-0``,  ``0.110-0``,  ``0.104-1``,  ``0.104-0``,  ``0.103-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-getopt-long: 
   :depends on perl-params-validate: 
   :depends on perl-sub-exporter: 

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

    pixi global install perl-getopt-long-descriptive

to add into an existing workspace instead, run::

    pixi add perl-getopt-long-descriptive

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-getopt-long-descriptive

Alternatively, to install into a new environment, run::

    conda create -n envname perl-getopt-long-descriptive

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-getopt-long-descriptive:<tag>

(see `perl-getopt-long-descriptive/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-getopt-long-descriptive| image:: https://img.shields.io/conda/dn/bioconda/perl-getopt-long-descriptive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-getopt-long-descriptive
   :alt:   (downloads)
.. |docker_perl-getopt-long-descriptive| image:: https://quay.io/repository/biocontainers/perl-getopt-long-descriptive/status
   :target: https://quay.io/repository/biocontainers/perl-getopt-long-descriptive
.. _`perl-getopt-long-descriptive/tags`: https://quay.io/repository/biocontainers/perl-getopt-long-descriptive?tab=tags


.. raw:: html

    <script>
        var package = "perl-getopt-long-descriptive";
        var versions = ["0.117","0.116","0.111","0.110","0.104"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-getopt-long-descriptive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-getopt-long-descriptive/README.html