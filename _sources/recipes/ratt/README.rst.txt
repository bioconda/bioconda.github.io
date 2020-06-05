:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ratt'
.. highlight: bash

ratt
====

.. conda:recipe:: ratt
   :replaces_section_title:
   :noindex:

   Rapid Annotation Transfer Tool

   :homepage: http://ratt.sourceforge.net
   :license: GPL3
   :recipe: /`ratt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratt/meta.yaml>`_

   RATT is software to transfer annotation from a reference \(annotated\) genome to an unannotated query genome. It was first developed to transfer annotations between different genome assembly versions. However\, it can also transfer annotations between strains and even different species\, like Plasmodium chabaudi onto P. berghei\, between different Leishmania species or Salmonella enterica onto other Salmonella serotypes. RATT is able to transfer any entries present on a reference sequence\, such as the systematic id or an annotator\'s notes\; such information would be lost in a de novo annotation. 


.. conda:package:: ratt

   |downloads_ratt| |docker_ratt|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends mummer: 
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ratt

   and update with::

      conda update ratt

   or use the docker container::

      docker pull quay.io/biocontainers/ratt:<tag>

   (see `ratt/tags`_ for valid values for ``<tag>``)


.. |downloads_ratt| image:: https://img.shields.io/conda/dn/bioconda/ratt.svg?style=flat
   :target: https://anaconda.org/bioconda/ratt
   :alt:   (downloads)
.. |docker_ratt| image:: https://quay.io/repository/biocontainers/ratt/status
   :target: https://quay.io/repository/biocontainers/ratt
.. _`ratt/tags`: https://quay.io/repository/biocontainers/ratt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ratt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ratt/README.html