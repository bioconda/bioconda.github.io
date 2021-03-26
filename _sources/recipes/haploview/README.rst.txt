:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploview'
.. highlight: bash

haploview
=========

.. conda:recipe:: haploview
   :replaces_section_title:
   :noindex:

   Haploview is designed to simplify and expedite the process of haplotype analysis by 
   providing a common interface to several tasks relating to such analyses.


   :homepage: https://www.broadinstitute.org/haploview/haploview
   :license: MIT
   :recipe: /`haploview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploview/meta.yaml>`_
   :links: biotools: :biotools:`haploview`, doi: :doi:`10.1093/bioinformatics/bth457`

   


.. conda:package:: haploview

   |downloads_haploview| |docker_haploview|

   :versions:
      
      

      ``4.2-1``,  ``4.2-0``

      

   
   :depends openjdk: ``>=6``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haploview

   and update with::

      conda update haploview

   or use the docker container::

      docker pull quay.io/biocontainers/haploview:<tag>

   (see `haploview/tags`_ for valid values for ``<tag>``)


.. |downloads_haploview| image:: https://img.shields.io/conda/dn/bioconda/haploview.svg?style=flat
   :target: https://anaconda.org/bioconda/haploview
   :alt:   (downloads)
.. |docker_haploview| image:: https://quay.io/repository/biocontainers/haploview/status
   :target: https://quay.io/repository/biocontainers/haploview
.. _`haploview/tags`: https://quay.io/repository/biocontainers/haploview?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploview/README.html