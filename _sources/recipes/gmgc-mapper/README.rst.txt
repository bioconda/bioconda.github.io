:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmgc-mapper'
.. highlight: bash

gmgc-mapper
===========

.. conda:recipe:: gmgc-mapper
   :replaces_section_title:
   :noindex:

   Map genes and genome to the Global Microbial Gene Catalog \(GMGC\)

   :homepage: https://github.com/BigDataBiology/GMGC-mapper
   :license: MIT / MIT
   :recipe: /`gmgc-mapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmgc-mapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmgc-mapper/meta.yaml>`_

   


.. conda:package:: gmgc-mapper

   |downloads_gmgc-mapper| |docker_gmgc-mapper|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends atomicwrites: 
   :depends biopython: 
   :depends numpy: 
   :depends prodigal: 
   :depends python: 
   :depends pyyaml: 
   :depends scikit-bio: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gmgc-mapper

   and update with::

      conda update gmgc-mapper

   or use the docker container::

      docker pull quay.io/biocontainers/gmgc-mapper:<tag>

   (see `gmgc-mapper/tags`_ for valid values for ``<tag>``)


.. |downloads_gmgc-mapper| image:: https://img.shields.io/conda/dn/bioconda/gmgc-mapper.svg?style=flat
   :target: https://anaconda.org/bioconda/gmgc-mapper
   :alt:   (downloads)
.. |docker_gmgc-mapper| image:: https://quay.io/repository/biocontainers/gmgc-mapper/status
   :target: https://quay.io/repository/biocontainers/gmgc-mapper
.. _`gmgc-mapper/tags`: https://quay.io/repository/biocontainers/gmgc-mapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmgc-mapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmgc-mapper/README.html