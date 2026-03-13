:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-more'
.. highlight: bash

perl-test-more
==============

.. conda:recipe:: perl-test-more
   :replaces_section_title:
   :noindex:

   yet another framework for writing test scripts

   :homepage: http://metacpan.org/pod/Test::More
   :license: perl_5
   :recipe: /`perl-test-more <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-more>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-more/meta.yaml>`_

   


.. conda:package:: perl-test-more

   |downloads_perl-test-more| |docker_perl-test-more|

   :versions:
      
      

      ``1.001002-2``,  ``1.001002-1``,  ``1.001002-0``

      

   
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

    pixi global install perl-test-more

to add into an existing workspace instead, run::

    pixi add perl-test-more

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-more

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-more

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-more:<tag>

(see `perl-test-more/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-more| image:: https://img.shields.io/conda/dn/bioconda/perl-test-more.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-more
   :alt:   (downloads)
.. |docker_perl-test-more| image:: https://quay.io/repository/biocontainers/perl-test-more/status
   :target: https://quay.io/repository/biocontainers/perl-test-more
.. _`perl-test-more/tags`: https://quay.io/repository/biocontainers/perl-test-more?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-more";
        var versions = ["1.001002","1.001002","1.001002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-more/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-more/README.html