:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqmap'
.. highlight: bash

seqmap
======

.. conda:recipe:: seqmap
   :replaces_section_title:
   :noindex:

   SeqMap is a tool for mapping large amount of oligonucleotide to the genome.

   :homepage: http://www-personal.umich.edu/~jianghui/seqmap/
   :license: Custom OSS
   :recipe: /`seqmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqmap/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1093/bioinformatics/btn429`

   


.. conda:package:: seqmap

   |downloads_seqmap| |docker_seqmap|

   :versions:
      
      

      ``1.0.13-1``,  ``1.0.13-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install seqmap

   and update with::

      mamba update seqmap

  To create a new environment, run::

      mamba create --name myenvname seqmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqmap:<tag>

   (see `seqmap/tags`_ for valid values for ``<tag>``)


.. |downloads_seqmap| image:: https://img.shields.io/conda/dn/bioconda/seqmap.svg?style=flat
   :target: https://anaconda.org/bioconda/seqmap
   :alt:   (downloads)
.. |docker_seqmap| image:: https://quay.io/repository/biocontainers/seqmap/status
   :target: https://quay.io/repository/biocontainers/seqmap
.. _`seqmap/tags`: https://quay.io/repository/biocontainers/seqmap?tab=tags


.. raw:: html

    <script>
        var package = "seqmap";
        var versions = ["1.0.13","1.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqmap/README.html