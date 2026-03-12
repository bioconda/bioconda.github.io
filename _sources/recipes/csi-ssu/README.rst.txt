:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'csi-ssu'
.. highlight: bash

csi-ssu
=======

.. conda:recipe:: csi-ssu
   :replaces_section_title:
   :noindex:

   CSI SSU screening tool for genomic and transcriptomic data

   :homepage: https://github.com/AlexTiceLab/CSI-SSU
   :documentation: https://github.com/AlexTiceLab/CSI-SSU/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`csi-ssu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csi-ssu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csi-ssu/meta.yaml>`_

   A command\-line tool for screening SSU \(Small Subunit ribosomal RNA\) sequences 
   in genomic and transcriptomic data. This tool helps identify and classify SSU 
   sequences using phylogenetic placement in SSU reference packages built from PR2 
   via pplacer.

   Features include automated SSU screening using BLAST\, MAFFT\, and pplacer\, 
   phylogenetic placement for contamination screening and approximate taxonomic 
   classification\, and a command\-line interface for easy integration into pipelines.



.. conda:package:: csi-ssu

   |downloads_csi-ssu| |docker_csi-ssu|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.12``
   :depends busco: ``>=5.0``
   :depends ete3: ``>=3.1``
   :depends mafft: ``>=7.0``
   :depends matplotlib-base: ``>=3.4``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=1.3``
   :depends pplacer: ``>=1.0``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.7``
   :depends snakemake-minimal: ``>=7.0``
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

      mamba install csi-ssu

   and update with::

      mamba update csi-ssu

  To create a new environment, run::

      mamba create --name myenvname csi-ssu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/csi-ssu:<tag>

   (see `csi-ssu/tags`_ for valid values for ``<tag>``)


.. |downloads_csi-ssu| image:: https://img.shields.io/conda/dn/bioconda/csi-ssu.svg?style=flat
   :target: https://anaconda.org/bioconda/csi-ssu
   :alt:   (downloads)
.. |docker_csi-ssu| image:: https://quay.io/repository/biocontainers/csi-ssu/status
   :target: https://quay.io/repository/biocontainers/csi-ssu
.. _`csi-ssu/tags`: https://quay.io/repository/biocontainers/csi-ssu?tab=tags


.. raw:: html

    <script>
        var package = "csi-ssu";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/csi-ssu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/csi-ssu/README.html