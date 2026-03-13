:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recountmethylation'
.. highlight: bash

bioconductor-recountmethylation
===============================

.. conda:recipe:: bioconductor-recountmethylation
   :replaces_section_title:
   :noindex:

   Access and analyze public DNA methylation array data compilations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/recountmethylation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recountmethylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recountmethylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recountmethylation/meta.yaml>`_

   Resources for cross\-study analyses of public DNAm array data from NCBI GEO repo\, produced using Illumina\'s Infinium HumanMethylation450K \(HM450K\) and MethylationEPIC \(EPIC\) platforms. Provided functions enable download\, summary\, and filtering of large compilation files. Vignettes detail background about file formats\, example analyses\, and more. Note the disclaimer on package load and consult the main manuscripts for further info.


.. conda:package:: bioconductor-recountmethylation

   |downloads_bioconductor-recountmethylation| |docker_bioconductor-recountmethylation|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-minfi: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-r.utils: 
   :depends on r-rcurl: 
   :depends on r-reticulate: 

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

    pixi global install bioconductor-recountmethylation

to add into an existing workspace instead, run::

    pixi add bioconductor-recountmethylation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-recountmethylation

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-recountmethylation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-recountmethylation:<tag>

(see `bioconductor-recountmethylation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-recountmethylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recountmethylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-recountmethylation
   :alt:   (downloads)
.. |docker_bioconductor-recountmethylation| image:: https://quay.io/repository/biocontainers/bioconductor-recountmethylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recountmethylation
.. _`bioconductor-recountmethylation/tags`: https://quay.io/repository/biocontainers/bioconductor-recountmethylation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-recountmethylation";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recountmethylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recountmethylation/README.html