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
      
      

      ``2.1.1-0``,  ``2.1-0``,  ``1.2.6-3``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``

      

   
   :depends blis: 
   :depends curl: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libopenblas: ``>=0.3.21,<1.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends openssl: ``>=1.1.1s,<1.1.2a``
   :depends readline: ``>=8.1.2,<9.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapseq

   and update with::

      conda update mapseq

   or use the docker container::

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
        var versions = ["2.1.1","2.1","1.2.6","1.2.6","1.2.6"];
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