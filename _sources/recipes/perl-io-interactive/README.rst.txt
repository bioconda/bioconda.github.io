:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-interactive'
.. highlight: bash

perl-io-interactive
===================

.. conda:recipe:: perl-io-interactive
   :replaces_section_title:
   :noindex:

   Utilities for interactive I\/O

   :homepage: https://github.com/briandfoy/io-interactive
   :license: perl_5
   :recipe: /`perl-io-interactive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-interactive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-interactive/meta.yaml>`_

   


.. conda:package:: perl-io-interactive

   |downloads_perl-io-interactive| |docker_perl-io-interactive|

   :versions:
      
      

      ``1.027-0``,  ``1.026-0``,  ``1.023-0``,  ``1.022-1``,  ``1.022-0``,  ``1.021-2``,  ``1.021-1``

      

   
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

    pixi global install perl-io-interactive

to add into an existing workspace instead, run::

    pixi add perl-io-interactive

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-io-interactive

Alternatively, to install into a new environment, run::

    conda create -n envname perl-io-interactive

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-io-interactive:<tag>

(see `perl-io-interactive/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-io-interactive| image:: https://img.shields.io/conda/dn/bioconda/perl-io-interactive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-interactive
   :alt:   (downloads)
.. |docker_perl-io-interactive| image:: https://quay.io/repository/biocontainers/perl-io-interactive/status
   :target: https://quay.io/repository/biocontainers/perl-io-interactive
.. _`perl-io-interactive/tags`: https://quay.io/repository/biocontainers/perl-io-interactive?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-interactive";
        var versions = ["1.027","1.026","1.023","1.022","1.022"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-interactive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-interactive/README.html