:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bioperl-run'
.. highlight: bash

perl-bioperl-run
================

.. conda:recipe:: perl-bioperl-run
   :replaces_section_title:
   :noindex:

   BioPerl\-Run \- wrapper toolkit

   :homepage: http://metacpan.org/pod/BioPerl-Run
   :license: perl_5
   :recipe: /`perl-bioperl-run <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-run>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-run/meta.yaml>`_

   


.. conda:package:: perl-bioperl-run

   |downloads_perl-bioperl-run| |docker_perl-bioperl-run|

   :versions:
      
      

      ``1.007003-0``,  ``1.007002-6``,  ``1.007002-5``,  ``1.007002-4``,  ``1.007002-3``,  ``1.006900-2``,  ``1.006900-1``,  ``1.006900-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-samtools: 
   :depends on perl-bioperl-core: 
   :depends on perl-file-sort: 
   :depends on perl-io-string: 
   :depends on perl-ipc-run: 

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

    pixi global install perl-bioperl-run

to add into an existing workspace instead, run::

    pixi add perl-bioperl-run

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bioperl-run

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bioperl-run

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bioperl-run:<tag>

(see `perl-bioperl-run/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bioperl-run| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl-run.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bioperl-run
   :alt:   (downloads)
.. |docker_perl-bioperl-run| image:: https://quay.io/repository/biocontainers/perl-bioperl-run/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl-run
.. _`perl-bioperl-run/tags`: https://quay.io/repository/biocontainers/perl-bioperl-run?tab=tags


.. raw:: html

    <script>
        var package = "perl-bioperl-run";
        var versions = ["1.007003","1.007002","1.007002","1.007002","1.007002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl-run/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl-run/README.html