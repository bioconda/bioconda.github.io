:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mindagap'
.. highlight: bash

mindagap
========

.. conda:recipe:: mindagap
   :replaces_section_title:
   :noindex:

   Takes a single panorama image and fills the empty grid lines with neighbour\-weighted values.

   :homepage: https://github.com/ViriatoII/MindaGap
   :documentation: https://github.com/ViriatoII/MindaGap/blob/main/README.md
   
   :license: BSD 3-Clause License
   :recipe: /`mindagap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mindagap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mindagap/meta.yaml>`_

   


.. conda:package:: mindagap

   |downloads_mindagap| |docker_mindagap|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends on libopencv: 
   :depends on matplotlib-base: 
   :depends on mesa-libgl-cos7-x86_64: 
   :depends on numpy: 
   :depends on opencv: 
   :depends on pandas: 
   :depends on procps-ng: 
   :depends on py-opencv: 
   :depends on python: ``3.9.13``
   :depends on rich: 
   :depends on scipy: 
   :depends on tifffile: 

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

    pixi global install mindagap

to add into an existing workspace instead, run::

    pixi add mindagap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mindagap

Alternatively, to install into a new environment, run::

    conda create -n envname mindagap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mindagap:<tag>

(see `mindagap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mindagap| image:: https://img.shields.io/conda/dn/bioconda/mindagap.svg?style=flat
   :target: https://anaconda.org/bioconda/mindagap
   :alt:   (downloads)
.. |docker_mindagap| image:: https://quay.io/repository/biocontainers/mindagap/status
   :target: https://quay.io/repository/biocontainers/mindagap
.. _`mindagap/tags`: https://quay.io/repository/biocontainers/mindagap?tab=tags


.. raw:: html

    <script>
        var package = "mindagap";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mindagap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mindagap/README.html