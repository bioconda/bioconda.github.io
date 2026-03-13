:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-ixhash'
.. highlight: bash

perl-tie-ixhash
===============

.. conda:recipe:: perl-tie-ixhash
   :replaces_section_title:
   :noindex:

   ordered associative arrays for Perl

   :homepage: http://metacpan.org/pod/Tie-IxHash
   :license: perl_5
   :recipe: /`perl-tie-ixhash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-ixhash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-ixhash/meta.yaml>`_

   


.. conda:package:: perl-tie-ixhash

   |downloads_perl-tie-ixhash| |docker_perl-tie-ixhash|

   :versions:
      
      

      ``1.23-3``,  ``1.23-2``,  ``1.23-1``,  ``1.23-0``

      

   
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

    pixi global install perl-tie-ixhash

to add into an existing workspace instead, run::

    pixi add perl-tie-ixhash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-tie-ixhash

Alternatively, to install into a new environment, run::

    conda create -n envname perl-tie-ixhash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-tie-ixhash:<tag>

(see `perl-tie-ixhash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-tie-ixhash| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-ixhash.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-ixhash
   :alt:   (downloads)
.. |docker_perl-tie-ixhash| image:: https://quay.io/repository/biocontainers/perl-tie-ixhash/status
   :target: https://quay.io/repository/biocontainers/perl-tie-ixhash
.. _`perl-tie-ixhash/tags`: https://quay.io/repository/biocontainers/perl-tie-ixhash?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-ixhash";
        var versions = ["1.23","1.23","1.23","1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-ixhash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-ixhash/README.html