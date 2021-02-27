:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mygene'
.. highlight: bash

mygene
======

.. conda:recipe:: mygene
   :replaces_section_title:
   :noindex:

   Python Client for MyGene.Info services.

   :homepage: https://github.com/suLab/mygene.py
   :license: BSD / BSD License
   :recipe: /`mygene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mygene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mygene/meta.yaml>`_

   


.. conda:package:: mygene

   |downloads_mygene| |docker_mygene|

   :versions:
      
      

      ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-2``,  ``3.0.0-0``,  ``2.2.0-0``

      

   
   :depends biothings_client: ``>=0.2.0``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mygene

   and update with::

      conda update mygene

   or use the docker container::

      docker pull quay.io/biocontainers/mygene:<tag>

   (see `mygene/tags`_ for valid values for ``<tag>``)


.. |downloads_mygene| image:: https://img.shields.io/conda/dn/bioconda/mygene.svg?style=flat
   :target: https://anaconda.org/bioconda/mygene
   :alt:   (downloads)
.. |docker_mygene| image:: https://quay.io/repository/biocontainers/mygene/status
   :target: https://quay.io/repository/biocontainers/mygene
.. _`mygene/tags`: https://quay.io/repository/biocontainers/mygene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mygene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mygene/README.html