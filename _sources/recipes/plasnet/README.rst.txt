:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasnet'
.. highlight: bash

plasnet
=======

.. conda:recipe:: plasnet
   :replaces_section_title:
   :noindex:

   Clustering\, visualising and exploring plasmid networks

   :homepage: https://github.com/leoisl/plasnet
   :license: MIT / MIT
   :recipe: /`plasnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasnet/meta.yaml>`_

   


.. conda:package:: plasnet

   |downloads_plasnet| |docker_plasnet|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``

      

   
   :depends on click: ``>=8.1.7,<9``
   :depends on networkx: ``>=3.2,<4``
   :depends on pandas: ``>=2.1.2,<3``
   :depends on python: ``>=3.9,<3.13``

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

    pixi global install plasnet

to add into an existing workspace instead, run::

    pixi add plasnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plasnet

Alternatively, to install into a new environment, run::

    conda create -n envname plasnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plasnet:<tag>

(see `plasnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plasnet| image:: https://img.shields.io/conda/dn/bioconda/plasnet.svg?style=flat
   :target: https://anaconda.org/bioconda/plasnet
   :alt:   (downloads)
.. |docker_plasnet| image:: https://quay.io/repository/biocontainers/plasnet/status
   :target: https://quay.io/repository/biocontainers/plasnet
.. _`plasnet/tags`: https://quay.io/repository/biocontainers/plasnet?tab=tags


.. raw:: html

    <script>
        var package = "plasnet";
        var versions = ["0.7.0","0.6.0","0.6.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasnet/README.html