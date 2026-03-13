:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'footprint'
.. highlight: bash

footprint
=========

.. conda:recipe:: footprint
   :replaces_section_title:
   :noindex:

   This is a pipeline to find transcription factor footprints in ATAC\-seq or DNase\-seq data.

   :homepage: https://ohlerlab.mdc-berlin.de/software/Reproducible_footprinting_139/
   :license: GPL-2.0-or-later
   :recipe: /`footprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/footprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/footprint/meta.yaml>`_

   


.. conda:package:: footprint

   |downloads_footprint| |docker_footprint|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bedtools: ``2.17.0``
   :depends on bioconductor-genomicranges: 
   :depends on gawk: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on r-base: ``>=4.1,<4.2.0a0``
   :depends on r-gtools: 
   :depends on r-mixtools: 
   :depends on r-segmented: 
   :depends on samtools: ``1.1``

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

    pixi global install footprint

to add into an existing workspace instead, run::

    pixi add footprint

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install footprint

Alternatively, to install into a new environment, run::

    conda create -n envname footprint

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/footprint:<tag>

(see `footprint/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_footprint| image:: https://img.shields.io/conda/dn/bioconda/footprint.svg?style=flat
   :target: https://anaconda.org/bioconda/footprint
   :alt:   (downloads)
.. |docker_footprint| image:: https://quay.io/repository/biocontainers/footprint/status
   :target: https://quay.io/repository/biocontainers/footprint
.. _`footprint/tags`: https://quay.io/repository/biocontainers/footprint?tab=tags


.. raw:: html

    <script>
        var package = "footprint";
        var versions = ["1.0.1","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/footprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/footprint/README.html