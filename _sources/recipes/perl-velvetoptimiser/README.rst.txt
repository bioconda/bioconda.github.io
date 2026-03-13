:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-velvetoptimiser'
.. highlight: bash

perl-velvetoptimiser
====================

.. conda:recipe:: perl-velvetoptimiser
   :replaces_section_title:
   :noindex:

   Automatically optimise three of Velvet\'s assembly parameters.

   :homepage: https://github.com/tseemann/VelvetOptimiser
   :license: GPLv2
   :recipe: /`perl-velvetoptimiser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-velvetoptimiser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-velvetoptimiser/meta.yaml>`_
   :links: biotools: :biotools:`velvetoptimiser`

   


.. conda:package:: perl-velvetoptimiser

   |downloads_perl-velvetoptimiser| |docker_perl-velvetoptimiser|

   :versions:
      
      

      ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5-1``,  ``2.2.5-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl: ``>=1.7``
   :depends on velvet: ``>=0.7.51``

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

    pixi global install perl-velvetoptimiser

to add into an existing workspace instead, run::

    pixi add perl-velvetoptimiser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-velvetoptimiser

Alternatively, to install into a new environment, run::

    conda create -n envname perl-velvetoptimiser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-velvetoptimiser:<tag>

(see `perl-velvetoptimiser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-velvetoptimiser| image:: https://img.shields.io/conda/dn/bioconda/perl-velvetoptimiser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-velvetoptimiser
   :alt:   (downloads)
.. |docker_perl-velvetoptimiser| image:: https://quay.io/repository/biocontainers/perl-velvetoptimiser/status
   :target: https://quay.io/repository/biocontainers/perl-velvetoptimiser
.. _`perl-velvetoptimiser/tags`: https://quay.io/repository/biocontainers/perl-velvetoptimiser?tab=tags


.. raw:: html

    <script>
        var package = "perl-velvetoptimiser";
        var versions = ["2.2.6","2.2.6","2.2.5","2.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-velvetoptimiser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-velvetoptimiser/README.html