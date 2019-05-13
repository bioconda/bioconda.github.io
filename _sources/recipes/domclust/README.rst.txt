:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'domclust'
.. highlight: bash

domclust
========

.. conda:recipe:: domclust
   :replaces_section_title:

   Effective tool for orthologous grouping in multiple genomes

   :homepage: http://mbgd.genome.ad.jp/domclust/
   :license: GPL3
   :recipe: /`domclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domclust/meta.yaml>`_

   


.. conda:package:: domclust

   |downloads_domclust| |docker_domclust|

   :versions: 1.2.8a-1, 1.2.8a-0, 1.0-1, 1.0-0
   
   :depends libgcc-ng: >=4.9
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install domclust

   and update with::

      conda update domclust

   or use the docker container::

      docker pull quay.io/biocontainers/domclust:<tag>

   (see `domclust/tags`_ for valid values for ``<tag>``)


.. |downloads_domclust| image:: https://img.shields.io/conda/dn/bioconda/domclust.svg?style=flat
   :target: https://anaconda.org/bioconda/domclust
   :alt:   (downloads)
.. |docker_domclust| image:: https://quay.io/repository/biocontainers/domclust/status
   :target: https://quay.io/repository/biocontainers/domclust
.. _`domclust/tags`: https://quay.io/repository/biocontainers/domclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/domclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/domclust/README.html