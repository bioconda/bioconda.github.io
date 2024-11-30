:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mvp'
.. highlight: bash

mvp
===

.. conda:recipe:: mvp
   :replaces_section_title:
   :noindex:

   detect creation\/destruction of sequence motifs as a result of mutations

   :homepage: https://gitlab.com/LPCDRP/motif-variants
   :license: GPLv3+
   :recipe: /`mvp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvp/meta.yaml>`_

   Sequence variation may cause the appearance or disappearance of certain motifs. Since motifs can be recognition sites for biological functions such as regulation or DNA modification\, their gain and loss can have additional consequences. Using a list of variants in variant call format\, the corresponding reference sequence\, and a set of motifs to search for\,mvp \(motif\-variant probe\) identifies variants responsible for changing the number of occurrences of these motifs in the sequence. mvp can process both nucleotide and amino acid sequences.


.. conda:package:: mvp

   |downloads_mvp| |docker_mvp|

   :versions:
      
      

      ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.1-1``,  ``0.4.1-0``

      

   
   :depends biopython: 
   :depends pysam: ``>=0.8.4``
   :depends python: 
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

      mamba install mvp

   and update with::

      mamba update mvp

  To create a new environment, run::

      mamba create --name myenvname mvp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mvp:<tag>

   (see `mvp/tags`_ for valid values for ``<tag>``)


.. |downloads_mvp| image:: https://img.shields.io/conda/dn/bioconda/mvp.svg?style=flat
   :target: https://anaconda.org/bioconda/mvp
   :alt:   (downloads)
.. |docker_mvp| image:: https://quay.io/repository/biocontainers/mvp/status
   :target: https://quay.io/repository/biocontainers/mvp
.. _`mvp/tags`: https://quay.io/repository/biocontainers/mvp?tab=tags


.. raw:: html

    <script>
        var package = "mvp";
        var versions = ["0.4.3","0.4.3","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mvp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mvp/README.html