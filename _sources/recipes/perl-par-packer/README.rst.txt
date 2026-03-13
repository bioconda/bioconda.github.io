:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-par-packer'
.. highlight: bash

perl-par-packer
===============

.. conda:recipe:: perl-par-packer/1.036
   :replaces_section_title:
   :noindex:

   PAR Packager

   :homepage: http://metacpan.org/pod/PAR::Packer
   :license: perl_5
   :recipe: /`perl-par-packer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer>`_/`1.036 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer/1.036>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer/1.036/meta.yaml>`_

   


.. conda:package:: perl-par-packer

   |downloads_perl-par-packer| |docker_perl-par-packer|

   :versions:
      
      

      ``1.036-6``,  ``1.036-5``,  ``1.036-4``,  ``1.036-3``,  ``1.036-2``,  ``1.036-1``,  ``1.036-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-getopt-argvfile: 
   :depends on perl-getopt-long: ``>=2.58,<3.0a0``
   :depends on perl-module-build: ``0.4234.*``
   :depends on perl-module-scandeps: 
   :depends on perl-par: 
   :depends on perl-par-dist: 
   :depends on perl-text-parsewords: 

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

    pixi global install perl-par-packer

to add into an existing workspace instead, run::

    pixi add perl-par-packer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-par-packer

Alternatively, to install into a new environment, run::

    conda create -n envname perl-par-packer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-par-packer:<tag>

(see `perl-par-packer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-par-packer| image:: https://img.shields.io/conda/dn/bioconda/perl-par-packer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-par-packer
   :alt:   (downloads)
.. |docker_perl-par-packer| image:: https://quay.io/repository/biocontainers/perl-par-packer/status
   :target: https://quay.io/repository/biocontainers/perl-par-packer
.. _`perl-par-packer/tags`: https://quay.io/repository/biocontainers/perl-par-packer?tab=tags


.. raw:: html

    <script>
        var package = "perl-par-packer";
        var versions = ["1.036","1.036","1.036","1.036","1.036"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-par-packer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-par-packer/README.html