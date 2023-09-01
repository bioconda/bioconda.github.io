:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'whokaryote'
.. highlight: bash

whokaryote
==========

.. conda:recipe:: whokaryote
   :replaces_section_title:
   :noindex:

   Classify metagenomic contigs as eukaryotic or prokaryotic

   :homepage: https://github.com/LottePronk/whokaryote
   :developer docs: https://git.wageningenur.nl/lotte.pronk/whokaryote
   :license: GPL / AGPL-3.0
   :recipe: /`whokaryote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whokaryote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whokaryote/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1099/mgen.0.000823`

   Whokaryote uses a random forest classifier that uses gene\-structure based
   features and optionally Tiara predictions to predict whether a contig is
   from a eukaryote or from a prokaryote. You can use Whokaryote to determine
   which contigs need eukaryotic gene prediction and which need prokaryotic
   gene prediction.



.. conda:package:: whokaryote

   |downloads_whokaryote| |docker_whokaryote|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends biopython: 
   :depends joblib: 
   :depends numpy: ``1.19.4.*``
   :depends pandas: 
   :depends pathlib: 
   :depends prodigal: 
   :depends python: ``3.8.*``
   :depends scikit-learn: ``1.0.2.*``
   :depends tiara: 
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

      mamba install whokaryote

   and update with::

      mamba update whokaryote

  To create a new environment, run::

      mamba create --name myenvname whokaryote

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/whokaryote:<tag>

   (see `whokaryote/tags`_ for valid values for ``<tag>``)


.. |downloads_whokaryote| image:: https://img.shields.io/conda/dn/bioconda/whokaryote.svg?style=flat
   :target: https://anaconda.org/bioconda/whokaryote
   :alt:   (downloads)
.. |docker_whokaryote| image:: https://quay.io/repository/biocontainers/whokaryote/status
   :target: https://quay.io/repository/biocontainers/whokaryote
.. _`whokaryote/tags`: https://quay.io/repository/biocontainers/whokaryote?tab=tags


.. raw:: html

    <script>
        var package = "whokaryote";
        var versions = ["1.1.2","1.1.1","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whokaryote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whokaryote/README.html