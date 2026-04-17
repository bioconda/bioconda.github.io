:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rectify-rna'
.. highlight: bash

rectify-rna
===========

.. conda:recipe:: rectify-rna
   :replaces_section_title:
   :noindex:

   Unified RNA 3\' End Correction Framework

   :homepage: https://github.com/k-roy/RECTIFY
   :documentation: https://github.com/k-roy/RECTIFY#readme
   
   :license: MIT / MIT
   :recipe: /`rectify-rna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rectify-rna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rectify-rna/meta.yaml>`_

   RECTIFY corrects poly\(A\) tail artifacts in RNA 3\' end sequencing data.
   Features A\-tract ambiguity correction\, AG mispriming detection\,
   NET\-seq refinement\, and downstream analysis \(DESeq2\, clustering\, motifs\).



.. conda:package:: rectify-rna

   |downloads_rectify-rna| |docker_rectify-rna|

   :versions:
      
      

      ``2.1.3-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on matplotlib-base: ``>=3.5``
   :depends on numpy: ``>=1.20``
   :depends on pandas: ``>=1.3``
   :depends on pybigwig: ``>=0.3``
   :depends on pydeseq2: ``>=0.4``
   :depends on pysam: ``>=0.19``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``>=1.0``
   :depends on scipy: ``>=1.7``
   :depends on seaborn-base: ``>=0.11``

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

    pixi global install rectify-rna

to add into an existing workspace instead, run::

    pixi add rectify-rna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rectify-rna

Alternatively, to install into a new environment, run::

    conda create -n envname rectify-rna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rectify-rna:<tag>

(see `rectify-rna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rectify-rna| image:: https://img.shields.io/conda/dn/bioconda/rectify-rna.svg?style=flat
   :target: https://anaconda.org/bioconda/rectify-rna
   :alt:   (downloads)
.. |docker_rectify-rna| image:: https://quay.io/repository/biocontainers/rectify-rna/status
   :target: https://quay.io/repository/biocontainers/rectify-rna
.. _`rectify-rna/tags`: https://quay.io/repository/biocontainers/rectify-rna?tab=tags


.. raw:: html

    <script>
        var package = "rectify-rna";
        var versions = ["2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rectify-rna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rectify-rna/README.html