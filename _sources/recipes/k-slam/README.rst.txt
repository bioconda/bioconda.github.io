:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'k-slam'
.. highlight: bash

k-slam
======

.. conda:recipe:: k-slam
   :replaces_section_title:
   :noindex:

   k\-SLAM is a program for alignment based metagenomic analysis of large sets of high\-throughput sequence data.

   :homepage: https://github.com/aindj/k-SLAM
   :license: GPL-3.0
   :recipe: /`k-slam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k-slam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k-slam/meta.yaml>`_

   


.. conda:package:: k-slam

   |downloads_k-slam| |docker_k-slam|

   :versions:
      
      

      ``1.0-1``

      

   
   :depends on boost: ``1.64*``
   :depends on libgcc: 

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

    pixi global install k-slam

to add into an existing workspace instead, run::

    pixi add k-slam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install k-slam

Alternatively, to install into a new environment, run::

    conda create -n envname k-slam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/k-slam:<tag>

(see `k-slam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_k-slam| image:: https://img.shields.io/conda/dn/bioconda/k-slam.svg?style=flat
   :target: https://anaconda.org/bioconda/k-slam
   :alt:   (downloads)
.. |docker_k-slam| image:: https://quay.io/repository/biocontainers/k-slam/status
   :target: https://quay.io/repository/biocontainers/k-slam
.. _`k-slam/tags`: https://quay.io/repository/biocontainers/k-slam?tab=tags


.. raw:: html

    <script>
        var package = "k-slam";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/k-slam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/k-slam/README.html