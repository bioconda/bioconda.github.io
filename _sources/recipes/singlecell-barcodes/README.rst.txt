:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'singlecell-barcodes'
.. highlight: bash

singlecell-barcodes
===================

.. conda:recipe:: singlecell-barcodes
   :replaces_section_title:
   :noindex:

   whitelisted singlecell barcodes and information regarding where molecular\/sample\/cellular barcodes are in each read\, for various singlecell protocols

   :homepage: https://github.com/roryk/singlecell-barcodes
   :license: MIT
   :recipe: /`singlecell-barcodes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlecell-barcodes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlecell-barcodes/meta.yaml>`_

   


.. conda:package:: singlecell-barcodes

   |downloads_singlecell-barcodes| |docker_singlecell-barcodes|

   :versions:
      
      

      ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1-1``

      

   
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

      mamba install singlecell-barcodes

   and update with::

      mamba update singlecell-barcodes

  To create a new environment, run::

      mamba create --name myenvname singlecell-barcodes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/singlecell-barcodes:<tag>

   (see `singlecell-barcodes/tags`_ for valid values for ``<tag>``)


.. |downloads_singlecell-barcodes| image:: https://img.shields.io/conda/dn/bioconda/singlecell-barcodes.svg?style=flat
   :target: https://anaconda.org/bioconda/singlecell-barcodes
   :alt:   (downloads)
.. |docker_singlecell-barcodes| image:: https://quay.io/repository/biocontainers/singlecell-barcodes/status
   :target: https://quay.io/repository/biocontainers/singlecell-barcodes
.. _`singlecell-barcodes/tags`: https://quay.io/repository/biocontainers/singlecell-barcodes?tab=tags


.. raw:: html

    <script>
        var package = "singlecell-barcodes";
        var versions = ["0.2","0.2","0.2","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/singlecell-barcodes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/singlecell-barcodes/README.html