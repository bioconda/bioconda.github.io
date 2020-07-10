:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bmge'
.. highlight: bash

bmge
====

.. conda:recipe:: bmge
   :replaces_section_title:
   :noindex:

   BMGE \(Block Mapping and Gathering with Entropy\) is a program that selects
   regions in a multiple sequence alignment that are suited for phylogenetic inference.

   :homepage: https://bioweb.pasteur.fr/packages/pack@BMGE@1.12
   :documentation: http://gensoft.pasteur.fr/docs/BMGE/1.12/BMGE_doc.pdf
   
   :license: GPL2
   :recipe: /`bmge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmge/meta.yaml>`_

   


.. conda:package:: bmge

   |downloads_bmge| |docker_bmge|

   :versions:
      
      

      ``1.12-0``

      

   
   :depends openjdk: ``>=6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bmge

   and update with::

      conda update bmge

   or use the docker container::

      docker pull quay.io/biocontainers/bmge:<tag>

   (see `bmge/tags`_ for valid values for ``<tag>``)


.. |downloads_bmge| image:: https://img.shields.io/conda/dn/bioconda/bmge.svg?style=flat
   :target: https://anaconda.org/bioconda/bmge
   :alt:   (downloads)
.. |docker_bmge| image:: https://quay.io/repository/biocontainers/bmge/status
   :target: https://quay.io/repository/biocontainers/bmge
.. _`bmge/tags`: https://quay.io/repository/biocontainers/bmge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bmge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bmge/README.html