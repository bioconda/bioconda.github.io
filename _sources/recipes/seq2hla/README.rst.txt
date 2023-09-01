:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2hla'
.. highlight: bash

seq2hla
=======

.. conda:recipe:: seq2hla
   :replaces_section_title:
   :noindex:

   Precision HLA typing and expression from next\-generation RNA sequencing data

   :homepage: https://github.com/TRON-Bioinformatics/seq2HLA
   :license: MIT
   :recipe: /`seq2hla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2hla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2hla/meta.yaml>`_
   :links: biotools: :biotools:`seq2hla`

   


.. conda:package:: seq2hla

   |downloads_seq2hla| |docker_seq2hla|

   :versions:
      
      

      ``2.3-1``,  ``2.3-0``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends biopython: ``>=1.58``
   :depends bowtie: ``1.1.2``
   :depends coreutils: 
   :depends python: ``<3``
   :depends r-base: 
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

      mamba install seq2hla

   and update with::

      mamba update seq2hla

  To create a new environment, run::

      mamba create --name myenvname seq2hla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seq2hla:<tag>

   (see `seq2hla/tags`_ for valid values for ``<tag>``)


.. |downloads_seq2hla| image:: https://img.shields.io/conda/dn/bioconda/seq2hla.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2hla
   :alt:   (downloads)
.. |docker_seq2hla| image:: https://quay.io/repository/biocontainers/seq2hla/status
   :target: https://quay.io/repository/biocontainers/seq2hla
.. _`seq2hla/tags`: https://quay.io/repository/biocontainers/seq2hla?tab=tags


.. raw:: html

    <script>
        var package = "seq2hla";
        var versions = ["2.3","2.3","2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2hla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2hla/README.html