:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicinteractionnodes'
.. highlight: bash

bioconductor-genomicinteractionnodes
====================================

.. conda:recipe:: bioconductor-genomicinteractionnodes
   :replaces_section_title:
   :noindex:

   A R\/Bioconductor package to detect the interaction nodes from HiC\/HiChIP\/HiCAR data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GenomicInteractionNodes.html
   :license: file LICENSE
   :recipe: /`bioconductor-genomicinteractionnodes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinteractionnodes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinteractionnodes/meta.yaml>`_

   The GenomicInteractionNodes package can import interactions from bedpe file and define the interaction nodes\, the genomic interaction sites with multiple interaction loops. The interaction nodes is a binding platform regulates one or multiple genes. The detected interaction nodes will be annotated for downstream validation.


.. conda:package:: bioconductor-genomicinteractionnodes

   |downloads_bioconductor-genomicinteractionnodes| |docker_bioconductor-genomicinteractionnodes|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
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

    pixi global install bioconductor-genomicinteractionnodes

to add into an existing workspace instead, run::

    pixi add bioconductor-genomicinteractionnodes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomicinteractionnodes

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomicinteractionnodes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomicinteractionnodes:<tag>

(see `bioconductor-genomicinteractionnodes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomicinteractionnodes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicinteractionnodes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicinteractionnodes
   :alt:   (downloads)
.. |docker_bioconductor-genomicinteractionnodes| image:: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes
.. _`bioconductor-genomicinteractionnodes/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicinteractionnodes";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicinteractionnodes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicinteractionnodes/README.html