:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microscape'
.. highlight: bash

microscape
==========

.. conda:recipe:: microscape
   :replaces_section_title:
   :noindex:

   Downstream analysis tools for amplicon sequencing — filtering\, ordination\, phylogeny\, networks

   :homepage: https://github.com/rec3141/microscape
   :license: BSD-3-Clause
   :recipe: /`microscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microscape/meta.yaml>`_

   microscape provides downstream analysis tools for amplicon sequencing data\,
   designed to work with papa2\'s output. Includes sequence table QC filtering\,
   MIMARKS metadata loading\, taxonomic renormalization\, phylogenetic tree
   construction \(MAFFT \+ NJ\)\, Bray\-Curtis ordination \(t\-SNE\/PCA\)\, SparCC\-style
   correlation networks\, and JSON export for visualization.



.. conda:package:: microscape

   |downloads_microscape| |docker_microscape|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.9``
   :depends on scikit-learn: 
   :depends on scipy: 

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

    pixi global install microscape

to add into an existing workspace instead, run::

    pixi add microscape

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install microscape

Alternatively, to install into a new environment, run::

    conda create -n envname microscape

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/microscape:<tag>

(see `microscape/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_microscape| image:: https://img.shields.io/conda/dn/bioconda/microscape.svg?style=flat
   :target: https://anaconda.org/bioconda/microscape
   :alt:   (downloads)
.. |docker_microscape| image:: https://quay.io/repository/biocontainers/microscape/status
   :target: https://quay.io/repository/biocontainers/microscape
.. _`microscape/tags`: https://quay.io/repository/biocontainers/microscape?tab=tags


.. raw:: html

    <script>
        var package = "microscape";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microscape/README.html