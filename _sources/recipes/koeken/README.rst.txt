:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'koeken'
.. highlight: bash

koeken
======

.. conda:recipe:: koeken
   :replaces_section_title:
   :noindex:

   A Linear Discriminant Analysis \(LEfSe\) wrapper.

   :homepage: https://github.com/twbattaglia/koeken
   :license: MIT / MIT
   :recipe: /`koeken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/koeken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/koeken/meta.yaml>`_

   


.. conda:package:: koeken

   |downloads_koeken| |docker_koeken|

   :versions:
      
      

      ``0.2.6-1``,  ``0.2.6-0``

      

   
   :depends biopython: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends qiime: 
   :depends r-coin: 
   :depends r-gtools: 
   :depends r-klar: 
   :depends r-mass: 
   :depends r-modeltools: 
   :depends r-mvtnorm: 
   :depends r-optparse: 
   :depends r-survival: 
   :depends rpy2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install koeken

   and update with::

      conda update koeken

   or use the docker container::

      docker pull quay.io/biocontainers/koeken:<tag>

   (see `koeken/tags`_ for valid values for ``<tag>``)


.. |downloads_koeken| image:: https://img.shields.io/conda/dn/bioconda/koeken.svg?style=flat
   :target: https://anaconda.org/bioconda/koeken
   :alt:   (downloads)
.. |docker_koeken| image:: https://quay.io/repository/biocontainers/koeken/status
   :target: https://quay.io/repository/biocontainers/koeken
.. _`koeken/tags`: https://quay.io/repository/biocontainers/koeken?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/koeken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/koeken/README.html