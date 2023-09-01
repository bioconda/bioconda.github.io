:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segmentation-fold'
.. highlight: bash

segmentation-fold
=================

.. conda:recipe:: segmentation-fold
   :replaces_section_title:
   :noindex:

   RNA\-Folding with predefined segments including K\-turns and loop\-E\-motifs

   :homepage: https://github.com/yhoogstrate/segmentation-fold
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`segmentation-fold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmentation-fold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmentation-fold/meta.yaml>`_

   


.. conda:package:: segmentation-fold

   |downloads_segmentation-fold| |docker_segmentation-fold|

   :versions:
      
      

      ``1.7.0-4``,  ``1.7.0-3``,  ``1.7.0-2``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.8-0``

      

   
   :depends boost: ``>=1.63.0,<1.63.1.0a0``
   :depends click: ``>=4.0``
   :depends htseq: ``>=0.6.1``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends pysam: ``>=0.8.1,<=0.8.3``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install segmentation-fold

   and update with::

      mamba update segmentation-fold

  To create a new environment, run::

      mamba create --name myenvname segmentation-fold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/segmentation-fold:<tag>

   (see `segmentation-fold/tags`_ for valid values for ``<tag>``)


.. |downloads_segmentation-fold| image:: https://img.shields.io/conda/dn/bioconda/segmentation-fold.svg?style=flat
   :target: https://anaconda.org/bioconda/segmentation-fold
   :alt:   (downloads)
.. |docker_segmentation-fold| image:: https://quay.io/repository/biocontainers/segmentation-fold/status
   :target: https://quay.io/repository/biocontainers/segmentation-fold
.. _`segmentation-fold/tags`: https://quay.io/repository/biocontainers/segmentation-fold?tab=tags


.. raw:: html

    <script>
        var package = "segmentation-fold";
        var versions = ["1.7.0","1.7.0","1.7.0","1.7.0","1.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segmentation-fold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segmentation-fold/README.html