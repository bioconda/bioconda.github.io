:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scalop'
.. highlight: bash

scalop
======

.. conda:recipe:: scalop
   :replaces_section_title:
   :noindex:

   SCALOP \- Sequence\-based antibody Canonical LOoP structure annotation

   :homepage: https://github.com/oxpig/SCALOP
   :license: BSD / BSD-3-Clause
   :recipe: /`scalop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalop/meta.yaml>`_

   


.. conda:package:: scalop

   |downloads_scalop| |docker_scalop|

   :versions:
      
      

      ``2021.01.27-0``

      

   
   :depends biopython: 
   :depends hmmer: ``>=3.1``
   :depends numpy: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scalop

   and update with::

      conda update scalop

   or use the docker container::

      docker pull quay.io/biocontainers/scalop:<tag>

   (see `scalop/tags`_ for valid values for ``<tag>``)


.. |downloads_scalop| image:: https://img.shields.io/conda/dn/bioconda/scalop.svg?style=flat
   :target: https://anaconda.org/bioconda/scalop
   :alt:   (downloads)
.. |docker_scalop| image:: https://quay.io/repository/biocontainers/scalop/status
   :target: https://quay.io/repository/biocontainers/scalop
.. _`scalop/tags`: https://quay.io/repository/biocontainers/scalop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scalop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scalop/README.html