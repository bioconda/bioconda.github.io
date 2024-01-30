:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'last'
.. highlight: bash

last
====

.. conda:recipe:: last
   :replaces_section_title:
   :noindex:

   LAST finds \& aligns related regions of sequences.

   :homepage: https://gitlab.com/mcfrith/last
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`last <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/last>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/last/meta.yaml>`_
   :links: biotools: :biotools:`last`

   LAST finds \& aligns related regions of sequences. It is designed for moderately large data \(e.g. genomes\, DNA reads\, proteomes\).  It\'s especially good at\: finding rearrangements and recombinations\; finding DNA\-versus\-protein related regions\; unusual data like AT\-rich DNA\; sensitive DNA\-DNA search.


.. conda:package:: last

   |downloads_last| |docker_last|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1540-0</code>,  <code>1526-0</code>,  <code>1522-0</code>,  <code>1521-0</code>,  <code>1519-0</code>,  <code>1518-0</code>,  <code>1517-0</code>,  <code>1513-0</code>,  <code>1512-0</code>,  </span></summary>
      

      ``1540-0``,  ``1526-0``,  ``1522-0``,  ``1521-0``,  ``1519-0``,  ``1518-0``,  ``1517-0``,  ``1513-0``,  ``1512-0``,  ``1454-0``,  ``1453-2``,  ``1453-1``,  ``1453-0``,  ``1452-0``,  ``1450-0``,  ``1449-0``,  ``1448-0``,  ``1447-0``,  ``1445-0``,  ``1422-0``,  ``1420-0``,  ``1418-0``,  ``1411-1``,  ``1411-0``,  ``1410-0``,  ``1409-0``,  ``1407-1``,  ``1407-0``,  ``1406-1``,  ``1406-0``,  ``1389-0``,  ``1387-0``,  ``1356-0``,  ``1296-0``,  ``1293-0``,  ``1291-0``,  ``1282-0``,  ``1281-0``,  ``1270-0``,  ``1268-1``,  ``1268-0``,  ``1260-1``,  ``1260-0``,  ``1257-0``,  ``1256-0``,  ``1254-0``,  ``1250-0``,  ``1238-0``,  ``1219-0``,  ``1205-1``,  ``1205-0``,  ``1186-0``,  ``1060-0``,  ``1047-0``,  ``1021-0``,  ``992-0``,  ``982-0``,  ``963-1``,  ``963-0``,  ``941-2``,  ``941-0``,  ``876-0``,  ``874-5``,  ``874-4``,  ``874-3``,  ``874-2``,  ``874-1``,  ``874-0``,  ``847-0``,  ``719-2``,  ``719-1``,  ``638-6``,  ``638-5``,  ``638-4``,  ``638-3``,  ``638-2``,  ``638-1``,  ``490-7``,  ``490-6``,  ``490-5``,  ``490-4``,  ``490-3``,  ``490-2``,  ``490-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends parallel: 
   :depends pillow: 
   :depends python: 
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

      mamba install last

   and update with::

      mamba update last

  To create a new environment, run::

      mamba create --name myenvname last

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/last:<tag>

   (see `last/tags`_ for valid values for ``<tag>``)


.. |downloads_last| image:: https://img.shields.io/conda/dn/bioconda/last.svg?style=flat
   :target: https://anaconda.org/bioconda/last
   :alt:   (downloads)
.. |docker_last| image:: https://quay.io/repository/biocontainers/last/status
   :target: https://quay.io/repository/biocontainers/last
.. _`last/tags`: https://quay.io/repository/biocontainers/last?tab=tags


.. raw:: html

    <script>
        var package = "last";
        var versions = ["1540","1526","1522","1521","1519"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/last/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/last/README.html