:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genefior'
.. highlight: bash

genefior
========

.. conda:recipe:: genefior
   :replaces_section_title:
   :noindex:

   Genefíor\: A customisable and multi\-tool approach for gene detection

   :homepage: https://github.com/NickJD/Genefior
   :license: GPL-3.0-only
   :recipe: /`genefior <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genefior>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genefior/meta.yaml>`_

   Genefíor orchestrates multiple alignment tools \(BLAST\, DIAMOND\, Bowtie2\, BWA\, Minimap2 and MMseqs2\) 
   to search DNA and protein sequences against AMR and user\-provided databases with transparent\, 
   coverage\-based validation.



.. conda:package:: genefior

   |downloads_genefior| |docker_genefior|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends blast: ``>=2.17.0``
   :depends bowtie2: ``>=2.5.4``
   :depends bwa: ``>=0.7.19``
   :depends diamond: ``>=2.1.13``
   :depends minimap2: ``>=2.30``
   :depends mmseqs2: 
   :depends python: ``>=3.10``
   :depends samtools: ``>=1.19.2``
   :depends seqtk: ``>=1.4``
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

      mamba install genefior

   and update with::

      mamba update genefior

  To create a new environment, run::

      mamba create --name myenvname genefior

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genefior:<tag>

   (see `genefior/tags`_ for valid values for ``<tag>``)


.. |downloads_genefior| image:: https://img.shields.io/conda/dn/bioconda/genefior.svg?style=flat
   :target: https://anaconda.org/bioconda/genefior
   :alt:   (downloads)
.. |docker_genefior| image:: https://quay.io/repository/biocontainers/genefior/status
   :target: https://quay.io/repository/biocontainers/genefior
.. _`genefior/tags`: https://quay.io/repository/biocontainers/genefior?tab=tags


.. raw:: html

    <script>
        var package = "genefior";
        var versions = ["0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genefior/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genefior/README.html