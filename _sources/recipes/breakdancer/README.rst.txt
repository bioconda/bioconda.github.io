:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakdancer'
.. highlight: bash

breakdancer
===========

.. conda:recipe:: breakdancer
   :replaces_section_title:
   :noindex:

   SV detection from paired end reads mapping

   :homepage: https://github.com/genome/breakdancer
   :license: GPLv3
   :recipe: /`breakdancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakdancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakdancer/meta.yaml>`_
   :links: biotools: :biotools:`breakdancer`

   


.. conda:package:: breakdancer

   |downloads_breakdancer| |docker_breakdancer|

   :versions:
      
      

      ``1.4.5-2``,  ``1.4.5-1``,  ``1.4.5-0``

      

   
   :depends libgcc: 
   :depends perl-gdgraph-histogram: 
   :depends perl-math-cdf: 
   :depends perl-statistics-descriptive: 
   :depends zlib: ``1.2.11*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install breakdancer

   and update with::

      conda update breakdancer

   or use the docker container::

      docker pull quay.io/biocontainers/breakdancer:<tag>

   (see `breakdancer/tags`_ for valid values for ``<tag>``)


.. |downloads_breakdancer| image:: https://img.shields.io/conda/dn/bioconda/breakdancer.svg?style=flat
   :target: https://anaconda.org/bioconda/breakdancer
   :alt:   (downloads)
.. |docker_breakdancer| image:: https://quay.io/repository/biocontainers/breakdancer/status
   :target: https://quay.io/repository/biocontainers/breakdancer
.. _`breakdancer/tags`: https://quay.io/repository/biocontainers/breakdancer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakdancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakdancer/README.html