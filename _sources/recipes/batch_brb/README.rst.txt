:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'batch_brb'
.. highlight: bash

batch_brb
=========

.. conda:recipe:: batch_brb
   :replaces_section_title:
   :noindex:

   A tool for the automation of best reciprocal BLAST and phylogenetic analysis using FastTree.

   :homepage: https://github.com/erin-r-butterfield/batch_brb
   :license: GPL3
   :recipe: /`batch_brb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/batch_brb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/batch_brb/meta.yaml>`_

   


.. conda:package:: batch_brb

   |downloads_batch_brb| |docker_batch_brb|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends bash: ``>=5.0.018``
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.10.1``
   :depends fasttree: ``>=2.1.10``
   :depends muscle: ``>=3.8.1551``
   :depends numpy: ``>=1.19.2``
   :depends pandas: ``>=1.1.3``
   :depends perl-fast: 
   :depends python: ``>=3.8.6``
   :depends sed: ``>=4.8``
   :depends seqkit: ``>=0.13.2``
   :depends sqlite: ``>=3.33.0``
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

      mamba install batch_brb

   and update with::

      mamba update batch_brb

  To create a new environment, run::

      mamba create --name myenvname batch_brb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/batch_brb:<tag>

   (see `batch_brb/tags`_ for valid values for ``<tag>``)


.. |downloads_batch_brb| image:: https://img.shields.io/conda/dn/bioconda/batch_brb.svg?style=flat
   :target: https://anaconda.org/bioconda/batch_brb
   :alt:   (downloads)
.. |docker_batch_brb| image:: https://quay.io/repository/biocontainers/batch_brb/status
   :target: https://quay.io/repository/biocontainers/batch_brb
.. _`batch_brb/tags`: https://quay.io/repository/biocontainers/batch_brb?tab=tags


.. raw:: html

    <script>
        var package = "batch_brb";
        var versions = ["1.1.1","1.1","1.0.1","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/batch_brb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/batch_brb/README.html