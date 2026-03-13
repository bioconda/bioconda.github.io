:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-class-moose'
.. highlight: bash

perl-test-class-moose
=====================

.. conda:recipe:: perl-test-class-moose
   :replaces_section_title:
   :noindex:

   Serious testing for serious Perl.

   :homepage: https://metacpan.org/release/Test-Class-Moose
   :license: Perl_5
   :recipe: /`perl-test-class-moose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-class-moose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-class-moose/meta.yaml>`_

   


.. conda:package:: perl-test-class-moose

   |downloads_perl-test-class-moose| |docker_perl-test-class-moose|

   :versions:
      
      

      ``1.00-0``,  ``0.99-0``,  ``0.96-2``,  ``0.96-1``,  ``0.96-0``,  ``0.95-0``,  ``0.94-0``,  ``0.80-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-class-load: 
   :depends on perl-devel-overloadinfo: 
   :depends on perl-eval-closure: 
   :depends on perl-exporter: 
   :depends on perl-import-into: 
   :depends on perl-json-maybexs: 
   :depends on perl-list-someutils: 
   :depends on perl-module-runtime: 
   :depends on perl-module-util: 
   :depends on perl-moose: 
   :depends on perl-moosex-getopt: 
   :depends on perl-mro-compat: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-package-deprecationmanager: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-sub-attribute: 
   :depends on perl-test-most: 
   :depends on perl-test-simple: 
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

    pixi global install perl-test-class-moose

to add into an existing workspace instead, run::

    pixi add perl-test-class-moose

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-class-moose

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-class-moose

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-class-moose:<tag>

(see `perl-test-class-moose/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-class-moose| image:: https://img.shields.io/conda/dn/bioconda/perl-test-class-moose.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-class-moose
   :alt:   (downloads)
.. |docker_perl-test-class-moose| image:: https://quay.io/repository/biocontainers/perl-test-class-moose/status
   :target: https://quay.io/repository/biocontainers/perl-test-class-moose
.. _`perl-test-class-moose/tags`: https://quay.io/repository/biocontainers/perl-test-class-moose?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-class-moose";
        var versions = ["1.00","0.99","0.96","0.96","0.96"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-class-moose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-class-moose/README.html