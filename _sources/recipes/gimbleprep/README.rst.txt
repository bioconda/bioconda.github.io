:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gimbleprep'
.. highlight: bash

gimbleprep
==========

.. conda:recipe:: gimbleprep
   :replaces_section_title:
   :noindex:

   Preprocess fasta\, bam and vcf files ready to be used by gimble

   :homepage: https://github.com/LohseLab/gimbleprep
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gimbleprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimbleprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimbleprep/meta.yaml>`_

   


.. conda:package:: gimbleprep

   |downloads_gimbleprep| |docker_gimbleprep|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.2b6-0``,  ``0.0.2b5-0``,  ``0.0.2b4-0``,  ``0.0.2b3-0``

      

   
   :depends bcftools: 
   :depends bedtools: 
   :depends docopt: 
   :depends mosdepth: ``0.3.2``
   :depends numpy: 
   :depends pandas: 
   :depends parallel: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends samtools: 
   :depends tqdm: 
   :depends vcflib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gimbleprep

   and update with::

      mamba update gimbleprep

  To create a new environment, run::

      mamba create --name myenvname gimbleprep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gimbleprep:<tag>

   (see `gimbleprep/tags`_ for valid values for ``<tag>``)


.. |downloads_gimbleprep| image:: https://img.shields.io/conda/dn/bioconda/gimbleprep.svg?style=flat
   :target: https://anaconda.org/bioconda/gimbleprep
   :alt:   (downloads)
.. |docker_gimbleprep| image:: https://quay.io/repository/biocontainers/gimbleprep/status
   :target: https://quay.io/repository/biocontainers/gimbleprep
.. _`gimbleprep/tags`: https://quay.io/repository/biocontainers/gimbleprep?tab=tags


.. raw:: html

    <script>
        var package = "gimbleprep";
        var versions = ["0.0.2","0.0.2b6","0.0.2b5","0.0.2b4","0.0.2b3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gimbleprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gimbleprep/README.html