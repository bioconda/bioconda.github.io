:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phynder'
.. highlight: bash

phynder
=======

.. conda:recipe:: phynder
   :replaces_section_title:
   :noindex:

   Efficient likelihood calculations to place samples into a phylogenetic tree.

   :homepage: https://github.com/richarddurbin/phynder
   :license: MIT / MIT
   :recipe: /`phynder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynder/meta.yaml>`_

   Efficient likelihood calculations to place samples into a phylogenetic tree. 
   In particular\, phynder was originally designed for placing male ancient DNA 
   samples into the Y chromosome phylogeny\, when there are arbitrarily high rates 
   of missing data. It has also been used for assigning ancient samples to whole 
   mitochondrial genome phylogenies.



.. conda:package:: phynder

   |downloads_phynder| |docker_phynder|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.8.0,<9.0a0``
   :depends libdeflate: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openssl: ``>=3.3.1,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install phynder

   and update with::

      mamba update phynder

  To create a new environment, run::

      mamba create --name myenvname phynder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phynder:<tag>

   (see `phynder/tags`_ for valid values for ``<tag>``)


.. |downloads_phynder| image:: https://img.shields.io/conda/dn/bioconda/phynder.svg?style=flat
   :target: https://anaconda.org/bioconda/phynder
   :alt:   (downloads)
.. |docker_phynder| image:: https://quay.io/repository/biocontainers/phynder/status
   :target: https://quay.io/repository/biocontainers/phynder
.. _`phynder/tags`: https://quay.io/repository/biocontainers/phynder?tab=tags


.. raw:: html

    <script>
        var package = "phynder";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phynder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phynder/README.html