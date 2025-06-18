:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plinder'
.. highlight: bash

plinder
=======

.. conda:recipe:: plinder
   :replaces_section_title:
   :noindex:

   PLINDER\: The Protein\-Ligand INteraction Dataset and Evaluation Resource.

   :homepage: https://www.plinder.sh
   :documentation: https://plinder-org.github.io/plinder
   
   :developer docs: https://github.com/plinder-org/plinder
   :license: MIT AND Apache-2.0
   :recipe: /`plinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plinder/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.07.17.603955`

   Protein\-ligand interactions are foundational to the understanding of science and discovery of therapies.
   However\, to this date\, no large\, high quality datasets with real\-life relevant evaluations exist.

   PLINDER is an academic\-industry collaboration to address this\, driven by VantAI\, NVIDIA\, the Computational Structural Biology group at the University of Basel \& SIB Swiss Institute of Bioinformatics \- co\-organizers of CASP\, and MIT.
   We aim to provide a gold standard dataset and evaluations to push the field of computational protein\-ligand interactions prediction forward.



.. conda:package:: plinder

   |downloads_plinder| |docker_plinder|

   :versions:
      
      

      ``0.2.25-3``,  ``0.2.25-2``,  ``0.2.25-1``,  ``0.2.25-0``

      

   
   :depends biotite: ``>=1.0``
   :depends cloudpathlib: 
   :depends eval-type-backport: 
   :depends foldseek: 
   :depends gcsfs: 
   :depends gemmi: 
   :depends google-cloud-storage: 
   :depends keyrings.google-artifactregistry-auth: 
   :depends ligand-validation: 
   :depends mmcif: 
   :depends mmpdb: 
   :depends mmseqs2: 
   :depends mols2grid: 
   :depends nbformat: 
   :depends networkit: ``>=11.0``
   :depends numpy: ``<2``
   :depends omegaconf: 
   :depends openbabel: 
   :depends openstructure: 
   :depends pandas: 
   :depends plip: ``2.3.0``
   :depends plotly: 
   :depends posebusters: 
   :depends pyarrow: 
   :depends pydantic: 
   :depends python: ``>=3.10``
   :depends python-duckdb: 
   :depends pytorch-cpu: 
   :depends rdkit: ``>=2024.03.6``
   :depends reduce: 
   :depends six: 
   :depends tabulate: 
   :depends tqdm: 
   :depends typing_extensions: 
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

      mamba install plinder

   and update with::

      mamba update plinder

  To create a new environment, run::

      mamba create --name myenvname plinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plinder:<tag>

   (see `plinder/tags`_ for valid values for ``<tag>``)


.. |downloads_plinder| image:: https://img.shields.io/conda/dn/bioconda/plinder.svg?style=flat
   :target: https://anaconda.org/bioconda/plinder
   :alt:   (downloads)
.. |docker_plinder| image:: https://quay.io/repository/biocontainers/plinder/status
   :target: https://quay.io/repository/biocontainers/plinder
.. _`plinder/tags`: https://quay.io/repository/biocontainers/plinder?tab=tags


.. raw:: html

    <script>
        var package = "plinder";
        var versions = ["0.2.25","0.2.25","0.2.25","0.2.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plinder/README.html