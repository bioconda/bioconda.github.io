:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-requiresinternet'
.. highlight: bash

perl-test-requiresinternet
==========================

.. conda:recipe:: perl-test-requiresinternet
   :replaces_section_title:
   :noindex:

   Easily test network connectivity

   :homepage: https://metacpan.org/dist/Test-RequiresInternet
   :license: perl_5
   :recipe: /`perl-test-requiresinternet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requiresinternet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requiresinternet/meta.yaml>`_

   


.. conda:package:: perl-test-requiresinternet

   |downloads_perl-test-requiresinternet| |docker_perl-test-requiresinternet|

   :versions:
      
      

      ``0.05-1``,  ``0.05-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-socket: 

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

    pixi global install perl-test-requiresinternet

to add into an existing workspace instead, run::

    pixi add perl-test-requiresinternet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-requiresinternet

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-requiresinternet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-requiresinternet:<tag>

(see `perl-test-requiresinternet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-requiresinternet| image:: https://img.shields.io/conda/dn/bioconda/perl-test-requiresinternet.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-requiresinternet
   :alt:   (downloads)
.. |docker_perl-test-requiresinternet| image:: https://quay.io/repository/biocontainers/perl-test-requiresinternet/status
   :target: https://quay.io/repository/biocontainers/perl-test-requiresinternet
.. _`perl-test-requiresinternet/tags`: https://quay.io/repository/biocontainers/perl-test-requiresinternet?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-requiresinternet";
        var versions = ["0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-requiresinternet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-requiresinternet/README.html