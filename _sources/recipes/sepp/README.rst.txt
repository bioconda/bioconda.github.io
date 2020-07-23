:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sepp'
.. highlight: bash

sepp
====

.. conda:recipe:: sepp
   :replaces_section_title:
   :noindex:

   SATe\-enabled phylogenetic placement

   :homepage: https://github.com/smirarab/sepp
   :license: GPL3 / GPLv3
   :recipe: /`sepp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp/meta.yaml>`_
   :links: biotools: :biotools:`sepp`

   


.. conda:package:: sepp

   |downloads_sepp| |docker_sepp|

   :versions:
      
      

      ``4.3.10-2``,  ``4.3.10-0``,  ``4.3.9-0``,  ``4.3.8-0``

      

   
   :depends dendropy: 
   :depends hmmer: ``3.1b2``
   :depends openjdk: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sepp

   and update with::

      conda update sepp

   or use the docker container::

      docker pull quay.io/biocontainers/sepp:<tag>

   (see `sepp/tags`_ for valid values for ``<tag>``)


.. |downloads_sepp| image:: https://img.shields.io/conda/dn/bioconda/sepp.svg?style=flat
   :target: https://anaconda.org/bioconda/sepp
   :alt:   (downloads)
.. |docker_sepp| image:: https://quay.io/repository/biocontainers/sepp/status
   :target: https://quay.io/repository/biocontainers/sepp
.. _`sepp/tags`: https://quay.io/repository/biocontainers/sepp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sepp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sepp/README.html