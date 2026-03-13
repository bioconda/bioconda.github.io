:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-run'
.. highlight: bash

perl-ipc-run
============

.. conda:recipe:: perl-ipc-run
   :replaces_section_title:
   :noindex:

   system\(\) and background procs w\/ piping\, redirs\, ptys \(Unix\, Win32\).

   :homepage: https://metacpan.org/pod/IPC::Run
   :license: Perl_5
   :recipe: /`perl-ipc-run <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run/meta.yaml>`_

   


.. conda:package:: perl-ipc-run

   |downloads_perl-ipc-run| |docker_perl-ipc-run|

   :versions:
      
      

      ``20250809.0-0``,  ``20200505.0-0``,  ``20180523.0-1``,  ``20180523.0-0``,  ``0.94-1``,  ``0.94-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-io-tty: 

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

    pixi global install perl-ipc-run

to add into an existing workspace instead, run::

    pixi add perl-ipc-run

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ipc-run

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ipc-run

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ipc-run:<tag>

(see `perl-ipc-run/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ipc-run| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-run.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ipc-run
   :alt:   (downloads)
.. |docker_perl-ipc-run| image:: https://quay.io/repository/biocontainers/perl-ipc-run/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-run
.. _`perl-ipc-run/tags`: https://quay.io/repository/biocontainers/perl-ipc-run?tab=tags


.. raw:: html

    <script>
        var package = "perl-ipc-run";
        var versions = ["20250809.0","20200505.0","20180523.0","20180523.0","0.94"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-run/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-run/README.html