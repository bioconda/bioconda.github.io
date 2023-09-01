:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakseq2'
.. highlight: bash

breakseq2
=========

.. conda:recipe:: breakseq2
   :replaces_section_title:
   :noindex:

   BreakSeq2\: Ultrafast and accurate nucleotide\-resolution analysis of structural variants.

   :homepage: http://bioinform.github.io/breakseq2
   :license: BSD-2-Clause
   :recipe: /`breakseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakseq2/meta.yaml>`_

   


.. conda:package:: breakseq2

   |downloads_breakseq2| |docker_breakseq2|

   :versions:
      
      

      ``2.2-2``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends biopython: ``1.65``
   :depends bwa: 
   :depends cython: 
   :depends pysam: ``0.7.7``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends samtools: ``0.1.19``
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

      mamba install breakseq2

   and update with::

      mamba update breakseq2

  To create a new environment, run::

      mamba create --name myenvname breakseq2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/breakseq2:<tag>

   (see `breakseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_breakseq2| image:: https://img.shields.io/conda/dn/bioconda/breakseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/breakseq2
   :alt:   (downloads)
.. |docker_breakseq2| image:: https://quay.io/repository/biocontainers/breakseq2/status
   :target: https://quay.io/repository/biocontainers/breakseq2
.. _`breakseq2/tags`: https://quay.io/repository/biocontainers/breakseq2?tab=tags


.. raw:: html

    <script>
        var package = "breakseq2";
        var versions = ["2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakseq2/README.html