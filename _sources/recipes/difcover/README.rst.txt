:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'difcover'
.. highlight: bash

difcover
========

.. conda:recipe:: difcover
   :replaces_section_title:
   :noindex:

   Pipeline to identify genomic regions with read coverage differences between pairs of samples

   :homepage: https://github.com/timnat/DifCover
   :license: MIT
   :recipe: /`difcover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/difcover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/difcover/meta.yaml>`_

   


.. conda:package:: difcover

   |downloads_difcover| |docker_difcover|

   :versions:
      
      

      ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``

      

   
   :depends on bedtools: 
   :depends on bioconductor-dnacopy: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on samtools: 

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

    pixi global install difcover

to add into an existing workspace instead, run::

    pixi add difcover

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install difcover

Alternatively, to install into a new environment, run::

    conda create -n envname difcover

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/difcover:<tag>

(see `difcover/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_difcover| image:: https://img.shields.io/conda/dn/bioconda/difcover.svg?style=flat
   :target: https://anaconda.org/bioconda/difcover
   :alt:   (downloads)
.. |docker_difcover| image:: https://quay.io/repository/biocontainers/difcover/status
   :target: https://quay.io/repository/biocontainers/difcover
.. _`difcover/tags`: https://quay.io/repository/biocontainers/difcover?tab=tags


.. raw:: html

    <script>
        var package = "difcover";
        var versions = ["3.0.1","3.0.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/difcover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/difcover/README.html