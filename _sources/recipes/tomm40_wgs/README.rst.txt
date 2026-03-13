:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tomm40_wgs'
.. highlight: bash

tomm40_wgs
==========

.. conda:recipe:: tomm40_wgs
   :replaces_section_title:
   :noindex:

   TOMM40\_WGS\: Genotyping TOMM40’523 Poly\-T Polymorphisms Using Whole\-Genome Sequencing.

   :homepage: https://github.com/RushAlz/TOMM40_WGS
   :license: GPL / GPL-2.0-or-later
   :recipe: /`tomm40_wgs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tomm40_wgs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tomm40_wgs/meta.yaml>`_

   


.. conda:package:: tomm40_wgs

   |downloads_tomm40_wgs| |docker_tomm40_wgs|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.0.1-0``

      

   
   :depends on bash: ``5.2.21.*``
   :depends on pandas: ``2.2.3.*``
   :depends on samtools: ``1.21.*``
   :depends on snakemake-minimal: ``9.3.0.*``

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

    pixi global install tomm40_wgs

to add into an existing workspace instead, run::

    pixi add tomm40_wgs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tomm40_wgs

Alternatively, to install into a new environment, run::

    conda create -n envname tomm40_wgs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tomm40_wgs:<tag>

(see `tomm40_wgs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tomm40_wgs| image:: https://img.shields.io/conda/dn/bioconda/tomm40_wgs.svg?style=flat
   :target: https://anaconda.org/bioconda/tomm40_wgs
   :alt:   (downloads)
.. |docker_tomm40_wgs| image:: https://quay.io/repository/biocontainers/tomm40_wgs/status
   :target: https://quay.io/repository/biocontainers/tomm40_wgs
.. _`tomm40_wgs/tags`: https://quay.io/repository/biocontainers/tomm40_wgs?tab=tags


.. raw:: html

    <script>
        var package = "tomm40_wgs";
        var versions = ["1.0.1","1.0.0","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tomm40_wgs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tomm40_wgs/README.html