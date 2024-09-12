:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sam2pairwise'
.. highlight: bash

sam2pairwise
============

.. conda:recipe:: sam2pairwise
   :replaces_section_title:
   :noindex:

   sam2pairwise takes a SAM file and uses the CIGAR and MD tag to reconstruct the pairwise alignment of each read

   :homepage: https://github.com/mlafave/sam2pairwise
   :documentation: https://github.com/mlafave/sam2pairwise/blob/master/README.md
   
   :license: MIT
   :recipe: /`sam2pairwise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2pairwise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2pairwise/meta.yaml>`_

   


.. conda:package:: sam2pairwise

   |downloads_sam2pairwise| |docker_sam2pairwise|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install sam2pairwise

   and update with::

      mamba update sam2pairwise

  To create a new environment, run::

      mamba create --name myenvname sam2pairwise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sam2pairwise:<tag>

   (see `sam2pairwise/tags`_ for valid values for ``<tag>``)


.. |downloads_sam2pairwise| image:: https://img.shields.io/conda/dn/bioconda/sam2pairwise.svg?style=flat
   :target: https://anaconda.org/bioconda/sam2pairwise
   :alt:   (downloads)
.. |docker_sam2pairwise| image:: https://quay.io/repository/biocontainers/sam2pairwise/status
   :target: https://quay.io/repository/biocontainers/sam2pairwise
.. _`sam2pairwise/tags`: https://quay.io/repository/biocontainers/sam2pairwise?tab=tags


.. raw:: html

    <script>
        var package = "sam2pairwise";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sam2pairwise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sam2pairwise/README.html