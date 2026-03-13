:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-getopt'
.. highlight: bash

perl-moosex-getopt
==================

.. conda:recipe:: perl-moosex-getopt
   :replaces_section_title:
   :noindex:

   A Moose role for processing command line options.

   :homepage: https://github.com/moose/MooseX-Getopt
   :documentation: https://metacpan.org/pod/MooseX::Getopt
   
   :license: Perl_5
   :recipe: /`perl-moosex-getopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-getopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-getopt/meta.yaml>`_

   


.. conda:package:: perl-moosex-getopt

   |downloads_perl-moosex-getopt| |docker_perl-moosex-getopt|

   :versions:
      
      

      ``0.78-0``,  ``0.75-0``,  ``0.74-1``,  ``0.74-0``,  ``0.72-0``,  ``0.71-2``,  ``0.71-1``,  ``0.71-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-getopt-long: 
   :depends on perl-getopt-long-descriptive: 
   :depends on perl-moose: 
   :depends on perl-moosex-role-parameterized: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-try-tiny: 

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

    pixi global install perl-moosex-getopt

to add into an existing workspace instead, run::

    pixi add perl-moosex-getopt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-moosex-getopt

Alternatively, to install into a new environment, run::

    conda create -n envname perl-moosex-getopt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-moosex-getopt:<tag>

(see `perl-moosex-getopt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-moosex-getopt| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-getopt.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-getopt
   :alt:   (downloads)
.. |docker_perl-moosex-getopt| image:: https://quay.io/repository/biocontainers/perl-moosex-getopt/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-getopt
.. _`perl-moosex-getopt/tags`: https://quay.io/repository/biocontainers/perl-moosex-getopt?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-getopt";
        var versions = ["0.78","0.75","0.74","0.74","0.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-getopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-getopt/README.html