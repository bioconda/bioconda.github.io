:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogamun'
.. highlight: bash

bioconductor-mogamun
====================

.. conda:recipe:: bioconductor-mogamun
   :replaces_section_title:
   :noindex:

   MOGAMUN\: A Multi\-Objective Genetic Algorithm to Find Active Modules in Multiplex Biological Networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MOGAMUN.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-mogamun <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogamun>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogamun/meta.yaml>`_

   MOGAMUN is a multi\-objective genetic algorithm that identifies active modules in a multiplex biological network. This allows analyzing different biological networks at the same time. MOGAMUN is based on NSGA\-II \(Non\-Dominated Sorting Genetic Algorithm\, version II\)\, which we adapted to work on networks.


.. conda:package:: bioconductor-mogamun

   |downloads_bioconductor-mogamun| |docker_bioconductor-mogamun|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-rcy3: ``>=2.30.0,<2.31.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: 
   :depends on r-runit: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-mogamun

to add into an existing workspace instead, run::

    pixi add bioconductor-mogamun

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mogamun

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mogamun

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mogamun:<tag>

(see `bioconductor-mogamun/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mogamun| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogamun.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogamun
   :alt:   (downloads)
.. |docker_bioconductor-mogamun| image:: https://quay.io/repository/biocontainers/bioconductor-mogamun/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogamun
.. _`bioconductor-mogamun/tags`: https://quay.io/repository/biocontainers/bioconductor-mogamun?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mogamun";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogamun/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogamun/README.html