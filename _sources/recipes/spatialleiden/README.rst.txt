:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spatialleiden'
.. highlight: bash

spatialleiden
=============

.. conda:recipe:: spatialleiden
   :replaces_section_title:
   :noindex:

   Implementation of multiplex Leiden for analysis of spatial omics data.

   :homepage: https://github.com/HiDiHlabs/SpatialLeiden
   :documentation: https://spatialleiden.readthedocs.io/
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`spatialleiden <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spatialleiden>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spatialleiden/meta.yaml>`_

   


.. conda:package:: spatialleiden

   |downloads_spatialleiden| |docker_spatialleiden|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends on anndata: 
   :depends on igraph: 
   :depends on leidenalg: ``>=0.10.2,<0.11.dev0``
   :depends on numpy: ``>=1.21``
   :depends on python: ``>=3.10``
   :depends on scanpy: 
   :depends on scipy: ``>=1.9``

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

    pixi global install spatialleiden

to add into an existing workspace instead, run::

    pixi add spatialleiden

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spatialleiden

Alternatively, to install into a new environment, run::

    conda create -n envname spatialleiden

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spatialleiden:<tag>

(see `spatialleiden/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spatialleiden| image:: https://img.shields.io/conda/dn/bioconda/spatialleiden.svg?style=flat
   :target: https://anaconda.org/bioconda/spatialleiden
   :alt:   (downloads)
.. |docker_spatialleiden| image:: https://quay.io/repository/biocontainers/spatialleiden/status
   :target: https://quay.io/repository/biocontainers/spatialleiden
.. _`spatialleiden/tags`: https://quay.io/repository/biocontainers/spatialleiden?tab=tags


.. raw:: html

    <script>
        var package = "spatialleiden";
        var versions = ["0.4.0","0.3.0","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spatialleiden/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spatialleiden/README.html