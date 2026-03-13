:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmlong2-lite'
.. highlight: bash

mmlong2-lite
============

.. conda:recipe:: mmlong2-lite
   :replaces_section_title:
   :noindex:

   Lightweight workflow for microbial genome recovery using either Nanopore or PacBio HiFi reads

   :homepage: https://github.com/Serka-M/mmlong2-lite
   :license: GPL-3.0-only
   :recipe: /`mmlong2-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmlong2-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmlong2-lite/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.15782630`

   


.. conda:package:: mmlong2-lite

   |downloads_mmlong2-lite| |docker_mmlong2-lite|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on pigz: 
   :depends on pv: 
   :depends on rsync: 
   :depends on singularity: ``3.8.6.*``
   :depends on snakemake: ``9.9.0.*``
   :depends on tar: 
   :depends on zenodo_get: 

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

    pixi global install mmlong2-lite

to add into an existing workspace instead, run::

    pixi add mmlong2-lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mmlong2-lite

Alternatively, to install into a new environment, run::

    conda create -n envname mmlong2-lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mmlong2-lite:<tag>

(see `mmlong2-lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mmlong2-lite| image:: https://img.shields.io/conda/dn/bioconda/mmlong2-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/mmlong2-lite
   :alt:   (downloads)
.. |docker_mmlong2-lite| image:: https://quay.io/repository/biocontainers/mmlong2-lite/status
   :target: https://quay.io/repository/biocontainers/mmlong2-lite
.. _`mmlong2-lite/tags`: https://quay.io/repository/biocontainers/mmlong2-lite?tab=tags


.. raw:: html

    <script>
        var package = "mmlong2-lite";
        var versions = ["1.2.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmlong2-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmlong2-lite/README.html