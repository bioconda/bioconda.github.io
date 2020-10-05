:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidhawk'
.. highlight: bash

plasmidhawk
===========

.. conda:recipe:: plasmidhawk
   :replaces_section_title:
   :noindex:

   Plasmidhawk is a program for detecting lab\-of\-origin of input plasmids by building an annotated pangenome of training plasmids.

   :homepage: https://gitlab.com/treangenlab/plasmidhawk
   :license: MIT
   :recipe: /`plasmidhawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidhawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidhawk/meta.yaml>`_

   


.. conda:package:: plasmidhawk

   |downloads_plasmidhawk| |docker_plasmidhawk|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends biopython: 
   :depends mummer4: 
   :depends pan-plaster: ``1.1.2``
   :depends python: ``>=3``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plasmidhawk

   and update with::

      conda update plasmidhawk

   or use the docker container::

      docker pull quay.io/biocontainers/plasmidhawk:<tag>

   (see `plasmidhawk/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidhawk| image:: https://img.shields.io/conda/dn/bioconda/plasmidhawk.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidhawk
   :alt:   (downloads)
.. |docker_plasmidhawk| image:: https://quay.io/repository/biocontainers/plasmidhawk/status
   :target: https://quay.io/repository/biocontainers/plasmidhawk
.. _`plasmidhawk/tags`: https://quay.io/repository/biocontainers/plasmidhawk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidhawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidhawk/README.html