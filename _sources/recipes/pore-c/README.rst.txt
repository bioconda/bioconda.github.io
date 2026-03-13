:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pore-c'
.. highlight: bash

pore-c
======

.. conda:recipe:: pore-c
   :replaces_section_title:
   :noindex:

   Toolkit for processing Pore\-C concatemers

   :homepage: https://github.com/nanoporetech/pore-c
   :license: OTHER / Mozilla Public License 2.0
   :recipe: /`pore-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pore-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pore-c/meta.yaml>`_

   


.. conda:package:: pore-c

   |downloads_pore-c| |docker_pore-c|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``

      

   
   :depends on biopython: ``1.77``
   :depends on click: ``>=7.0.0,<8.0``
   :depends on cooler: ``0.8.*,>=0.8.5``
   :depends on dask: ``2.*,>=2.0.0``
   :depends on distributed: ``2.*,>=2.9.3``
   :depends on intake: 
   :depends on intake-parquet: 
   :depends on ncls: 
   :depends on networkx: ``2.*,>=2.4.0``
   :depends on numpy: ``<1.20.0``
   :depends on pairtools: 
   :depends on pandas: ``>=1.0.5``
   :depends on pyarrow: ``1.*,>=1.0.0``
   :depends on pydantic: ``1.6.1``
   :depends on pyranges: ``0.0.71``
   :depends on pysam: 
   :depends on python: 
   :depends on streamz: ``0.*,>=0.5.2``
   :depends on tqdm: 

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

    pixi global install pore-c

to add into an existing workspace instead, run::

    pixi add pore-c

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pore-c

Alternatively, to install into a new environment, run::

    conda create -n envname pore-c

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pore-c:<tag>

(see `pore-c/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pore-c| image:: https://img.shields.io/conda/dn/bioconda/pore-c.svg?style=flat
   :target: https://anaconda.org/bioconda/pore-c
   :alt:   (downloads)
.. |docker_pore-c| image:: https://quay.io/repository/biocontainers/pore-c/status
   :target: https://quay.io/repository/biocontainers/pore-c
.. _`pore-c/tags`: https://quay.io/repository/biocontainers/pore-c?tab=tags


.. raw:: html

    <script>
        var package = "pore-c";
        var versions = ["0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pore-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pore-c/README.html