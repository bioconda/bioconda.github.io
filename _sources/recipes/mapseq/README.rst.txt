:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapseq'
.. highlight: bash

mapseq
======

.. conda:recipe:: mapseq
   :replaces_section_title:
   :noindex:

   Open source metagenomic 16S\/18S read classifier enabling comparative metagenomics.

   :homepage: https://github.com/jfmrod/MAPseq
   :license: GPL / dual-licensed under GPL-3.0+ or BSD 2-clause
   :recipe: /`mapseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapseq/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx517`

   


.. conda:package:: mapseq

   |downloads_mapseq| |docker_mapseq|

   :versions:
      
      

      ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.1b-0``,  ``2.1.1a-0``,  ``2.1-0``,  ``1.2.6-3``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``

      

   
   :depends blis: 
   :depends curl: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends libopenblas: ``>=0.3.23,<1.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends openssl: ``>=3.1.0,<4.0a0``
   :depends readline: ``>=8.2,<9.0a0``
   :depends zlib: 
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

      mamba install mapseq

   and update with::

      mamba update mapseq

  To create a new environment, run::

      mamba create --name myenvname mapseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mapseq:<tag>

   (see `mapseq/tags`_ for valid values for ``<tag>``)


.. |downloads_mapseq| image:: https://img.shields.io/conda/dn/bioconda/mapseq.svg?style=flat
   :target: https://anaconda.org/bioconda/mapseq
   :alt:   (downloads)
.. |docker_mapseq| image:: https://quay.io/repository/biocontainers/mapseq/status
   :target: https://quay.io/repository/biocontainers/mapseq
.. _`mapseq/tags`: https://quay.io/repository/biocontainers/mapseq?tab=tags


.. raw:: html

    <script>
        var package = "mapseq";
        var versions = ["2.1.1","2.1.1","2.1.1b","2.1.1a","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapseq/README.html