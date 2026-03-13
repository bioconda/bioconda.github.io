:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'monopogen'
.. highlight: bash

monopogen
=========

.. conda:recipe:: monopogen
   :replaces_section_title:
   :noindex:

   Monopogen is an analysis package for SNV calling from single\-cell sequencing datasets generated from single cell RNA 10x 5\'\, 10x 3\'\, single ATAC\-seq technoloiges\, scDNA\-seq\, etc.

   :homepage: https://github.com/KChen-lab/Monopogen
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`monopogen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monopogen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monopogen/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01873-x`

   


.. conda:package:: monopogen

   |downloads_monopogen| |docker_monopogen|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.1.0-0``

      

   
   :depends on bcftools: 
   :depends on beagle: 
   :depends on numpy: ``>=1.19.5``
   :depends on openjdk: 
   :depends on pandas: ``>=1.2.3``
   :depends on pillow: ``>=8.2.0``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3.6``
   :depends on r-base: 
   :depends on r-data.table: 
   :depends on r-e1071: 
   :depends on r-ggplot2: 
   :depends on samtools: 
   :depends on scipy: ``>=1.6.3``
   :depends on tabix: 

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

    pixi global install monopogen

to add into an existing workspace instead, run::

    pixi add monopogen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install monopogen

Alternatively, to install into a new environment, run::

    conda create -n envname monopogen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/monopogen:<tag>

(see `monopogen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_monopogen| image:: https://img.shields.io/conda/dn/bioconda/monopogen.svg?style=flat
   :target: https://anaconda.org/bioconda/monopogen
   :alt:   (downloads)
.. |docker_monopogen| image:: https://quay.io/repository/biocontainers/monopogen/status
   :target: https://quay.io/repository/biocontainers/monopogen
.. _`monopogen/tags`: https://quay.io/repository/biocontainers/monopogen?tab=tags


.. raw:: html

    <script>
        var package = "monopogen";
        var versions = ["1.6.0","1.5.0","1.5.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/monopogen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/monopogen/README.html