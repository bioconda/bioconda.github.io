:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tmae'
.. highlight: bash

r-tmae
======

.. conda:recipe:: r-tmae
   :replaces_section_title:
   :noindex:

   Tests and visualizes for Mono\-allelic expressed variants.

   :homepage: https://github.com/mumichae/tMAE
   :license: MIT / MIT
   :recipe: /`r-tmae <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tmae>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tmae/meta.yaml>`_

   


.. conda:package:: r-tmae

   |downloads_r-tmae| |docker_r-tmae|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-genomicscores: 
   :depends bioconductor-iranges: 
   :depends bioconductor-s4vectors: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tmae

   and update with::

      conda update r-tmae

   or use the docker container::

      docker pull quay.io/biocontainers/r-tmae:<tag>

   (see `r-tmae/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tmae| image:: https://img.shields.io/conda/dn/bioconda/r-tmae.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tmae
   :alt:   (downloads)
.. |docker_r-tmae| image:: https://quay.io/repository/biocontainers/r-tmae/status
   :target: https://quay.io/repository/biocontainers/r-tmae
.. _`r-tmae/tags`: https://quay.io/repository/biocontainers/r-tmae?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tmae/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tmae/README.html