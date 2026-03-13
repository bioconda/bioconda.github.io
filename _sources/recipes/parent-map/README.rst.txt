:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parent-map'
.. highlight: bash

parent-map
==========

.. conda:recipe:: parent-map
   :replaces_section_title:
   :noindex:

   Analyze parental contributions to evolved or engineered protein or DNA sequences

   :homepage: https://github.com/damienmarsic/parent-map
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`parent-map <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parent-map>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parent-map/meta.yaml>`_

   


.. conda:package:: parent-map

   |downloads_parent-map| |docker_parent-map|

   :versions:
      
      

      ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.2-0``

      

   
   :depends on gooey: 
   :depends on pandas: 
   :depends on python: ``>=3``

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

    pixi global install parent-map

to add into an existing workspace instead, run::

    pixi add parent-map

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parent-map

Alternatively, to install into a new environment, run::

    conda create -n envname parent-map

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parent-map:<tag>

(see `parent-map/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parent-map| image:: https://img.shields.io/conda/dn/bioconda/parent-map.svg?style=flat
   :target: https://anaconda.org/bioconda/parent-map
   :alt:   (downloads)
.. |docker_parent-map| image:: https://quay.io/repository/biocontainers/parent-map/status
   :target: https://quay.io/repository/biocontainers/parent-map
.. _`parent-map/tags`: https://quay.io/repository/biocontainers/parent-map?tab=tags


.. raw:: html

    <script>
        var package = "parent-map";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parent-map/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parent-map/README.html