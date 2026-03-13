:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-logger-simple'
.. highlight: bash

perl-logger-simple
==================

.. conda:recipe:: perl-logger-simple
   :replaces_section_title:
   :noindex:

   Implementation of the Simran\-Log\-Log and Simran\-Error\-Error modules

   :homepage: http://metacpan.org/pod/Logger::Simple
   :license: perl_5
   :recipe: /`perl-logger-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-logger-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-logger-simple/meta.yaml>`_

   


.. conda:package:: perl-logger-simple

   |downloads_perl-logger-simple| |docker_perl-logger-simple|

   :versions:
      
      

      ``2.0-1``,  ``2.0-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-object-insideout: 
   :depends on perl-test-harness: 
   :depends on perl-test-pod: 
   :depends on perl-time-hires: 

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

    pixi global install perl-logger-simple

to add into an existing workspace instead, run::

    pixi add perl-logger-simple

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-logger-simple

Alternatively, to install into a new environment, run::

    conda create -n envname perl-logger-simple

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-logger-simple:<tag>

(see `perl-logger-simple/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-logger-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-logger-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-logger-simple
   :alt:   (downloads)
.. |docker_perl-logger-simple| image:: https://quay.io/repository/biocontainers/perl-logger-simple/status
   :target: https://quay.io/repository/biocontainers/perl-logger-simple
.. _`perl-logger-simple/tags`: https://quay.io/repository/biocontainers/perl-logger-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-logger-simple";
        var versions = ["2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-logger-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-logger-simple/README.html