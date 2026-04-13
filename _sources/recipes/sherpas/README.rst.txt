:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sherpas'
.. highlight: bash

sherpas
=======

.. conda:recipe:: sherpas
   :replaces_section_title:
   :noindex:

   Screening Historical Events of Recombination in a Phylogeny via Ancestral Sequences.

   :homepage: https://github.com/phylo42/sherpas
   :license: MIT / MIT
   :recipe: /`sherpas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sherpas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sherpas/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.06.22.161422`

   A new\, alignment\-free genome recombination detection tool exploiting the idea of phylo\-kmers \(Linard et al. 2019\) to accelerate the process by several orders of magnitude while keeping comparable accuracy.


.. conda:package:: sherpas

   |downloads_sherpas| |docker_sherpas|

   :versions:
      
      

      ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install sherpas

to add into an existing workspace instead, run::

    pixi add sherpas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sherpas

Alternatively, to install into a new environment, run::

    conda create -n envname sherpas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sherpas:<tag>

(see `sherpas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sherpas| image:: https://img.shields.io/conda/dn/bioconda/sherpas.svg?style=flat
   :target: https://anaconda.org/bioconda/sherpas
   :alt:   (downloads)
.. |docker_sherpas| image:: https://quay.io/repository/biocontainers/sherpas/status
   :target: https://quay.io/repository/biocontainers/sherpas
.. _`sherpas/tags`: https://quay.io/repository/biocontainers/sherpas?tab=tags


.. raw:: html

    <script>
        var package = "sherpas";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sherpas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sherpas/README.html