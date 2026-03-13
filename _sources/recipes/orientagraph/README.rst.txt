:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orientagraph'
.. highlight: bash

orientagraph
============

.. conda:recipe:: orientagraph
   :replaces_section_title:
   :noindex:

   OrientAGraph enables Maximum Likelihood Network Orientation \(MNLO\)\, as a standalone routine or as a search heuristic within TreeMix\, a popular package for estimating admixture graphs from f\-statistics \(or related quantities\).

   :homepage: https://github.com/sriramlab/OrientAGraph
   :license: GPL / GPL3
   :recipe: /`orientagraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orientagraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orientagraph/meta.yaml>`_
   :links: biotools: :biotools:`orientagraph`, doi: :doi:`10.1101/2021.02.02.429467`

   


.. conda:package:: orientagraph

   |downloads_orientagraph| |docker_orientagraph|

   :versions:
      
      

      ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install orientagraph

to add into an existing workspace instead, run::

    pixi add orientagraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orientagraph

Alternatively, to install into a new environment, run::

    conda create -n envname orientagraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orientagraph:<tag>

(see `orientagraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orientagraph| image:: https://img.shields.io/conda/dn/bioconda/orientagraph.svg?style=flat
   :target: https://anaconda.org/bioconda/orientagraph
   :alt:   (downloads)
.. |docker_orientagraph| image:: https://quay.io/repository/biocontainers/orientagraph/status
   :target: https://quay.io/repository/biocontainers/orientagraph
.. _`orientagraph/tags`: https://quay.io/repository/biocontainers/orientagraph?tab=tags


.. raw:: html

    <script>
        var package = "orientagraph";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orientagraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orientagraph/README.html