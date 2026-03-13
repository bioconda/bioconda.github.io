:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hops'
.. highlight: bash

hops
====

.. conda:recipe:: hops
   :replaces_section_title:
   :noindex:

   Java tool to work with ancient metagenomics

   :homepage: https://github.com/rhuebler/HOPS/
   :license: GPL >=3
   :recipe: /`hops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hops/meta.yaml>`_

   


.. conda:package:: hops

   |downloads_hops| |docker_hops|

   :versions:
      
      

      ``0.35-2``,  ``0.35-1``,  ``0.35-0``,  ``0.34-0``,  ``0.33-2``,  ``0.33-1``,  ``0.33-0``,  ``0.31-1``,  ``0.31-0``

      

   
   :depends on malt: 
   :depends on openjdk: 
   :depends on python: 
   :depends on r-base: ``>=3.5``
   :depends on r-doparallel: 
   :depends on r-getopt: 
   :depends on r-gridbase: 
   :depends on r-gridextra: 
   :depends on r-jsonlite: 

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

    pixi global install hops

to add into an existing workspace instead, run::

    pixi add hops

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hops

Alternatively, to install into a new environment, run::

    conda create -n envname hops

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hops:<tag>

(see `hops/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hops| image:: https://img.shields.io/conda/dn/bioconda/hops.svg?style=flat
   :target: https://anaconda.org/bioconda/hops
   :alt:   (downloads)
.. |docker_hops| image:: https://quay.io/repository/biocontainers/hops/status
   :target: https://quay.io/repository/biocontainers/hops
.. _`hops/tags`: https://quay.io/repository/biocontainers/hops?tab=tags


.. raw:: html

    <script>
        var package = "hops";
        var versions = ["0.35","0.35","0.35","0.34","0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hops/README.html