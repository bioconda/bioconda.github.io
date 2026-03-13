:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arborist'
.. highlight: bash

arborist
========

.. conda:recipe:: arborist
   :replaces_section_title:
   :noindex:

   Arborist is a tool to rank SNV phylogenies inferred from bulk DNA sequencing via scDNA\-seq data

   :homepage: https://github.com/VanLoo-lab/Arborist
   :license: BSD-3-Clause
   :recipe: /`arborist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arborist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arborist/meta.yaml>`_

   


.. conda:package:: arborist

   |downloads_arborist| |docker_arborist|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on networkx: ``>=3.6``
   :depends on numba: ``>=0.61,<0.62``
   :depends on numpy: ``>=1.26``
   :depends on pandas: ``>=1.3,<3.0``
   :depends on pygraphviz: 
   :depends on python: ``>=3.7``
   :depends on scipy: ``>=1.7``

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

    pixi global install arborist

to add into an existing workspace instead, run::

    pixi add arborist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arborist

Alternatively, to install into a new environment, run::

    conda create -n envname arborist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arborist:<tag>

(see `arborist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arborist| image:: https://img.shields.io/conda/dn/bioconda/arborist.svg?style=flat
   :target: https://anaconda.org/bioconda/arborist
   :alt:   (downloads)
.. |docker_arborist| image:: https://quay.io/repository/biocontainers/arborist/status
   :target: https://quay.io/repository/biocontainers/arborist
.. _`arborist/tags`: https://quay.io/repository/biocontainers/arborist?tab=tags


.. raw:: html

    <script>
        var package = "arborist";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arborist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arborist/README.html