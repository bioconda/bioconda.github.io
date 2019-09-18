:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lexmapr'
.. highlight: bash

lexmapr
=======

.. conda:recipe:: lexmapr
   :replaces_section_title:

   A Lexicon and Rule\-Based Tool for Translating Short Biomedical Specimen Descriptions into Semantic Web Ontology Terms

   :homepage: https://github.com/LexMapr/lexmapr
   :license: GPL-3.0
   :recipe: /`lexmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexmapr/meta.yaml>`_

   


.. conda:package:: lexmapr

   |downloads_lexmapr| |docker_lexmapr|

   :versions: 0.4.0-0, 0.3.0-0, 0.2.0-0, 0.1.4-0, 0.1.3-0, 0.1.2-0, 0.1.1-0, 0.1.0-0
   
   :depends inflection: 
   :depends nltk: 3.2.5.*
   :depends nltk_data: 
   :depends python: >=3.6,<3.7.0a0
   :depends python-dateutil: 
   :depends rdflib: 
   :depends wikipedia: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lexmapr

   and update with::

      conda update lexmapr

   or use the docker container::

      docker pull quay.io/biocontainers/lexmapr:<tag>

   (see `lexmapr/tags`_ for valid values for ``<tag>``)


.. |downloads_lexmapr| image:: https://img.shields.io/conda/dn/bioconda/lexmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/lexmapr
   :alt:   (downloads)
.. |docker_lexmapr| image:: https://quay.io/repository/biocontainers/lexmapr/status
   :target: https://quay.io/repository/biocontainers/lexmapr
.. _`lexmapr/tags`: https://quay.io/repository/biocontainers/lexmapr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lexmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lexmapr/README.html