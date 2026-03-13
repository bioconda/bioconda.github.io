:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-types-path-tiny'
.. highlight: bash

perl-moosex-types-path-tiny
===========================

.. conda:recipe:: perl-moosex-types-path-tiny
   :replaces_section_title:
   :noindex:

   MooseX\:\:Types\:\:Path\:\:Tiny \- Path\:\:Tiny types and coercions for Moose

   :homepage: https://github.com/moose/MooseX-Types-Path-Tiny
   :license: perl_5
   :recipe: /`perl-moosex-types-path-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types-path-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types-path-tiny/meta.yaml>`_

   


.. conda:package:: perl-moosex-types-path-tiny

   |downloads_perl-moosex-types-path-tiny| |docker_perl-moosex-types-path-tiny|

   :versions:
      
      

      ``0.012-3``,  ``0.012-2``,  ``0.012-1``,  ``0.012-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-moose: 
   :depends on perl-moosex-getopt: 
   :depends on perl-moosex-types: 
   :depends on perl-moosex-types-stringlike: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-path-tiny: 

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

    pixi global install perl-moosex-types-path-tiny

to add into an existing workspace instead, run::

    pixi add perl-moosex-types-path-tiny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-moosex-types-path-tiny

Alternatively, to install into a new environment, run::

    conda create -n envname perl-moosex-types-path-tiny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-moosex-types-path-tiny:<tag>

(see `perl-moosex-types-path-tiny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-moosex-types-path-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-types-path-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-types-path-tiny
   :alt:   (downloads)
.. |docker_perl-moosex-types-path-tiny| image:: https://quay.io/repository/biocontainers/perl-moosex-types-path-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-types-path-tiny
.. _`perl-moosex-types-path-tiny/tags`: https://quay.io/repository/biocontainers/perl-moosex-types-path-tiny?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-types-path-tiny";
        var versions = ["0.012","0.012","0.012","0.012"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-types-path-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-types-path-tiny/README.html