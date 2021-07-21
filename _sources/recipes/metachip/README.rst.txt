:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metachip'
.. highlight: bash

metachip
========

.. conda:recipe:: metachip
   :replaces_section_title:
   :noindex:

   HGT detection pipeline

   :homepage: https://github.com/songweizhi/MetaCHIP
   :license: GPL3 / GPL3+
   :recipe: /`metachip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metachip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metachip/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-019-0649-y`

   


.. conda:package:: metachip

   |downloads_metachip| |docker_metachip|

   :versions:
      
      

      ``1.10.5-0``,  ``1.10.4-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.0-0``

      

   
   :depends biopython: ``<=1.77``
   :depends blast: 
   :depends ete3: 
   :depends fasttree: 
   :depends hmmer: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends prodigal: 
   :depends python: 
   :depends r-ape: 
   :depends r-base: 
   :depends r-circlize: 
   :depends r-optparse: 
   :depends reportlab: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metachip

   and update with::

      conda update metachip

   or use the docker container::

      docker pull quay.io/biocontainers/metachip:<tag>

   (see `metachip/tags`_ for valid values for ``<tag>``)


.. |downloads_metachip| image:: https://img.shields.io/conda/dn/bioconda/metachip.svg?style=flat
   :target: https://anaconda.org/bioconda/metachip
   :alt:   (downloads)
.. |docker_metachip| image:: https://quay.io/repository/biocontainers/metachip/status
   :target: https://quay.io/repository/biocontainers/metachip
.. _`metachip/tags`: https://quay.io/repository/biocontainers/metachip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metachip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metachip/README.html