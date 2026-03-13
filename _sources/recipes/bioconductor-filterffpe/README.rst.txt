:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-filterffpe'
.. highlight: bash

bioconductor-filterffpe
=======================

.. conda:recipe:: bioconductor-filterffpe
   :replaces_section_title:
   :noindex:

   FFPE Artificial Chimeric Read Filter for NGS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/FilterFFPE.html
   :license: LGPL-3
   :recipe: /`bioconductor-filterffpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-filterffpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-filterffpe/meta.yaml>`_

   This package finds and filters artificial chimeric reads specifically generated in next\-generation sequencing \(NGS\) process of formalin\-fixed paraffin\-embedded \(FFPE\) tissues. These artificial chimeric reads can lead to a large number of false positive structural variation \(SV\) calls. The required input is an indexed BAM file of a FFPE sample.


.. conda:package:: bioconductor-filterffpe

   |downloads_bioconductor-filterffpe| |docker_bioconductor-filterffpe|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-foreach: 

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

    pixi global install bioconductor-filterffpe

to add into an existing workspace instead, run::

    pixi add bioconductor-filterffpe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-filterffpe

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-filterffpe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-filterffpe:<tag>

(see `bioconductor-filterffpe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-filterffpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-filterffpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-filterffpe
   :alt:   (downloads)
.. |docker_bioconductor-filterffpe| image:: https://quay.io/repository/biocontainers/bioconductor-filterffpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-filterffpe
.. _`bioconductor-filterffpe/tags`: https://quay.io/repository/biocontainers/bioconductor-filterffpe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-filterffpe";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-filterffpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-filterffpe/README.html