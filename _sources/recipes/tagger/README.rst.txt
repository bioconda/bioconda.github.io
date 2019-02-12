:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagger'
.. highlight: bash

tagger
======

.. conda:recipe:: tagger
   :replaces_section_title:

   tagger allows you to tag a corpus of documents with search terms that you provide. It is often used to find mentions of proteins\, species\, diseases\, tissues\, chemicals and drugs\, GO terms\, and so forth\, in articles in the Medline corpus.

   :homepage: https://bitbucket.org/larsjuhljensen/tagger
   :license: BSD / BSD 2-Clause License
   :recipe: /`tagger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagger/meta.yaml>`_

   


.. conda:package:: tagger

   |downloads_tagger| |docker_tagger|

   :versions: 1.1-0
   
   :depends boost: >=1.67.0,<1.67.1.0a0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends swig: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tagger

   and update with::

      conda update tagger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tagger:<tag>

   (see `tagger/tags`_ for valid values for ``<tag>``)


.. |downloads_tagger| image:: https://img.shields.io/conda/dn/bioconda/tagger.svg?style=flat
   :alt:   (downloads)
.. |docker_tagger| image:: https://quay.io/repository/biocontainers/tagger/status
   :target: https://quay.io/repository/biocontainers/tagger
.. _`tagger/tags`: https://quay.io/repository/biocontainers/tagger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagger/README.html