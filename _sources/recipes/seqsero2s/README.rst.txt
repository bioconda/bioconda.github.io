:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqsero2s'
.. highlight: bash

seqsero2s
=========

.. conda:recipe:: seqsero2s
   :replaces_section_title:
   :noindex:

   Simplified Salmonella serotype prediction from genome sequencing data

   :homepage: https://github.com/LSTUGA/SeqSero2S
   :license: GPL / GPL-2.0-or-later
   :recipe: /`seqsero2s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2s/meta.yaml>`_
   :links: doi: :doi:`10.1128/aem.02600-24`

   


.. conda:package:: seqsero2s

   |downloads_seqsero2s| |docker_seqsero2s|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``

      

   
   :depends bedtools: ``>=2.17``
   :depends blast: ``>=2.2``
   :depends bwa: ``>=0.7``
   :depends python: ``>=3``
   :depends salmid: 
   :depends samtools: 
   :depends seqtk: ``>=1.3``
   :depends spades: ``>=3.9``
   :depends sra-tools: ``>=2.8``
   :depends stringmlst: ``>=0.6``
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

      mamba install seqsero2s

   and update with::

      mamba update seqsero2s

  To create a new environment, run::

      mamba create --name myenvname seqsero2s

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqsero2s:<tag>

   (see `seqsero2s/tags`_ for valid values for ``<tag>``)


.. |downloads_seqsero2s| image:: https://img.shields.io/conda/dn/bioconda/seqsero2s.svg?style=flat
   :target: https://anaconda.org/bioconda/seqsero2s
   :alt:   (downloads)
.. |docker_seqsero2s| image:: https://quay.io/repository/biocontainers/seqsero2s/status
   :target: https://quay.io/repository/biocontainers/seqsero2s
.. _`seqsero2s/tags`: https://quay.io/repository/biocontainers/seqsero2s?tab=tags


.. raw:: html

    <script>
        var package = "seqsero2s";
        var versions = ["1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqsero2s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqsero2s/README.html