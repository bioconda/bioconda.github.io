:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'debwt'
.. highlight: bash

debwt
=====

.. conda:recipe:: debwt
   :replaces_section_title:
   :noindex:

   A efficient method to construct BWT index of a given DNA sequence\, especially
   useful for gigantic and high similar genome.
   DeBWT has good scalability to construct BWT in parallel computing.
   It is well\-suited to run on multiple core servers or clusters to
   construct the BWT of large collections of genome sequences.

   :homepage: https://github.com/DixianZhu/deBWT
   :license: Unknown
   :recipe: /`debwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debwt/meta.yaml>`_

   


.. conda:package:: debwt

   |downloads_debwt| |docker_debwt|

   :versions:
      
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install debwt

   and update with::

      conda update debwt

   or use the docker container::

      docker pull quay.io/biocontainers/debwt:<tag>

   (see `debwt/tags`_ for valid values for ``<tag>``)


.. |downloads_debwt| image:: https://img.shields.io/conda/dn/bioconda/debwt.svg?style=flat
   :target: https://anaconda.org/bioconda/debwt
   :alt:   (downloads)
.. |docker_debwt| image:: https://quay.io/repository/biocontainers/debwt/status
   :target: https://quay.io/repository/biocontainers/debwt
.. _`debwt/tags`: https://quay.io/repository/biocontainers/debwt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/debwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/debwt/README.html