:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmseq'
.. highlight: bash

cmseq
=====

.. conda:recipe:: cmseq
   :replaces_section_title:
   :noindex:

   Set of utilities on sequences and BAM files

   :homepage: https://github.com/SegataLab/cmseq
   :license: MIT License
   :recipe: /`cmseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmseq/meta.yaml>`_

   


.. conda:package:: cmseq

   |downloads_cmseq| |docker_cmseq|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.2-0``,  ``1.0-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: ``>=1.0``
   :depends scipy: 
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

      mamba install cmseq

   and update with::

      mamba update cmseq

  To create a new environment, run::

      mamba create --name myenvname cmseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmseq:<tag>

   (see `cmseq/tags`_ for valid values for ``<tag>``)


.. |downloads_cmseq| image:: https://img.shields.io/conda/dn/bioconda/cmseq.svg?style=flat
   :target: https://anaconda.org/bioconda/cmseq
   :alt:   (downloads)
.. |docker_cmseq| image:: https://quay.io/repository/biocontainers/cmseq/status
   :target: https://quay.io/repository/biocontainers/cmseq
.. _`cmseq/tags`: https://quay.io/repository/biocontainers/cmseq?tab=tags


.. raw:: html

    <script>
        var package = "cmseq";
        var versions = ["1.0.4","1.0.2","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmseq/README.html