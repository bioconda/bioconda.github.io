:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gamma'
.. highlight: bash

gamma
=====

.. conda:recipe:: gamma
   :replaces_section_title:
   :noindex:

   Tool for Gene Allele Mutation Microbial Assessment

   :homepage: https://github.com/rastanton/GAMMA
   :license: APACHE / Apache License 2.0
   :recipe: /`gamma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gamma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gamma/meta.yaml>`_

   


.. conda:package:: gamma

   |downloads_gamma| |docker_gamma|

   :versions:
      
      

      ``1.3-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends blat: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gamma

   and update with::

      conda update gamma

   or use the docker container::

      docker pull quay.io/biocontainers/gamma:<tag>

   (see `gamma/tags`_ for valid values for ``<tag>``)


.. |downloads_gamma| image:: https://img.shields.io/conda/dn/bioconda/gamma.svg?style=flat
   :target: https://anaconda.org/bioconda/gamma
   :alt:   (downloads)
.. |docker_gamma| image:: https://quay.io/repository/biocontainers/gamma/status
   :target: https://quay.io/repository/biocontainers/gamma
.. _`gamma/tags`: https://quay.io/repository/biocontainers/gamma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gamma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gamma/README.html