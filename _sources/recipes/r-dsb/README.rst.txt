:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dsb'
.. highlight: bash

r-dsb
=====

.. conda:recipe:: r-dsb
   :replaces_section_title:
   :noindex:

   Normalizing and denoising protein expression data from droplet\-based single cell profiling

   :homepage: https://github.com/niaid/dsb
   :license: CC / CC0 | file LICENSE
   :recipe: /`r-dsb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dsb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dsb/meta.yaml>`_

   This lightweight R package provides a method for normalizing and denoising protein expression data from droplet based single cell experiments. Raw protein Unique Molecular Index \(UMI\) counts from sequencing DNA\-conjugated antibody derived tags \(ADT\) in droplets \(e.g. \'CITE\-seq\'\) have substantial measurement noise. Our experiments and computational modeling revealed two major components of this noise\: 1\) protein\-specific noise originating from ambient\, unbound antibody encapsulated in droplets that can be accurately inferred via the expected protein counts detected in empty droplets\, and 2\) droplet\/cell\-specific noise revealed via the shared variance component associated with isotype antibody controls and background protein counts in each cell. This package normalizes and removes both of these sources of noise from raw protein data derived from methods such as \'CITE\-seq\'\, \'REAP\-seq\'\, \'ASAP\-seq\'\, \'TEA\-seq\'\, \'proteogenomic\' data from the Mission Bio platform\, etc. See the vignette for tutorials on how to integrate dsb with \'Seurat\' and \'Bioconductor\' and how to use dsb in \'Python\'. Please see our paper Mulè M.P.\, Martins A.J.\, and Tsang J.S. Nature Communications 2022 \<https\:\/\/www.nature.com\/articles\/s41467\-022\-29356\-8\> for more details on the method.


.. conda:package:: r-dsb

   |downloads_r-dsb| |docker_r-dsb|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on bioconductor-limma: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-magrittr: 
   :depends on r-mclust: 

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

    pixi global install r-dsb

to add into an existing workspace instead, run::

    pixi add r-dsb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-dsb

Alternatively, to install into a new environment, run::

    conda create -n envname r-dsb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-dsb:<tag>

(see `r-dsb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-dsb| image:: https://img.shields.io/conda/dn/bioconda/r-dsb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dsb
   :alt:   (downloads)
.. |docker_r-dsb| image:: https://quay.io/repository/biocontainers/r-dsb/status
   :target: https://quay.io/repository/biocontainers/r-dsb
.. _`r-dsb/tags`: https://quay.io/repository/biocontainers/r-dsb?tab=tags


.. raw:: html

    <script>
        var package = "r-dsb";
        var versions = ["2.0.1","2.0.0","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dsb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dsb/README.html