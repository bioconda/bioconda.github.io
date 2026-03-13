:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alphamissense.v2023.hg19'
.. highlight: bash

bioconductor-alphamissense.v2023.hg19
=====================================

.. conda:recipe:: bioconductor-alphamissense.v2023.hg19
   :replaces_section_title:
   :noindex:

   AlphaMissense v2023 Pathogenicity Scores AnnotationHub Resource Metadata for hg19

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/AlphaMissense.v2023.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-alphamissense.v2023.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphamissense.v2023.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphamissense.v2023.hg19/meta.yaml>`_

   Store Google DeepMind AlphaMissense v2023 hg19 pathogenicity scores AnnotationHub Resource Metadata. Provide provenance and citation information for Google DeepMind AlphaMissense v2023 hg19 pathogenicity score AnnotationHub resources. Illustrate in a vignette how to access those resources.


.. conda:package:: bioconductor-alphamissense.v2023.hg19

   |downloads_bioconductor-alphamissense.v2023.hg19| |docker_bioconductor-alphamissense.v2023.hg19|

   :versions:
      
      

      ``3.18.2-2``,  ``3.18.2-1``,  ``3.18.2-0``

      

   
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

    pixi global install bioconductor-alphamissense.v2023.hg19

to add into an existing workspace instead, run::

    pixi add bioconductor-alphamissense.v2023.hg19

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alphamissense.v2023.hg19

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alphamissense.v2023.hg19

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alphamissense.v2023.hg19:<tag>

(see `bioconductor-alphamissense.v2023.hg19/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alphamissense.v2023.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alphamissense.v2023.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alphamissense.v2023.hg19
   :alt:   (downloads)
.. |docker_bioconductor-alphamissense.v2023.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-alphamissense.v2023.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alphamissense.v2023.hg19
.. _`bioconductor-alphamissense.v2023.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-alphamissense.v2023.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alphamissense.v2023.hg19";
        var versions = ["3.18.2","3.18.2","3.18.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alphamissense.v2023.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alphamissense.v2023.hg19/README.html