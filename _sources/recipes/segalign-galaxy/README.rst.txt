:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segalign-galaxy'
.. highlight: bash

segalign-galaxy
===============

.. conda:recipe:: segalign-galaxy
   :replaces_section_title:
   :noindex:

   SegAlign\: A Scalable GPU\-Based Whole Genome Aligner

   :homepage: https://github.com/gsneha26/SegAlign
   :documentation: https://github.com/gsneha26/SegAlign/blob/main/README.md
   
   :developer docs: https://github.com/richard-burhans/SegAlign/blob/scoring/README.md
   :license: `MIT / MIT <https://github.com/gsneha26/SegAlign/blob/main/LICENSE>`_
   :recipe: /`segalign-galaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segalign-galaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segalign-galaxy/meta.yaml>`_
   :links: doi: :doi:`10.1109/SC41405.2020.00043`, doi: :doi:`10.5281/zenodo.3880947`

   SegAlign is a Scalable GPU System for Pairwise Whole Genome
   Alignments based on LASTZ\'s seed\-filter\-extend paradigm.



.. conda:package:: segalign-galaxy

   |downloads_segalign-galaxy| |docker_segalign-galaxy|

   :versions:
      
      

      ``0.1.2.7-1``,  ``0.1.2.7-0``

      

   
   :depends bashlex: 
   :depends gzip: 
   :depends python: ``3.12.*``
   :depends segalign-full: ``0.1.2.7.*``
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

      mamba install segalign-galaxy

   and update with::

      mamba update segalign-galaxy

  To create a new environment, run::

      mamba create --name myenvname segalign-galaxy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/segalign-galaxy:<tag>

   (see `segalign-galaxy/tags`_ for valid values for ``<tag>``)


.. |downloads_segalign-galaxy| image:: https://img.shields.io/conda/dn/bioconda/segalign-galaxy.svg?style=flat
   :target: https://anaconda.org/bioconda/segalign-galaxy
   :alt:   (downloads)
.. |docker_segalign-galaxy| image:: https://quay.io/repository/biocontainers/segalign-galaxy/status
   :target: https://quay.io/repository/biocontainers/segalign-galaxy
.. _`segalign-galaxy/tags`: https://quay.io/repository/biocontainers/segalign-galaxy?tab=tags


.. raw:: html

    <script>
        var package = "segalign-galaxy";
        var versions = ["0.1.2.7","0.1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segalign-galaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segalign-galaxy/README.html