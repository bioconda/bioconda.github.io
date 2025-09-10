:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyling'
.. highlight: bash

phyling
=======

.. conda:recipe:: phyling
   :replaces_section_title:
   :noindex:

   A phylogenetic inference tool based on protein\-coding genomic sequences

   :homepage: https://github.com/stajichlab/Phyling
   :documentation: https://github.com/stajichlab/Phyling/blob/v2.3.1/README.md
   
   :license: MIT / MIT
   :recipe: /`phyling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyling/meta.yaml>`_

   Phyling is a fast\, scalable\, and user\-friendly tool supporting phylogenomic reconstruction of species phylogenies directly
   from protein\-encoded genomic data. It identifies orthologous genes by searching a sample\'s protein sequences against a Hidden
   Markov Models marker set\, containing single\-copy orthologs\, retrieved from the BUSCO database. In the final step\, users can
   choose between consensus and concatenation strategies to construct the species tree from the aligned orthologs.



.. conda:package:: phyling

   |downloads_phyling| |docker_phyling|

   :versions:
      
      

      ``2.3.1-0``,  ``2.3.0-0``

      

   
   :depends aster: ``>=1.19``
   :depends biopython: ``>=1.81``
   :depends clipkit: ``>=2.1.1``
   :depends fasttree: ``>=2.1.1``
   :depends iqtree: ``>=2.4.0,<3.0``
   :depends matplotlib-base: ``>=3.5.3``
   :depends muscle: ``>=5.3``
   :depends numpy: ``>=2.0.2``
   :depends phykit: ``>=2.0.1``
   :depends pyfaidx: ``>=0.8.1.3``
   :depends pyhmmer: ``>=0.11.0``
   :depends python: ``>=3.9``
   :depends raxml-ng: ``>=1.2.2``
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

      mamba install phyling

   and update with::

      mamba update phyling

  To create a new environment, run::

      mamba create --name myenvname phyling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phyling:<tag>

   (see `phyling/tags`_ for valid values for ``<tag>``)


.. |downloads_phyling| image:: https://img.shields.io/conda/dn/bioconda/phyling.svg?style=flat
   :target: https://anaconda.org/bioconda/phyling
   :alt:   (downloads)
.. |docker_phyling| image:: https://quay.io/repository/biocontainers/phyling/status
   :target: https://quay.io/repository/biocontainers/phyling
.. _`phyling/tags`: https://quay.io/repository/biocontainers/phyling?tab=tags


.. raw:: html

    <script>
        var package = "phyling";
        var versions = ["2.3.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyling/README.html