:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgap2'
.. highlight: bash

pgap2
=====

.. conda:recipe:: pgap2
   :replaces_section_title:
   :noindex:

   PGAP2\: a comprehensive pan\-genome analysis pipeline for prokaryotic genomes.

   :homepage: https://github.com/bucongfan/PGAP2
   :license: MIT / MIT
   :recipe: /`pgap2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgap2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgap2/meta.yaml>`_

   


.. conda:package:: pgap2

   |downloads_pgap2| |docker_pgap2|

   :versions:
      
      

      ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends bcbio-gff: ``0.7.1``
   :depends biopython: ``1.82``
   :depends blast: 
   :depends cd-hit: 
   :depends clipkit: 
   :depends clonalframeml: 
   :depends diamond: 
   :depends ete3: ``3.1.3``
   :depends fasttree: 
   :depends htslib: 
   :depends iqtree: 
   :depends loguru: ``0.6.0``
   :depends mafft: 
   :depends mcl: 
   :depends minifasta: ``3.0.2``
   :depends miniprot: 
   :depends mmseqs2: 
   :depends muscle: 
   :depends networkx: ``3.3``
   :depends numpy: ``1.23.3``
   :depends pandas: ``1.5.0``
   :depends perl-bio-tools-run-alignment-tcoffee: 
   :depends prodigal: 
   :depends pyecharts: ``2.0.8``
   :depends pyfastani: ``0.5.1``
   :depends python: ``>=3.10``
   :depends python-edlib: ``1.3.9``
   :depends r-base: 
   :depends r-dplyr: 
   :depends r-fastbaps: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-optparse: 
   :depends r-patchwork: 
   :depends r-tidyr: 
   :depends raxml-ng: 
   :depends scikit-learn: ``1.1.2``
   :depends scipy: ``1.9.1``
   :depends seqtk: 
   :depends svgwrite: 
   :depends tajimas_d: ``2.0.2``
   :depends tqdm: ``4.64.1``
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

      mamba install pgap2

   and update with::

      mamba update pgap2

  To create a new environment, run::

      mamba create --name myenvname pgap2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgap2:<tag>

   (see `pgap2/tags`_ for valid values for ``<tag>``)


.. |downloads_pgap2| image:: https://img.shields.io/conda/dn/bioconda/pgap2.svg?style=flat
   :target: https://anaconda.org/bioconda/pgap2
   :alt:   (downloads)
.. |docker_pgap2| image:: https://quay.io/repository/biocontainers/pgap2/status
   :target: https://quay.io/repository/biocontainers/pgap2
.. _`pgap2/tags`: https://quay.io/repository/biocontainers/pgap2?tab=tags


.. raw:: html

    <script>
        var package = "pgap2";
        var versions = ["1.0.9","1.0.8","1.0.6","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgap2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgap2/README.html