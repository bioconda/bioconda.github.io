:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shigatyper'
.. highlight: bash

shigatyper
==========

.. conda:recipe:: shigatyper
   :replaces_section_title:
   :noindex:

   Typing tool for Shigella spp. from WGS Illumina sequencing

   :homepage: https://github.com/CFSAN-Biostatistics/shigatyper
   :license: Public Domain / Public Domain
   :recipe: /`shigatyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigatyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigatyper/meta.yaml>`_

   


.. conda:package:: shigatyper

   |downloads_shigatyper| |docker_shigatyper|

   :versions:
      
      

      ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-3``

      

   
   :depends on bcftools: ``>=1.9``
   :depends on minimap2: ``>=2.16``
   :depends on pandas: ``>=0.24.2``
   :depends on python: ``>=3.7``
   :depends on samtools: ``>=1.9``

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

    pixi global install shigatyper

to add into an existing workspace instead, run::

    pixi add shigatyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shigatyper

Alternatively, to install into a new environment, run::

    conda create -n envname shigatyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shigatyper:<tag>

(see `shigatyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shigatyper| image:: https://img.shields.io/conda/dn/bioconda/shigatyper.svg?style=flat
   :target: https://anaconda.org/bioconda/shigatyper
   :alt:   (downloads)
.. |docker_shigatyper| image:: https://quay.io/repository/biocontainers/shigatyper/status
   :target: https://quay.io/repository/biocontainers/shigatyper
.. _`shigatyper/tags`: https://quay.io/repository/biocontainers/shigatyper?tab=tags


.. raw:: html

    <script>
        var package = "shigatyper";
        var versions = ["2.0.5","2.0.4","2.0.3","2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shigatyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shigatyper/README.html