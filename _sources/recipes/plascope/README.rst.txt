:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plascope'
.. highlight: bash

plascope
========

.. conda:recipe:: plascope
   :replaces_section_title:
   :noindex:

   PlaScope is a targeted approach to assess the plasmidome of bacteria.

   :homepage: https://github.com/labgem/PlaScope
   :license: GPL / GPL (>=3)
   :recipe: /`plascope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plascope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plascope/meta.yaml>`_

   


.. conda:package:: plascope

   |downloads_plascope| |docker_plascope|

   :versions:
      
      

      ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends on centrifuge: ``1.0.3``
   :depends on spades: ``>=3.10.1``

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

    pixi global install plascope

to add into an existing workspace instead, run::

    pixi add plascope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plascope

Alternatively, to install into a new environment, run::

    conda create -n envname plascope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plascope:<tag>

(see `plascope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plascope| image:: https://img.shields.io/conda/dn/bioconda/plascope.svg?style=flat
   :target: https://anaconda.org/bioconda/plascope
   :alt:   (downloads)
.. |docker_plascope| image:: https://quay.io/repository/biocontainers/plascope/status
   :target: https://quay.io/repository/biocontainers/plascope
.. _`plascope/tags`: https://quay.io/repository/biocontainers/plascope?tab=tags


.. raw:: html

    <script>
        var package = "plascope";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plascope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plascope/README.html