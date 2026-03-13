:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graphics-colornames'
.. highlight: bash

perl-graphics-colornames
========================

.. conda:recipe:: perl-graphics-colornames
   :replaces_section_title:
   :noindex:

   defines RGB values for common color names

   :homepage: http://metacpan.org/pod/Graphics::ColorNames
   :license: perl_5
   :recipe: /`perl-graphics-colornames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphics-colornames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphics-colornames/meta.yaml>`_

   


.. conda:package:: perl-graphics-colornames

   |downloads_perl-graphics-colornames| |docker_perl-graphics-colornames|

   :versions:
      
      

      ``2.11-1``,  ``2.11-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-carp: 
   :depends on perl-exporter: 
   :depends on perl-module-build: 
   :depends on perl-module-load: 
   :depends on perl-module-loaded: 

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

    pixi global install perl-graphics-colornames

to add into an existing workspace instead, run::

    pixi add perl-graphics-colornames

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-graphics-colornames

Alternatively, to install into a new environment, run::

    conda create -n envname perl-graphics-colornames

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-graphics-colornames:<tag>

(see `perl-graphics-colornames/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-graphics-colornames| image:: https://img.shields.io/conda/dn/bioconda/perl-graphics-colornames.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-graphics-colornames
   :alt:   (downloads)
.. |docker_perl-graphics-colornames| image:: https://quay.io/repository/biocontainers/perl-graphics-colornames/status
   :target: https://quay.io/repository/biocontainers/perl-graphics-colornames
.. _`perl-graphics-colornames/tags`: https://quay.io/repository/biocontainers/perl-graphics-colornames?tab=tags


.. raw:: html

    <script>
        var package = "perl-graphics-colornames";
        var versions = ["2.11","2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graphics-colornames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graphics-colornames/README.html