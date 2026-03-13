:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogen-embed'
.. highlight: bash

pathogen-embed
==============

.. conda:recipe:: pathogen-embed
   :replaces_section_title:
   :noindex:

   Create reduced dimension embeddings for pathogen sequences

   :homepage: https://github.com/blab/pathogen-embed
   :license: MIT / MIT
   :recipe: /`pathogen-embed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-embed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-embed/meta.yaml>`_

   


.. conda:package:: pathogen-embed

   |downloads_pathogen-embed| |docker_pathogen-embed|

   :versions:
      
      

      ``3.1.0-0``,  ``3.0.0-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``

      

   
   :depends on biopython: ``>=1.83,<2``
   :depends on hdbscan: ``>=0.8.36,<0.9.0``
   :depends on matplotlib-base: ``>=3,<4``
   :depends on numba: ``<0.59.0``
   :depends on numpy: ``>=1.24.4,<2``
   :depends on pandas: ``>=1.2.0,<2``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``>=1.3,<1.5``
   :depends on umap-learn: ``>=0.5.0,<0.6.0``

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

    pixi global install pathogen-embed

to add into an existing workspace instead, run::

    pixi add pathogen-embed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathogen-embed

Alternatively, to install into a new environment, run::

    conda create -n envname pathogen-embed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathogen-embed:<tag>

(see `pathogen-embed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathogen-embed| image:: https://img.shields.io/conda/dn/bioconda/pathogen-embed.svg?style=flat
   :target: https://anaconda.org/bioconda/pathogen-embed
   :alt:   (downloads)
.. |docker_pathogen-embed| image:: https://quay.io/repository/biocontainers/pathogen-embed/status
   :target: https://quay.io/repository/biocontainers/pathogen-embed
.. _`pathogen-embed/tags`: https://quay.io/repository/biocontainers/pathogen-embed?tab=tags


.. raw:: html

    <script>
        var package = "pathogen-embed";
        var versions = ["3.1.0","3.0.0","2.3.0","2.2.1","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogen-embed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogen-embed/README.html