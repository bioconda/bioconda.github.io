:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-prereq'
.. highlight: bash

perl-test-prereq
================

.. conda:recipe:: perl-test-prereq/2.002
   :replaces_section_title:
   :noindex:

   check if Makefile.PL has the right pre\-requisites

   :homepage: https://github.com/briandfoy/test-prereq
   :license: artistic_2
   :recipe: /`perl-test-prereq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq>`_/`2.002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq/2.002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq/2.002/meta.yaml>`_

   


.. conda:package:: perl-test-prereq

   |downloads_perl-test-prereq| |docker_perl-test-prereq|

   :versions:
      
      

      ``2.002-4``,  ``2.002-3``,  ``2.002-1``,  ``2.002-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-lib: 
   :depends on perl-module-build: 
   :depends on perl-module-extract-use: 
   :depends on perl-parent: 

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

    pixi global install perl-test-prereq

to add into an existing workspace instead, run::

    pixi add perl-test-prereq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-prereq

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-prereq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-prereq:<tag>

(see `perl-test-prereq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-prereq| image:: https://img.shields.io/conda/dn/bioconda/perl-test-prereq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-prereq
   :alt:   (downloads)
.. |docker_perl-test-prereq| image:: https://quay.io/repository/biocontainers/perl-test-prereq/status
   :target: https://quay.io/repository/biocontainers/perl-test-prereq
.. _`perl-test-prereq/tags`: https://quay.io/repository/biocontainers/perl-test-prereq?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-prereq";
        var versions = ["2.002","2.002","2.002","2.002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-prereq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-prereq/README.html