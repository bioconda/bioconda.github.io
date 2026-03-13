:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'julia-divand'
.. highlight: bash

julia-divand
============

.. conda:recipe:: julia-divand
   :replaces_section_title:
   :noindex:

   Performs an n\-dimensional variational analysis\/gridding of arbitrarily located observations

   :homepage: https://github.com/gher-uliege/DIVAnd.jl
   :license: GPL2
   :recipe: /`julia-divand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/julia-divand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/julia-divand/meta.yaml>`_

   


.. conda:package:: julia-divand

   |downloads_julia-divand| |docker_julia-divand|

   :versions:
      
      

      ``2.7.9-0``

      

   
   :depends on julia: ``>=1.8``

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

    pixi global install julia-divand

to add into an existing workspace instead, run::

    pixi add julia-divand

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install julia-divand

Alternatively, to install into a new environment, run::

    conda create -n envname julia-divand

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/julia-divand:<tag>

(see `julia-divand/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_julia-divand| image:: https://img.shields.io/conda/dn/bioconda/julia-divand.svg?style=flat
   :target: https://anaconda.org/bioconda/julia-divand
   :alt:   (downloads)
.. |docker_julia-divand| image:: https://quay.io/repository/biocontainers/julia-divand/status
   :target: https://quay.io/repository/biocontainers/julia-divand
.. _`julia-divand/tags`: https://quay.io/repository/biocontainers/julia-divand?tab=tags


.. raw:: html

    <script>
        var package = "julia-divand";
        var versions = ["2.7.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/julia-divand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/julia-divand/README.html