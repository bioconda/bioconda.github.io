:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitgard'
.. highlight: bash

mitgard
=======

.. conda:recipe:: mitgard
   :replaces_section_title:
   :noindex:

   Mitochondrial Genome Assembly from RNA\-seq Data.

   :homepage: https://github.com/pedronachtigall/MITGARD
   :license: GPLv3
   :recipe: /`mitgard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitgard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitgard/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1093/bib/bbaa429`

   


.. conda:package:: mitgard

   |downloads_mitgard| |docker_mitgard|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends biopython: ``1.69.*``
   :depends bowtie2: ``2.3.*``
   :depends minimap2: ``2.17.*``
   :depends python: ``>=3.6``
   :depends samtools: ``1.9.*``
   :depends spades: ``3.13.1.*``
   :depends trinity: ``2.8.5.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mitgard

   and update with::

      conda update mitgard

   or use the docker container::

      docker pull quay.io/biocontainers/mitgard:<tag>

   (see `mitgard/tags`_ for valid values for ``<tag>``)


.. |downloads_mitgard| image:: https://img.shields.io/conda/dn/bioconda/mitgard.svg?style=flat
   :target: https://anaconda.org/bioconda/mitgard
   :alt:   (downloads)
.. |docker_mitgard| image:: https://quay.io/repository/biocontainers/mitgard/status
   :target: https://quay.io/repository/biocontainers/mitgard
.. _`mitgard/tags`: https://quay.io/repository/biocontainers/mitgard?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitgard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitgard/README.html