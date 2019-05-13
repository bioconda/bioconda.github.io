:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cd-hit'
.. highlight: bash

cd-hit
======

.. conda:recipe:: cd-hit
   :replaces_section_title:

   Clusters and compares protein or nucleotide sequences

   :homepage: https://github.com/weizhongli/cdhit
   :license: GPLv2
   :recipe: /`cd-hit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit/meta.yaml>`_

   


.. conda:package:: cd-hit

   |downloads_cd-hit| |docker_cd-hit|

   :versions: 4.8.1-1, 4.8.1-0, 4.6.8-2, 4.6.8-1, 4.6.8-0, 4.6.6-0, 4.6.4-1, 4.6.4-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openmp: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cd-hit

   and update with::

      conda update cd-hit

   or use the docker container::

      docker pull quay.io/biocontainers/cd-hit:<tag>

   (see `cd-hit/tags`_ for valid values for ``<tag>``)


.. |downloads_cd-hit| image:: https://img.shields.io/conda/dn/bioconda/cd-hit.svg?style=flat
   :target: https://anaconda.org/bioconda/cd-hit
   :alt:   (downloads)
.. |docker_cd-hit| image:: https://quay.io/repository/biocontainers/cd-hit/status
   :target: https://quay.io/repository/biocontainers/cd-hit
.. _`cd-hit/tags`: https://quay.io/repository/biocontainers/cd-hit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cd-hit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cd-hit/README.html