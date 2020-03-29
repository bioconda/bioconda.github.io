:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clame'
.. highlight: bash

clame
=====

.. conda:recipe:: clame
   :replaces_section_title:

   CLAME is a binning software for metagenomic reads. It immplements a fm\-index search algorithm for nucleotide sequence alignment. Then it uses strongly connected component strategy to bin sequences with similar DNA composition.

   :homepage: https://github.com/andvides/CLAME
   :license: GPL / GPL-3.0
   :recipe: /`clame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clame/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-018-5191-y`

   


.. conda:package:: clame

   |downloads_clame| |docker_clame|

   :versions: 1.0-0
   
   :depends _openmp_mutex: >=4.5
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clame

   and update with::

      conda update clame

   or use the docker container::

      docker pull quay.io/biocontainers/clame:<tag>

   (see `clame/tags`_ for valid values for ``<tag>``)


.. |downloads_clame| image:: https://img.shields.io/conda/dn/bioconda/clame.svg?style=flat
   :target: https://anaconda.org/bioconda/clame
   :alt:   (downloads)
.. |docker_clame| image:: https://quay.io/repository/biocontainers/clame/status
   :target: https://quay.io/repository/biocontainers/clame
.. _`clame/tags`: https://quay.io/repository/biocontainers/clame?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clame/README.html