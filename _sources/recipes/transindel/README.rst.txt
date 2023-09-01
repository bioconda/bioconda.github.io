:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transindel'
.. highlight: bash

transindel
==========

.. conda:recipe:: transindel
   :replaces_section_title:
   :noindex:

   transIndel is used to detect indels \(insertions and deletions\) from DNA\-seq or RNA\-seq data by parsing chimeric alignments from BWA\-MEM..

   :homepage: https://github.com/cauyrd/transIndel
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`transindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transindel/meta.yaml>`_

   


.. conda:package:: transindel

   |downloads_transindel| |docker_transindel|

   :versions:
      
      

      ``2.0-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends htseq: ``>=0.6.1``
   :depends pysam: ``>=0.13.0``
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.0``
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

      mamba install transindel

   and update with::

      mamba update transindel

  To create a new environment, run::

      mamba create --name myenvname transindel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transindel:<tag>

   (see `transindel/tags`_ for valid values for ``<tag>``)


.. |downloads_transindel| image:: https://img.shields.io/conda/dn/bioconda/transindel.svg?style=flat
   :target: https://anaconda.org/bioconda/transindel
   :alt:   (downloads)
.. |docker_transindel| image:: https://quay.io/repository/biocontainers/transindel/status
   :target: https://quay.io/repository/biocontainers/transindel
.. _`transindel/tags`: https://quay.io/repository/biocontainers/transindel?tab=tags


.. raw:: html

    <script>
        var package = "transindel";
        var versions = ["2.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transindel/README.html