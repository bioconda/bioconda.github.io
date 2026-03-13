:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mags-visualization'
.. highlight: bash

mags-visualization
==================

.. conda:recipe:: mags-visualization
   :replaces_section_title:
   :noindex:

   Visualization toolkit for MAG quality\, taxonomy\, clustering\, and annotation.

   :homepage: https://github.com/alexandrah1704/MAGs-visualization
   :license: GPL3 / GPL-3.0
   :recipe: /`mags-visualization <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mags-visualization>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mags-visualization/meta.yaml>`_

   


.. conda:package:: mags-visualization

   |downloads_mags-visualization| |docker_mags-visualization|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: ``>=3.9,<3.13``
   :depends on seaborn: 

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

    pixi global install mags-visualization

to add into an existing workspace instead, run::

    pixi add mags-visualization

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mags-visualization

Alternatively, to install into a new environment, run::

    conda create -n envname mags-visualization

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mags-visualization:<tag>

(see `mags-visualization/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mags-visualization| image:: https://img.shields.io/conda/dn/bioconda/mags-visualization.svg?style=flat
   :target: https://anaconda.org/bioconda/mags-visualization
   :alt:   (downloads)
.. |docker_mags-visualization| image:: https://quay.io/repository/biocontainers/mags-visualization/status
   :target: https://quay.io/repository/biocontainers/mags-visualization
.. _`mags-visualization/tags`: https://quay.io/repository/biocontainers/mags-visualization?tab=tags


.. raw:: html

    <script>
        var package = "mags-visualization";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mags-visualization/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mags-visualization/README.html