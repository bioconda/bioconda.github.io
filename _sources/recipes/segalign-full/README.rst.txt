:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segalign-full'
.. highlight: bash

segalign-full
=============

.. conda:recipe:: segalign-full
   :replaces_section_title:
   :noindex:

   SegAlign\: A Scalable GPU\-Based Whole Genome Aligner

   :homepage: https://github.com/galaxyproject/SegAlign
   :documentation: https://github.com/galaxyproject/SegAlign/blob/main/README.md
   
   :license: `MIT / MIT <https://github.com/galaxyproject/SegAlign/blob/main/LICENSE>`_
   :recipe: /`segalign-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segalign-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segalign-full/meta.yaml>`_
   :links: doi: :doi:`10.1109/SC41405.2020.00043`, doi: :doi:`10.5281/zenodo.3880947`

   SegAlign is a Scalable GPU System for Pairwise Whole Genome
   Alignments based on LASTZ\'s seed\-filter\-extend paradigm.



.. conda:package:: segalign-full

   |downloads_segalign-full| |docker_segalign-full|

   :versions:
      
      

      ``0.1.2.7-1``,  ``0.1.2.7-0``,  ``0.1.2.6-0``,  ``0.1.2.4-0``,  ``0.1.2.3-0``,  ``0.1.2.2-0``,  ``0.1.2.1-0``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends lastz: 
   :depends segalign: ``0.1.2.7.*``
   :depends ucsc-fatotwobit: 
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

      mamba install segalign-full

   and update with::

      mamba update segalign-full

  To create a new environment, run::

      mamba create --name myenvname segalign-full

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/segalign-full:<tag>

   (see `segalign-full/tags`_ for valid values for ``<tag>``)


.. |downloads_segalign-full| image:: https://img.shields.io/conda/dn/bioconda/segalign-full.svg?style=flat
   :target: https://anaconda.org/bioconda/segalign-full
   :alt:   (downloads)
.. |docker_segalign-full| image:: https://quay.io/repository/biocontainers/segalign-full/status
   :target: https://quay.io/repository/biocontainers/segalign-full
.. _`segalign-full/tags`: https://quay.io/repository/biocontainers/segalign-full?tab=tags


.. raw:: html

    <script>
        var package = "segalign-full";
        var versions = ["0.1.2.7","0.1.2.7","0.1.2.6","0.1.2.4","0.1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segalign-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segalign-full/README.html