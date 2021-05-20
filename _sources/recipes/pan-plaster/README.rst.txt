:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pan-plaster'
.. highlight: bash

pan-plaster
===========

.. conda:recipe:: pan-plaster
   :replaces_section_title:
   :noindex:

   Plaster is a program for quick linear pangenome construction.

   :homepage: https://gitlab.com/treangenlab/plaster
   :license: MIT
   :recipe: /`pan-plaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pan-plaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pan-plaster/meta.yaml>`_

   


.. conda:package:: pan-plaster

   |downloads_pan-plaster| |docker_pan-plaster|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends mummer4: 
   :depends python: ``>=3``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pan-plaster

   and update with::

      conda update pan-plaster

   or use the docker container::

      docker pull quay.io/biocontainers/pan-plaster:<tag>

   (see `pan-plaster/tags`_ for valid values for ``<tag>``)


.. |downloads_pan-plaster| image:: https://img.shields.io/conda/dn/bioconda/pan-plaster.svg?style=flat
   :target: https://anaconda.org/bioconda/pan-plaster
   :alt:   (downloads)
.. |docker_pan-plaster| image:: https://quay.io/repository/biocontainers/pan-plaster/status
   :target: https://quay.io/repository/biocontainers/pan-plaster
.. _`pan-plaster/tags`: https://quay.io/repository/biocontainers/pan-plaster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pan-plaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pan-plaster/README.html