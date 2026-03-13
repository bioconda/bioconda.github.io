:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-run3'
.. highlight: bash

perl-ipc-run3
=============

.. conda:recipe:: perl-ipc-run3
   :replaces_section_title:
   :noindex:

   Run a subprocess with input\/ouput redirection.

   :homepage: https://metacpan.org/pod/IPC::Run3
   :license: Open-Source
   :recipe: /`perl-ipc-run3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run3/meta.yaml>`_

   


.. conda:package:: perl-ipc-run3

   |downloads_perl-ipc-run3| |docker_perl-ipc-run3|

   :versions:
      
      

      ``0.049-0``,  ``0.048-1``,  ``0.048-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
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

    pixi global install perl-ipc-run3

to add into an existing workspace instead, run::

    pixi add perl-ipc-run3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ipc-run3

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ipc-run3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ipc-run3:<tag>

(see `perl-ipc-run3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ipc-run3| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-run3.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ipc-run3
   :alt:   (downloads)
.. |docker_perl-ipc-run3| image:: https://quay.io/repository/biocontainers/perl-ipc-run3/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-run3
.. _`perl-ipc-run3/tags`: https://quay.io/repository/biocontainers/perl-ipc-run3?tab=tags


.. raw:: html

    <script>
        var package = "perl-ipc-run3";
        var versions = ["0.049","0.048","0.048"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-run3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-run3/README.html