:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-battenberg'
.. highlight: bash

perl-sanger-cgp-battenberg
==========================

.. conda:recipe:: perl-sanger-cgp-battenberg
   :replaces_section_title:
   :noindex:

   detect subclonality and copy number in matched NGS data

   :homepage: https://github.com/cancerit/cgpBattenberg
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-battenberg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-battenberg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-battenberg/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-battenberg

   |downloads_perl-sanger-cgp-battenberg| |docker_perl-sanger-cgp-battenberg|

   :versions:
      
      

      ``1.4.1-9``,  ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-6``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``

      

   
   :depends on cancerit-allelecount: 
   :depends on impute2: 
   :depends on libgcc-ng: ``>=12``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-file-sharedir: 
   :depends on perl-file-sharedir-install: 
   :depends on perl-module-build: ``0.4234.*``
   :depends on perl-pcap: 
   :depends on perl-sanger-cgp-allelecount: 

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

    pixi global install perl-sanger-cgp-battenberg

to add into an existing workspace instead, run::

    pixi add perl-sanger-cgp-battenberg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sanger-cgp-battenberg

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sanger-cgp-battenberg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sanger-cgp-battenberg:<tag>

(see `perl-sanger-cgp-battenberg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sanger-cgp-battenberg| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-battenberg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-battenberg
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-battenberg| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-battenberg/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-battenberg
.. _`perl-sanger-cgp-battenberg/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-battenberg?tab=tags


.. raw:: html

    <script>
        var package = "perl-sanger-cgp-battenberg";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-battenberg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-battenberg/README.html