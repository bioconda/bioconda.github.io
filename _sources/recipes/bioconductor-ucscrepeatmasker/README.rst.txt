:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ucscrepeatmasker'
.. highlight: bash

bioconductor-ucscrepeatmasker
=============================

.. conda:recipe:: bioconductor-ucscrepeatmasker
   :replaces_section_title:
   :noindex:

   UCSC RepeatMasker AnnotationHub resource metadata

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/UCSCRepeatMasker.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ucscrepeatmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucscrepeatmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucscrepeatmasker/meta.yaml>`_

   Store UCSC RepeatMasker AnnotationHub resource metadata. Provide provenance and citation information for UCSC RepeatMasker AnnotationHub resources. Illustrate in a vignette how to access those resources.


.. conda:package:: bioconductor-ucscrepeatmasker

   |downloads_bioconductor-ucscrepeatmasker| |docker_bioconductor-ucscrepeatmasker|

   :versions:
      
      

      ``3.22.0-0``,  ``3.15.2-3``,  ``3.15.2-2``,  ``3.15.2-1``,  ``3.15.2-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcurl: 
   :depends on r-xml: 

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

    pixi global install bioconductor-ucscrepeatmasker

to add into an existing workspace instead, run::

    pixi add bioconductor-ucscrepeatmasker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ucscrepeatmasker

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ucscrepeatmasker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ucscrepeatmasker:<tag>

(see `bioconductor-ucscrepeatmasker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ucscrepeatmasker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ucscrepeatmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ucscrepeatmasker
   :alt:   (downloads)
.. |docker_bioconductor-ucscrepeatmasker| image:: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker
.. _`bioconductor-ucscrepeatmasker/tags`: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ucscrepeatmasker";
        var versions = ["3.22.0","3.15.2","3.15.2","3.15.2","3.15.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ucscrepeatmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ucscrepeatmasker/README.html