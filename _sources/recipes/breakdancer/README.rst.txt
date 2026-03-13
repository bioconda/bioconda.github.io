:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakdancer'
.. highlight: bash

breakdancer
===========

.. conda:recipe:: breakdancer
   :replaces_section_title:
   :noindex:

   SV detection from paired end reads mapping

   :homepage: https://github.com/genome/breakdancer
   :license: GPLv3
   :recipe: /`breakdancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakdancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakdancer/meta.yaml>`_
   :links: biotools: :biotools:`breakdancer`

   


.. conda:package:: breakdancer

   |downloads_breakdancer| |docker_breakdancer|

   :versions:
      
      

      ``1.4.5-11``,  ``1.4.5-10``,  ``1.4.5-9``,  ``1.4.5-8``,  ``1.4.5-7``,  ``1.4.5-6``,  ``1.4.5-2``,  ``1.4.5-1``,  ``1.4.5-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on ncurses: ``>=6.3,<7.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-gdgraph-histogram: 
   :depends on perl-math-cdf: 
   :depends on perl-statistics-descriptive: 

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

    pixi global install breakdancer

to add into an existing workspace instead, run::

    pixi add breakdancer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install breakdancer

Alternatively, to install into a new environment, run::

    conda create -n envname breakdancer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/breakdancer:<tag>

(see `breakdancer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_breakdancer| image:: https://img.shields.io/conda/dn/bioconda/breakdancer.svg?style=flat
   :target: https://anaconda.org/bioconda/breakdancer
   :alt:   (downloads)
.. |docker_breakdancer| image:: https://quay.io/repository/biocontainers/breakdancer/status
   :target: https://quay.io/repository/biocontainers/breakdancer
.. _`breakdancer/tags`: https://quay.io/repository/biocontainers/breakdancer?tab=tags


.. raw:: html

    <script>
        var package = "breakdancer";
        var versions = ["1.4.5","1.4.5","1.4.5","1.4.5","1.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakdancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakdancer/README.html