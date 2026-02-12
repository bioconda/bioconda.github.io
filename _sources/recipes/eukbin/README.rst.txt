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

      

   
   :depends biopython: ``>=1.78``
   :depends numpy: ``>=1.19``
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.14,<3.15.0a0``
   :depends pytorch: ``>=1.9``
   :depends pyyaml: 
   :depends scikit-learn: ``>=0.24``
   :depends scipy: ``>=1.5``
   :depends tqdm: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install eukbin

   and update with::

      mamba update eukbin

  To create a new environment, run::

      mamba create --name myenvname eukbin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eukbin:<tag>

   (see `eukbin/tags`_ for valid values for ``<tag>``)


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