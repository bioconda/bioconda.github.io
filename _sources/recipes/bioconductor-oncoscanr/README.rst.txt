:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oncoscanr'
.. highlight: bash

bioconductor-oncoscanr
======================

.. conda:recipe:: bioconductor-oncoscanr
   :replaces_section_title:
   :noindex:

   Secondary analyses of CNV data \(HRD and more\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/oncoscanR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-oncoscanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncoscanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncoscanr/meta.yaml>`_

   The software uses the copy number segments from a text file and identifies all chromosome arms that are globally altered and computes various genome\-wide scores. The following HRD scores \(characteristic of BRCA\-mutated cancers\) are included\: LST\, HR\-LOH\, nLST and gLOH. the package is tailored for the ThermoFisher Oncoscan assay analyzed with their Chromosome Alteration Suite \(ChAS\) but can be adapted to any input.


.. conda:package:: bioconductor-oncoscanr

   |downloads_bioconductor-oncoscanr| |docker_bioconductor-oncoscanr|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-magrittr: 
   :depends on r-readr: 

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

    pixi global install bioconductor-oncoscanr

to add into an existing workspace instead, run::

    pixi add bioconductor-oncoscanr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-oncoscanr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-oncoscanr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-oncoscanr:<tag>

(see `bioconductor-oncoscanr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-oncoscanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oncoscanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oncoscanr
   :alt:   (downloads)
.. |docker_bioconductor-oncoscanr| image:: https://quay.io/repository/biocontainers/bioconductor-oncoscanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oncoscanr
.. _`bioconductor-oncoscanr/tags`: https://quay.io/repository/biocontainers/bioconductor-oncoscanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oncoscanr";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oncoscanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oncoscanr/README.html