:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minialign'
.. highlight: bash

minialign
=========

.. conda:recipe:: minialign
   :replaces_section_title:
   :noindex:

   Fast and accurate alignment tool for PacBio and Nanopore long reads.

   :homepage: https://github.com/ocxtal/minialign
   :documentation: https://github.com/ocxtal/minialign/blob/0.6.0/README.md
   
   :license: MIT / MIT
   :recipe: /`minialign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minialign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minialign/meta.yaml>`_

   Minialign is a little bit fast and moderately accurate nucleotide sequence
   alignment tool designed for PacBio and Nanopore long reads. It is built on
   three key algorithms\, minimizer\-based index of the minimap overlapper\,
   array\-based seed chaining\, and SIMD\-parallel Smith\-Waterman\-Gotoh extension.



.. conda:package:: minialign

   |downloads_minialign| |docker_minialign|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.0-0``,  ``0.3.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install minialign

   and update with::

      mamba update minialign

  To create a new environment, run::

      mamba create --name myenvname minialign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minialign:<tag>

   (see `minialign/tags`_ for valid values for ``<tag>``)


.. |downloads_minialign| image:: https://img.shields.io/conda/dn/bioconda/minialign.svg?style=flat
   :target: https://anaconda.org/bioconda/minialign
   :alt:   (downloads)
.. |docker_minialign| image:: https://quay.io/repository/biocontainers/minialign/status
   :target: https://quay.io/repository/biocontainers/minialign
.. _`minialign/tags`: https://quay.io/repository/biocontainers/minialign?tab=tags


.. raw:: html

    <script>
        var package = "minialign";
        var versions = ["0.6.0","0.5.3","0.5.3","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minialign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minialign/README.html