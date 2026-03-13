:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmar'
.. highlight: bash

plasmar
=======

.. conda:recipe:: plasmar
   :replaces_section_title:
   :noindex:

   Plasmid Like Assembly Sequence Matching Algorithm for Resistance \(PLASMAR\)

   :homepage: https://https://github.com/rastanton/PLASMAR
   :license: APACHE / Apache License 2.0
   :recipe: /`plasmar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmar/meta.yaml>`_

   


.. conda:package:: plasmar

   |downloads_plasmar| |docker_plasmar|

   :versions:
      
      

      ``1.5-0``,  ``1.4-0``

      

   
   :depends on entrez-direct: 
   :depends on gamma: 
   :depends on matplotlib-base: ``3.10.6.*``
   :depends on numpy: ``>=1.25``
   :depends on python: ``>=3.11``
   :depends on scikit-learn: ``1.6.1.*``

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

    pixi global install plasmar

to add into an existing workspace instead, run::

    pixi add plasmar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plasmar

Alternatively, to install into a new environment, run::

    conda create -n envname plasmar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plasmar:<tag>

(see `plasmar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plasmar| image:: https://img.shields.io/conda/dn/bioconda/plasmar.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmar
   :alt:   (downloads)
.. |docker_plasmar| image:: https://quay.io/repository/biocontainers/plasmar/status
   :target: https://quay.io/repository/biocontainers/plasmar
.. _`plasmar/tags`: https://quay.io/repository/biocontainers/plasmar?tab=tags


.. raw:: html

    <script>
        var package = "plasmar";
        var versions = ["1.5","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmar/README.html