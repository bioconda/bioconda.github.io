:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagene_annotator'
.. highlight: bash

metagene_annotator
==================

.. conda:recipe:: metagene_annotator
   :replaces_section_title:
   :noindex:

   MetaGeneAnnotator is a gene\-finding program for prokaryote and phage

   :homepage: http://metagene.nig.ac.jp/
   :license: The software is freely available for academic use
   :recipe: /`metagene_annotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagene_annotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagene_annotator/meta.yaml>`_

   


.. conda:package:: metagene_annotator

   |downloads_metagene_annotator| |docker_metagene_annotator|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metagene_annotator

   and update with::

      conda update metagene_annotator

   or use the docker container::

      docker pull quay.io/biocontainers/metagene_annotator:<tag>

   (see `metagene_annotator/tags`_ for valid values for ``<tag>``)


.. |downloads_metagene_annotator| image:: https://img.shields.io/conda/dn/bioconda/metagene_annotator.svg?style=flat
   :target: https://anaconda.org/bioconda/metagene_annotator
   :alt:   (downloads)
.. |docker_metagene_annotator| image:: https://quay.io/repository/biocontainers/metagene_annotator/status
   :target: https://quay.io/repository/biocontainers/metagene_annotator
.. _`metagene_annotator/tags`: https://quay.io/repository/biocontainers/metagene_annotator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagene_annotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagene_annotator/README.html