:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'getorganelle'
.. highlight: bash

getorganelle
============

.. conda:recipe:: getorganelle
   :replaces_section_title:
   :noindex:

   Get organelle genomes from genome skimming data

   :homepage: http://github.com/Kinggerm/GetOrganelle
   :license: GPL3
   :recipe: /`getorganelle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/getorganelle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/getorganelle/meta.yaml>`_

   


.. conda:package:: getorganelle

   |downloads_getorganelle| |docker_getorganelle|

   :versions:
      
      

      ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.4-1``,  ``1.6.4-0``

      

   
   :depends blast: ``>=2.3``
   :depends bowtie2: ``>=2.3``
   :depends numpy: ``>=1.16.4``
   :depends perl: 
   :depends pigz: 
   :depends python: 
   :depends requests: 
   :depends scipy: ``>=1.3.0``
   :depends spades: ``>=3.9,<=3.13.0``
   :depends sympy: ``>=1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install getorganelle

   and update with::

      conda update getorganelle

   or use the docker container::

      docker pull quay.io/biocontainers/getorganelle:<tag>

   (see `getorganelle/tags`_ for valid values for ``<tag>``)


.. |downloads_getorganelle| image:: https://img.shields.io/conda/dn/bioconda/getorganelle.svg?style=flat
   :target: https://anaconda.org/bioconda/getorganelle
   :alt:   (downloads)
.. |docker_getorganelle| image:: https://quay.io/repository/biocontainers/getorganelle/status
   :target: https://quay.io/repository/biocontainers/getorganelle
.. _`getorganelle/tags`: https://quay.io/repository/biocontainers/getorganelle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/getorganelle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/getorganelle/README.html