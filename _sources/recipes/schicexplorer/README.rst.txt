:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schicexplorer'
.. highlight: bash

schicexplorer
=============

.. conda:recipe:: schicexplorer
   :replaces_section_title:
   :noindex:

   Set of programs to process\, analyze and visualize single\-cell Hi\-C data.

   :homepage: https://github.com/joachimwolff/scHiCExplorer
   :license: GPL3
   :recipe: /`schicexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schicexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schicexplorer/meta.yaml>`_

   


.. conda:package:: schicexplorer

   |downloads_schicexplorer| |docker_schicexplorer|

   :versions:
      
      

      ``7-0``,  ``6-0``,  ``5-0``,  ``4-0``,  ``3-0``,  ``2-0``,  ``1-0``

      

   
   :depends on cooler: ``>=0.8.10``
   :depends on hicexplorer: ``>=3.6``
   :depends on hicmatrix: ``>=15``
   :depends on holoviews: 
   :depends on hyperopt: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.18``
   :depends on python: ``>3``
   :depends on scikit-learn: ``>=0.22``
   :depends on scipy: ``>=1.4``
   :depends on sparse-neighbors-search: ``>=0.7``
   :depends on umap-learn: 

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

    pixi global install schicexplorer

to add into an existing workspace instead, run::

    pixi add schicexplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install schicexplorer

Alternatively, to install into a new environment, run::

    conda create -n envname schicexplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/schicexplorer:<tag>

(see `schicexplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_schicexplorer| image:: https://img.shields.io/conda/dn/bioconda/schicexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/schicexplorer
   :alt:   (downloads)
.. |docker_schicexplorer| image:: https://quay.io/repository/biocontainers/schicexplorer/status
   :target: https://quay.io/repository/biocontainers/schicexplorer
.. _`schicexplorer/tags`: https://quay.io/repository/biocontainers/schicexplorer?tab=tags


.. raw:: html

    <script>
        var package = "schicexplorer";
        var versions = ["7","6","5","4","3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schicexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schicexplorer/README.html