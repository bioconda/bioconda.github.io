:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyamilyseq'
.. highlight: bash

pyamilyseq
==========

.. conda:recipe:: pyamilyseq
   :replaces_section_title:
   :noindex:

   PyamilySeq\: A pangenome investigation tool

   :homepage: https://github.com/NickJD/PyamilySeq
   :license: GPL-3.0-only
   :recipe: /`pyamilyseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyamilyseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyamilyseq/meta.yaml>`_

   PyamilySeq \- A tool to investigate gene\-centric prokaryote pangenomes built with 
   clustering methods such as CD\-HIT\, DIAMOND\, BLAST or MMseqs2.



.. conda:package:: pyamilyseq

   |downloads_pyamilyseq| |docker_pyamilyseq|

   :versions:
      
      

      ``1.3.2-0``

      

   
   :depends python: ``>=3.10``
   :depends python-levenshtein: 
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

      mamba install pyamilyseq

   and update with::

      mamba update pyamilyseq

  To create a new environment, run::

      mamba create --name myenvname pyamilyseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyamilyseq:<tag>

   (see `pyamilyseq/tags`_ for valid values for ``<tag>``)


.. |downloads_pyamilyseq| image:: https://img.shields.io/conda/dn/bioconda/pyamilyseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pyamilyseq
   :alt:   (downloads)
.. |docker_pyamilyseq| image:: https://quay.io/repository/biocontainers/pyamilyseq/status
   :target: https://quay.io/repository/biocontainers/pyamilyseq
.. _`pyamilyseq/tags`: https://quay.io/repository/biocontainers/pyamilyseq?tab=tags


.. raw:: html

    <script>
        var package = "pyamilyseq";
        var versions = ["1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyamilyseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyamilyseq/README.html