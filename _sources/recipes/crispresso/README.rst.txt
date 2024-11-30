:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispresso'
.. highlight: bash

crispresso
==========

.. conda:recipe:: crispresso
   :replaces_section_title:
   :noindex:

   A software pipeline for the analysis of targeted CRISPR\-Cas9 sequencing data

   :homepage: https://github.com/lucapinello/CRISPResso
   :license: GPLv3
   :recipe: /`crispresso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso/meta.yaml>`_

   


.. conda:package:: crispresso

   |downloads_crispresso| |docker_crispresso|

   :versions:
      
      

      ``1.0.13-5``,  ``1.0.13-4``,  ``1.0.13-3``,  ``1.0.13-2``,  ``1.0.13-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0-0``

      

   
   :depends argparse: 
   :depends biopython: ``>=1.6.5``
   :depends bowtie2: 
   :depends emboss: 
   :depends flash: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends matplotlib: ``>=1.3.1``
   :depends mock: 
   :depends nose: 
   :depends numpy: ``>=1.10.4``
   :depends openjdk: ``>=8``
   :depends pandas: ``>=0.16``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends seaborn: 
   :depends trimmomatic: 
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

      mamba install crispresso

   and update with::

      mamba update crispresso

  To create a new environment, run::

      mamba create --name myenvname crispresso

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crispresso:<tag>

   (see `crispresso/tags`_ for valid values for ``<tag>``)


.. |downloads_crispresso| image:: https://img.shields.io/conda/dn/bioconda/crispresso.svg?style=flat
   :target: https://anaconda.org/bioconda/crispresso
   :alt:   (downloads)
.. |docker_crispresso| image:: https://quay.io/repository/biocontainers/crispresso/status
   :target: https://quay.io/repository/biocontainers/crispresso
.. _`crispresso/tags`: https://quay.io/repository/biocontainers/crispresso?tab=tags


.. raw:: html

    <script>
        var package = "crispresso";
        var versions = ["1.0.13","1.0.13","1.0.13","1.0.13","1.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispresso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispresso/README.html