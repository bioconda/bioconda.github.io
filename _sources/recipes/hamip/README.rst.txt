:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hamip'
.. highlight: bash

hamip
=====

.. conda:recipe:: hamip
   :replaces_section_title:
   :noindex:

   HaMiP is A scalable\, accurate\, and efficient solution for hydroxymethylation analysis of CMS\-IP data.

   :homepage: https://github.com/lijinbio/HaMiP
   :license: MIT / License :: OSI Approved :: MIT
   :recipe: /`hamip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamip/meta.yaml>`_

   


.. conda:package:: hamip

   |downloads_hamip| |docker_hamip|

   :versions:
      
      

      ``0.0.3.2-0``

      

   
   :depends bedtools: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-genefilter: 
   :depends gawk: 
   :depends matplotlib-base: 
   :depends moabs: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends r-base: ``>=4``
   :depends r-desctools: 
   :depends ucsc-fetchchromsizes: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hamip

   and update with::

      conda update hamip

   or use the docker container::

      docker pull quay.io/biocontainers/hamip:<tag>

   (see `hamip/tags`_ for valid values for ``<tag>``)


.. |downloads_hamip| image:: https://img.shields.io/conda/dn/bioconda/hamip.svg?style=flat
   :target: https://anaconda.org/bioconda/hamip
   :alt:   (downloads)
.. |docker_hamip| image:: https://quay.io/repository/biocontainers/hamip/status
   :target: https://quay.io/repository/biocontainers/hamip
.. _`hamip/tags`: https://quay.io/repository/biocontainers/hamip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hamip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hamip/README.html