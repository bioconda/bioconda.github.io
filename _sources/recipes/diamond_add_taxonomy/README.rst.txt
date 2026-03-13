:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diamond_add_taxonomy'
.. highlight: bash

diamond_add_taxonomy
====================

.. conda:recipe:: diamond_add_taxonomy
   :replaces_section_title:
   :noindex:

   Utility to work with NCBI taxonomy database including tool to annotate DIAMOND results with taxonomy lineage

   :homepage: https://github.com/pvanheus/diamond_add_taxonomy
   :license: MIT
   :recipe: /`diamond_add_taxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamond_add_taxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamond_add_taxonomy/meta.yaml>`_

   


.. conda:package:: diamond_add_taxonomy

   |downloads_diamond_add_taxonomy| |docker_diamond_add_taxonomy|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends on click: 
   :depends on ete3: 
   :depends on python: ``<=3.10``

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

    pixi global install diamond_add_taxonomy

to add into an existing workspace instead, run::

    pixi add diamond_add_taxonomy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install diamond_add_taxonomy

Alternatively, to install into a new environment, run::

    conda create -n envname diamond_add_taxonomy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/diamond_add_taxonomy:<tag>

(see `diamond_add_taxonomy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_diamond_add_taxonomy| image:: https://img.shields.io/conda/dn/bioconda/diamond_add_taxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/diamond_add_taxonomy
   :alt:   (downloads)
.. |docker_diamond_add_taxonomy| image:: https://quay.io/repository/biocontainers/diamond_add_taxonomy/status
   :target: https://quay.io/repository/biocontainers/diamond_add_taxonomy
.. _`diamond_add_taxonomy/tags`: https://quay.io/repository/biocontainers/diamond_add_taxonomy?tab=tags


.. raw:: html

    <script>
        var package = "diamond_add_taxonomy";
        var versions = ["0.1.2","0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diamond_add_taxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diamond_add_taxonomy/README.html