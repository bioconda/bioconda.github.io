:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-estscan1'
.. highlight: bash

perl-estscan1
=============

.. conda:recipe:: perl-estscan1/1.3
   :replaces_section_title:
   :noindex:

   Detects coding regions in DNA sequences even if they are of low quality. ESTScan.pm contains the Perl part of the code that reads in the matrices file. The C code that does the actual computation is located in estscan.c.

   :homepage: http://estscan.sourceforge.net
   :license: open source
   :recipe: /`perl-estscan1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan1>`_/`1.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan1/1.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan1/1.3/meta.yaml>`_

   


.. conda:package:: perl-estscan1

   |downloads_perl-estscan1| |docker_perl-estscan1|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   
   :depends on perl: ``>=5.26.2,<5.27.0a0``
   :depends on perl-btlib: 

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

    pixi global install perl-estscan1

to add into an existing workspace instead, run::

    pixi add perl-estscan1

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-estscan1

Alternatively, to install into a new environment, run::

    conda create -n envname perl-estscan1

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-estscan1:<tag>

(see `perl-estscan1/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-estscan1| image:: https://img.shields.io/conda/dn/bioconda/perl-estscan1.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-estscan1
   :alt:   (downloads)
.. |docker_perl-estscan1| image:: https://quay.io/repository/biocontainers/perl-estscan1/status
   :target: https://quay.io/repository/biocontainers/perl-estscan1
.. _`perl-estscan1/tags`: https://quay.io/repository/biocontainers/perl-estscan1?tab=tags


.. raw:: html

    <script>
        var package = "perl-estscan1";
        var versions = ["1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-estscan1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-estscan1/README.html