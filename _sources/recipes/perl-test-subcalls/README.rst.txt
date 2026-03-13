:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-subcalls'
.. highlight: bash

perl-test-subcalls
==================

.. conda:recipe:: perl-test-subcalls/1.10
   :replaces_section_title:
   :noindex:

   Track the number of times subs are called

   :homepage: https://github.com/karenetheridge/Test-SubCalls
   :license: perl_5
   :recipe: /`perl-test-subcalls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls>`_/`1.10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls/1.10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls/1.10/meta.yaml>`_

   


.. conda:package:: perl-test-subcalls

   |downloads_perl-test-subcalls| |docker_perl-test-subcalls|

   :versions:
      
      

      ``1.10-3``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-exporter: 
   :depends on perl-hook-lexwrap: 

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

    pixi global install perl-test-subcalls

to add into an existing workspace instead, run::

    pixi add perl-test-subcalls

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-subcalls

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-subcalls

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-subcalls:<tag>

(see `perl-test-subcalls/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-subcalls| image:: https://img.shields.io/conda/dn/bioconda/perl-test-subcalls.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-subcalls
   :alt:   (downloads)
.. |docker_perl-test-subcalls| image:: https://quay.io/repository/biocontainers/perl-test-subcalls/status
   :target: https://quay.io/repository/biocontainers/perl-test-subcalls
.. _`perl-test-subcalls/tags`: https://quay.io/repository/biocontainers/perl-test-subcalls?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-subcalls";
        var versions = ["1.10","1.10","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-subcalls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-subcalls/README.html