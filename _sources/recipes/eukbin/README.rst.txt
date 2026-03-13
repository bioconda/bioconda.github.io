:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukbin'
.. highlight: bash

eukbin
======

.. conda:recipe:: eukbin
   :replaces_section_title:
   :noindex:

   BUSCO\-guided binning for eukaryotic metagenomes

   :homepage: https://github.com/weiwei12456/eukbin
   :documentation: https://github.com/weiwei12456/eukbin/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`eukbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukbin/meta.yaml>`_

   EukBin is a specialized binning tool for eukaryotic metagenomes that combines
   repeat\-masked tetranucleotide frequency \(TNF\)\, multi\-sample coverage information\,
   BUSCO marker gene constraints\, and deep learning \(β\-VAE with contrastive loss\)
   with ploidy\-aware refinement.

   Key features\:
   \- Repeat\-masked TNF features to handle repeat\-rich eukaryotic genomes
   \- BUSCO\-guided constraints for accurate bin estimation
   \- Ploidy\-aware refinement \(haplotig detection for diploid\/polyploid genomes\)
   \- Deep learning with β\-VAE and contrastive loss
   \- Supports multi\-sample binning

   This package includes\:
   \- eukbin run\: Complete binning pipeline \(M1\-M6 modules\)
   \- eukbin evaluate\: Quality assessment for any binning tool
   \- eukbin report\: Multi\-tool comparison report



.. conda:package:: eukbin

   |downloads_eukbin| |docker_eukbin|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on numpy: ``>=1.19``
   :depends on pandas: ``>=1.0``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on pytorch: ``>=1.9``
   :depends on pyyaml: 
   :depends on scikit-learn: ``>=0.24``
   :depends on scipy: ``>=1.5``
   :depends on tqdm: 

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

    pixi global install eukbin

to add into an existing workspace instead, run::

    pixi add eukbin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eukbin

Alternatively, to install into a new environment, run::

    conda create -n envname eukbin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eukbin:<tag>

(see `eukbin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eukbin| image:: https://img.shields.io/conda/dn/bioconda/eukbin.svg?style=flat
   :target: https://anaconda.org/bioconda/eukbin
   :alt:   (downloads)
.. |docker_eukbin| image:: https://quay.io/repository/biocontainers/eukbin/status
   :target: https://quay.io/repository/biocontainers/eukbin
.. _`eukbin/tags`: https://quay.io/repository/biocontainers/eukbin?tab=tags


.. raw:: html

    <script>
        var package = "eukbin";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukbin/README.html