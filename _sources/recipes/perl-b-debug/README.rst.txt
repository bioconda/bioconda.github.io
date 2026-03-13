:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-b-debug'
.. highlight: bash

perl-b-debug
============

.. conda:recipe:: perl-b-debug
   :replaces_section_title:
   :noindex:

   print debug info about ops

   :homepage: http://metacpan.org/pod/B::Debug
   :license: perl_5
   :recipe: /`perl-b-debug <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-debug>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-debug/meta.yaml>`_

   


.. conda:package:: perl-b-debug

   |downloads_perl-b-debug| |docker_perl-b-debug|

   :versions:
      
      

      ``1.26-1``,  ``1.26-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-b-debug

to add into an existing workspace instead, run::

    pixi add perl-b-debug

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-b-debug

Alternatively, to install into a new environment, run::

    conda create -n envname perl-b-debug

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-b-debug:<tag>

(see `perl-b-debug/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-b-debug| image:: https://img.shields.io/conda/dn/bioconda/perl-b-debug.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-b-debug
   :alt:   (downloads)
.. |docker_perl-b-debug| image:: https://quay.io/repository/biocontainers/perl-b-debug/status
   :target: https://quay.io/repository/biocontainers/perl-b-debug
.. _`perl-b-debug/tags`: https://quay.io/repository/biocontainers/perl-b-debug?tab=tags


.. raw:: html

    <script>
        var package = "perl-b-debug";
        var versions = ["1.26","1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-b-debug/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-b-debug/README.html