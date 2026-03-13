:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easylift'
.. highlight: bash

bioconductor-easylift
=====================

.. conda:recipe:: bioconductor-easylift
   :replaces_section_title:
   :noindex:

   An R package to perform genomic liftover

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/easylift.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-easylift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easylift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easylift/meta.yaml>`_

   The easylift package provides a convenient tool for genomic liftover operations between different genome assemblies. It seamlessly works with Bioconductor\'s GRanges objects and chain files from the UCSC Genome Browser\, allowing for straightforward handling of genomic ranges across various genome versions. One noteworthy feature of easylift is its integration with the BiocFileCache package. This integration automates the management and caching of chain files necessary for liftover operations. Users no longer need to manually specify chain file paths in their function calls\, reducing the complexity of the liftover process.


.. conda:package:: bioconductor-easylift

   |downloads_bioconductor-easylift| |docker_bioconductor-easylift|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-r.utils: 

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

    pixi global install bioconductor-easylift

to add into an existing workspace instead, run::

    pixi add bioconductor-easylift

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-easylift

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-easylift

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-easylift:<tag>

(see `bioconductor-easylift/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-easylift| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easylift.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easylift
   :alt:   (downloads)
.. |docker_bioconductor-easylift| image:: https://quay.io/repository/biocontainers/bioconductor-easylift/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easylift
.. _`bioconductor-easylift/tags`: https://quay.io/repository/biocontainers/bioconductor-easylift?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easylift";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easylift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easylift/README.html