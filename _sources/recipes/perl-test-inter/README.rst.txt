:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-inter'
.. highlight: bash

perl-test-inter
===============

.. conda:recipe:: perl-test-inter
   :replaces_section_title:
   :noindex:

   Framework for more readable interactive test scripts.

   :homepage: https://metacpan.org/pod/Test::Inter
   :license: Perl_5
   :recipe: /`perl-test-inter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-inter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-inter/meta.yaml>`_

   


.. conda:package:: perl-test-inter

   |downloads_perl-test-inter| |docker_perl-test-inter|

   :versions:
      
      

      ``1.12-0``,  ``1.10-0``,  ``1.09-1``,  ``1.09-0``,  ``1.07-0``,  ``1.06-1``,  ``1.06-0``

      

   
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

    pixi global install perl-test-inter

to add into an existing workspace instead, run::

    pixi add perl-test-inter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-inter

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-inter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-inter:<tag>

(see `perl-test-inter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-inter| image:: https://img.shields.io/conda/dn/bioconda/perl-test-inter.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-inter
   :alt:   (downloads)
.. |docker_perl-test-inter| image:: https://quay.io/repository/biocontainers/perl-test-inter/status
   :target: https://quay.io/repository/biocontainers/perl-test-inter
.. _`perl-test-inter/tags`: https://quay.io/repository/biocontainers/perl-test-inter?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-inter";
        var versions = ["1.12","1.10","1.09","1.09","1.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-inter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-inter/README.html