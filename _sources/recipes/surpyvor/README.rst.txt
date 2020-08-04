:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'surpyvor'
.. highlight: bash

surpyvor
========

.. conda:recipe:: surpyvor
   :replaces_section_title:
   :noindex:

   Evaluating\, merging and plotting SV vcf files

   :homepage: https://github.com/wdecoster/surpyvor
   :license: MIT / MIT License
   :recipe: /`surpyvor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/surpyvor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/surpyvor/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.244939.118`

   


.. conda:package:: surpyvor

   |downloads_surpyvor| |docker_surpyvor|

   :versions:
      
      

      ``0.8.1-1``,  ``0.8.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends bcftools: 
   :depends cyvcf2: 
   :depends htslib: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends survivor: 
   :depends upsetplot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install surpyvor

   and update with::

      conda update surpyvor

   or use the docker container::

      docker pull quay.io/biocontainers/surpyvor:<tag>

   (see `surpyvor/tags`_ for valid values for ``<tag>``)


.. |downloads_surpyvor| image:: https://img.shields.io/conda/dn/bioconda/surpyvor.svg?style=flat
   :target: https://anaconda.org/bioconda/surpyvor
   :alt:   (downloads)
.. |docker_surpyvor| image:: https://quay.io/repository/biocontainers/surpyvor/status
   :target: https://quay.io/repository/biocontainers/surpyvor
.. _`surpyvor/tags`: https://quay.io/repository/biocontainers/surpyvor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/surpyvor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/surpyvor/README.html