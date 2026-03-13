:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnahybrid'
.. highlight: bash

rnahybrid
=========

.. conda:recipe:: rnahybrid
   :replaces_section_title:
   :noindex:

   RNAhybrid is a tool for finding the minimum free energy hybridization of a long and a short RNA.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rnahybrid
   :license: GPL / GPL-2
   :recipe: /`rnahybrid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnahybrid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnahybrid/meta.yaml>`_
   :links: doi: :doi:`10.1261/rna.5248604`

   


.. conda:package:: rnahybrid

   |downloads_rnahybrid| |docker_rnahybrid|

   :versions:
      
      

      ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libgd: ``>=2.3.3,<2.4.0a0``

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

    pixi global install rnahybrid

to add into an existing workspace instead, run::

    pixi add rnahybrid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnahybrid

Alternatively, to install into a new environment, run::

    conda create -n envname rnahybrid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnahybrid:<tag>

(see `rnahybrid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnahybrid| image:: https://img.shields.io/conda/dn/bioconda/rnahybrid.svg?style=flat
   :target: https://anaconda.org/bioconda/rnahybrid
   :alt:   (downloads)
.. |docker_rnahybrid| image:: https://quay.io/repository/biocontainers/rnahybrid/status
   :target: https://quay.io/repository/biocontainers/rnahybrid
.. _`rnahybrid/tags`: https://quay.io/repository/biocontainers/rnahybrid?tab=tags


.. raw:: html

    <script>
        var package = "rnahybrid";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnahybrid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnahybrid/README.html