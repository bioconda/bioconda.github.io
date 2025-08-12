:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'accusnv'
.. highlight: bash

accusnv
=======

.. conda:recipe:: accusnv
   :replaces_section_title:
   :noindex:

   High\-accuracy SNV calling for bacterial isolates using AccuSNV.

   :homepage: https://github.com/liaoherui/AccuSNV
   :documentation: https://github.com/liaoherui/AccuSNV/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`accusnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/accusnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/accusnv/meta.yaml>`_

   


.. conda:package:: accusnv

   |downloads_accusnv| |docker_accusnv|

   :versions:
      
      

      ``1.0.0.4-0``,  ``1.0.0.3-0``

      

   
   :depends bcbio-gff: ``0.6.9``
   :depends bcftools: 
   :depends biopython: ``1.78``
   :depends bwa: 
   :depends cutadapt: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends phylip: 
   :depends pulp: ``2.7.0``
   :depends python: ``>=3.9,<3.10``
   :depends pytorch: ``>=2.6,<2.7``
   :depends samtools: 
   :depends scipy: 
   :depends sickle-trim: 
   :depends snakemake: ``7.32.3``
   :depends statsmodels: 
   :depends tabix: 
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

      mamba install accusnv

   and update with::

      mamba update accusnv

  To create a new environment, run::

      mamba create --name myenvname accusnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/accusnv:<tag>

   (see `accusnv/tags`_ for valid values for ``<tag>``)


.. |downloads_accusnv| image:: https://img.shields.io/conda/dn/bioconda/accusnv.svg?style=flat
   :target: https://anaconda.org/bioconda/accusnv
   :alt:   (downloads)
.. |docker_accusnv| image:: https://quay.io/repository/biocontainers/accusnv/status
   :target: https://quay.io/repository/biocontainers/accusnv
.. _`accusnv/tags`: https://quay.io/repository/biocontainers/accusnv?tab=tags


.. raw:: html

    <script>
        var package = "accusnv";
        var versions = ["1.0.0.4","1.0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/accusnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/accusnv/README.html