:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqsero2'
.. highlight: bash

seqsero2
========

.. conda:recipe:: seqsero2
   :replaces_section_title:
   :noindex:

   Salmonella serotype prediction from genome sequencing data.

   :homepage: https://github.com/denglab/SeqSero2
   :license: GPL / GPL-2.0-or-later
   :recipe: /`seqsero2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2/meta.yaml>`_
   :links: doi: :doi:`10.1128/AEM.01746-19`

   


.. conda:package:: seqsero2

   |downloads_seqsero2| |docker_seqsero2|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.01-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bedtools: ``2.17.0.*``
   :depends biopython: ``1.73.*``
   :depends blast: ``>=2.2.28``
   :depends bwa: ``>=0.7.12``
   :depends python: ``>=3``
   :depends salmid: ``0.1.23.*``
   :depends samtools: ``>=1.8``
   :depends seqtk: ``>=1.3``
   :depends spades: ``>=3.15.5``
   :depends sra-tools: ``>=2.8.0``
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

      mamba install seqsero2

   and update with::

      mamba update seqsero2

  To create a new environment, run::

      mamba create --name myenvname seqsero2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqsero2:<tag>

   (see `seqsero2/tags`_ for valid values for ``<tag>``)


.. |downloads_seqsero2| image:: https://img.shields.io/conda/dn/bioconda/seqsero2.svg?style=flat
   :target: https://anaconda.org/bioconda/seqsero2
   :alt:   (downloads)
.. |docker_seqsero2| image:: https://quay.io/repository/biocontainers/seqsero2/status
   :target: https://quay.io/repository/biocontainers/seqsero2
.. _`seqsero2/tags`: https://quay.io/repository/biocontainers/seqsero2?tab=tags


.. raw:: html

    <script>
        var package = "seqsero2";
        var versions = ["1.3.2","1.3.1","1.3.1","1.2.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqsero2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqsero2/README.html