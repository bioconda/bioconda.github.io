:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hitac'
.. highlight: bash

hitac
=====

.. conda:recipe:: hitac
   :replaces_section_title:
   :noindex:

   A hierarchical taxonomy classifier for fungal ITS sequences

   :homepage: https://gitlab.com/dacs-hpi/hitac
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`hitac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitac/meta.yaml>`_
   :links: biotools: :biotools:`hitac`

   


.. conda:package:: hitac

   |downloads_hitac| |docker_hitac|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends biopython: 
   :depends numpy: ``>=1.13.3``
   :depends pandas: 
   :depends python: ``>=3``
   :depends scikit-learn: ``>=0.21.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hitac

   and update with::

      conda update hitac

   or use the docker container::

      docker pull quay.io/biocontainers/hitac:<tag>

   (see `hitac/tags`_ for valid values for ``<tag>``)


.. |downloads_hitac| image:: https://img.shields.io/conda/dn/bioconda/hitac.svg?style=flat
   :target: https://anaconda.org/bioconda/hitac
   :alt:   (downloads)
.. |docker_hitac| image:: https://quay.io/repository/biocontainers/hitac/status
   :target: https://quay.io/repository/biocontainers/hitac
.. _`hitac/tags`: https://quay.io/repository/biocontainers/hitac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hitac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hitac/README.html