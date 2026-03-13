:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phastcons35way.ucsc.mm39'
.. highlight: bash

bioconductor-phastcons35way.ucsc.mm39
=====================================

.. conda:recipe:: bioconductor-phastcons35way.ucsc.mm39
   :replaces_section_title:
   :noindex:

   UCSC phastCons mm39 conservation scores AnnotationHub Resource Metadata

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/phastCons35way.UCSC.mm39.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-phastcons35way.ucsc.mm39 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons35way.ucsc.mm39>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons35way.ucsc.mm39/meta.yaml>`_

   Store UCSC phastCons mm39 conservation scores AnnotationHub Resource Metadata. Provide provenance and citation information for UCSC phastCons mm39 conservation score AnnotationHub resources. Illustrate in a vignette how to access those resources.


.. conda:package:: bioconductor-phastcons35way.ucsc.mm39

   |downloads_bioconductor-phastcons35way.ucsc.mm39| |docker_bioconductor-phastcons35way.ucsc.mm39|

   :versions:
      
      

      ``3.16.0-4``,  ``3.16.0-3``,  ``3.16.0-2``,  ``3.16.0-1``,  ``3.16.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-genomicscores: ``>=2.22.0,<2.23.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-phastcons35way.ucsc.mm39

to add into an existing workspace instead, run::

    pixi add bioconductor-phastcons35way.ucsc.mm39

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-phastcons35way.ucsc.mm39

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-phastcons35way.ucsc.mm39

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-phastcons35way.ucsc.mm39:<tag>

(see `bioconductor-phastcons35way.ucsc.mm39/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-phastcons35way.ucsc.mm39| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phastcons35way.ucsc.mm39.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phastcons35way.ucsc.mm39
   :alt:   (downloads)
.. |docker_bioconductor-phastcons35way.ucsc.mm39| image:: https://quay.io/repository/biocontainers/bioconductor-phastcons35way.ucsc.mm39/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phastcons35way.ucsc.mm39
.. _`bioconductor-phastcons35way.ucsc.mm39/tags`: https://quay.io/repository/biocontainers/bioconductor-phastcons35way.ucsc.mm39?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phastcons35way.ucsc.mm39";
        var versions = ["3.16.0","3.16.0","3.16.0","3.16.0","3.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phastcons35way.ucsc.mm39/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phastcons35way.ucsc.mm39/README.html