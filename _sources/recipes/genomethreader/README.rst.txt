:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomethreader'
.. highlight: bash

genomethreader
==============

.. conda:recipe:: genomethreader
   :replaces_section_title:
   :noindex:

   GenomeThreader is a software tool to compute gene structure predictions. The gene structure predictions are calculated using a similarity\-based approach where additional cDNA\/EST and\/or protein sequences are used to predict gene structures via spliced alignments.

   :homepage: http://genomethreader.org/
   :developer docs: https://github.com/genometools/genomethreader
   :license: ISC
   :recipe: /`genomethreader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomethreader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomethreader/meta.yaml>`_

   


.. conda:package:: genomethreader

   |downloads_genomethreader| |docker_genomethreader|

   :versions:
      
      

      ``1.7.1-2``,  ``1.7.1-1``,  ``1.7.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomethreader

   and update with::

      conda update genomethreader

   or use the docker container::

      docker pull quay.io/biocontainers/genomethreader:<tag>

   (see `genomethreader/tags`_ for valid values for ``<tag>``)


.. |downloads_genomethreader| image:: https://img.shields.io/conda/dn/bioconda/genomethreader.svg?style=flat
   :target: https://anaconda.org/bioconda/genomethreader
   :alt:   (downloads)
.. |docker_genomethreader| image:: https://quay.io/repository/biocontainers/genomethreader/status
   :target: https://quay.io/repository/biocontainers/genomethreader
.. _`genomethreader/tags`: https://quay.io/repository/biocontainers/genomethreader?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomethreader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomethreader/README.html