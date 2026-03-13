:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-specio'
.. highlight: bash

perl-specio
===========

.. conda:recipe:: perl-specio
   :replaces_section_title:
   :noindex:

   Type constraints and coercions for Perl

   :homepage: https://metacpan.org/release/Specio
   :license: artistic_2
   :recipe: /`perl-specio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-specio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-specio/meta.yaml>`_

   


.. conda:package:: perl-specio

   |downloads_perl-specio| |docker_perl-specio|

   :versions:
      
      

      ``0.53-0``,  ``0.52-0``,  ``0.51-0``,  ``0.50-0``,  ``0.49-0``,  ``0.48-0``,  ``0.47-0``,  ``0.43-0``,  ``0.42-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-clone: 
   :depends on perl-clone-choose: 
   :depends on perl-clone-pp: 
   :depends on perl-devel-stacktrace: 
   :depends on perl-eval-closure: 
   :depends on perl-module-implementation: 
   :depends on perl-module-runtime: 
   :depends on perl-mro-compat: 
   :depends on perl-role-tiny: 
   :depends on perl-sub-quote: 
   :depends on perl-test-fatal: 
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

    pixi global install perl-specio

to add into an existing workspace instead, run::

    pixi add perl-specio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-specio

Alternatively, to install into a new environment, run::

    conda create -n envname perl-specio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-specio:<tag>

(see `perl-specio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-specio| image:: https://img.shields.io/conda/dn/bioconda/perl-specio.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-specio
   :alt:   (downloads)
.. |docker_perl-specio| image:: https://quay.io/repository/biocontainers/perl-specio/status
   :target: https://quay.io/repository/biocontainers/perl-specio
.. _`perl-specio/tags`: https://quay.io/repository/biocontainers/perl-specio?tab=tags


.. raw:: html

    <script>
        var package = "perl-specio";
        var versions = ["0.53","0.52","0.51","0.50","0.49"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-specio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-specio/README.html