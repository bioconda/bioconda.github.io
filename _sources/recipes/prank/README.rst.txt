:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prank'
.. highlight: bash

prank
=====

.. conda:recipe:: prank
   :replaces_section_title:

   PRANK is a probabilistic multiple alignment program for DNA\, codon and amino\-acid sequences.

   :homepage: http://wasabiapp.org/software/prank/
   :license: GPL-3
   :recipe: /`prank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prank/meta.yaml>`_
   :links: biotools: :biotools:`prank`, doi: :doi:`10.1007/978-1-62703-646-7_10`

   


.. conda:package:: prank

   |downloads_prank| |docker_prank|

   :versions: v.170427-2, v.170427-1, v.170427-0, v.150803-0
   
   :depends libcxx: >=4.0.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prank

   and update with::

      conda update prank

   or use the docker container::

      docker pull quay.io/biocontainers/prank:<tag>

   (see `prank/tags`_ for valid values for ``<tag>``)


.. |downloads_prank| image:: https://img.shields.io/conda/dn/bioconda/prank.svg?style=flat
   :alt:   (downloads)
.. |docker_prank| image:: https://quay.io/repository/biocontainers/prank/status
   :target: https://quay.io/repository/biocontainers/prank
.. _`prank/tags`: https://quay.io/repository/biocontainers/prank?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prank/README.html