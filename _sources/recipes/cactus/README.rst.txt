:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cactus'
.. highlight: bash

cactus
======

.. conda:recipe:: cactus
   :replaces_section_title:
   :noindex:

   Cactus is a reference\-free whole\-genome multiple alignment program based upon notion of Cactus graphs

   :homepage: https://github.com/ComparativeGenomicsToolkit/cactus
   :license: https://github.com/ComparativeGenomicsToolkit/cactus/blob/master/LICENSE.txt
   :recipe: /`cactus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus/meta.yaml>`_

   


.. conda:package:: cactus

   |downloads_cactus| |docker_cactus|

   :versions:
      
      

      ``2019.03.01-1``,  ``2019.03.01-0``,  ``0.0.2019.03.01-2``

      

   
   :depends biopython: 
   :depends cython: 
   :depends decorator: 
   :depends jobtree: 
   :depends kyototycoon: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends networkx: ``1.11.*``
   :depends openssl: ``1.0.2.*``
   :depends psutil: 
   :depends python: ``2.7.*``
   :depends sonlib: 
   :depends subprocess32: 
   :depends toil: ``3.14.0.*``
   :depends ucsc-bedsort: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-bigbedtobed: 
   :depends ucsc-fatotwobit: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cactus

   and update with::

      conda update cactus

   or use the docker container::

      docker pull quay.io/biocontainers/cactus:<tag>

   (see `cactus/tags`_ for valid values for ``<tag>``)


.. |downloads_cactus| image:: https://img.shields.io/conda/dn/bioconda/cactus.svg?style=flat
   :target: https://anaconda.org/bioconda/cactus
   :alt:   (downloads)
.. |docker_cactus| image:: https://quay.io/repository/biocontainers/cactus/status
   :target: https://quay.io/repository/biocontainers/cactus
.. _`cactus/tags`: https://quay.io/repository/biocontainers/cactus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cactus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cactus/README.html