:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tap-harness-env'
.. highlight: bash

perl-tap-harness-env
====================

.. conda:recipe:: perl-tap-harness-env/3.30
   :replaces_section_title:
   :noindex:

   Parsing harness related environmental variables where appropriate

   :homepage: http://metacpan.org/pod/TAP::Harness::Env
   :license: perl_5
   :recipe: /`perl-tap-harness-env <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tap-harness-env>`_/`3.30 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tap-harness-env/3.30>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tap-harness-env/3.30/meta.yaml>`_

   


.. conda:package:: perl-tap-harness-env

   |downloads_perl-tap-harness-env| |docker_perl-tap-harness-env|

   :versions:
      
      

      ``3.30-2``,  ``3.30-1``,  ``3.30-0``

      

   
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

    pixi global install perl-tap-harness-env

to add into an existing workspace instead, run::

    pixi add perl-tap-harness-env

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-tap-harness-env

Alternatively, to install into a new environment, run::

    conda create -n envname perl-tap-harness-env

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-tap-harness-env:<tag>

(see `perl-tap-harness-env/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-tap-harness-env| image:: https://img.shields.io/conda/dn/bioconda/perl-tap-harness-env.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tap-harness-env
   :alt:   (downloads)
.. |docker_perl-tap-harness-env| image:: https://quay.io/repository/biocontainers/perl-tap-harness-env/status
   :target: https://quay.io/repository/biocontainers/perl-tap-harness-env
.. _`perl-tap-harness-env/tags`: https://quay.io/repository/biocontainers/perl-tap-harness-env?tab=tags


.. raw:: html

    <script>
        var package = "perl-tap-harness-env";
        var versions = ["3.30","3.30","3.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tap-harness-env/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tap-harness-env/README.html