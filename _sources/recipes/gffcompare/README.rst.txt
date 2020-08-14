:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffcompare'
.. highlight: bash

gffcompare
==========

.. conda:recipe:: gffcompare
   :replaces_section_title:
   :noindex:

   GffCompare by Geo Pertea

   :homepage: https://ccb.jhu.edu/software/stringtie/gffcompare.shtml
   :license: Artistic License 2.0
   :recipe: /`gffcompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffcompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffcompare/meta.yaml>`_
   :links: biotools: :biotools:`gffcompare`

   


.. conda:package:: gffcompare

   |downloads_gffcompare| |docker_gffcompare|

   :versions:
      
      

      ``0.11.2-1``,  ``0.11.2-0``,  ``0.10.6-0``,  ``0.9.8-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gffcompare

   and update with::

      conda update gffcompare

   or use the docker container::

      docker pull quay.io/biocontainers/gffcompare:<tag>

   (see `gffcompare/tags`_ for valid values for ``<tag>``)


.. |downloads_gffcompare| image:: https://img.shields.io/conda/dn/bioconda/gffcompare.svg?style=flat
   :target: https://anaconda.org/bioconda/gffcompare
   :alt:   (downloads)
.. |docker_gffcompare| image:: https://quay.io/repository/biocontainers/gffcompare/status
   :target: https://quay.io/repository/biocontainers/gffcompare
.. _`gffcompare/tags`: https://quay.io/repository/biocontainers/gffcompare?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffcompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffcompare/README.html