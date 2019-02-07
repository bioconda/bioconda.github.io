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

   :versions: 0.1.2, 0.1.1, 0.1.0

   :depends: :conda:package:`inflection`  :conda:package:`nltk`  :conda:package:`nltk_data`  :conda:package:`python`  :conda:package:`python-dateutil`  :conda:package:`rdflib`  :conda:package:`wikipedia`  

   :required~by: |required_by_lexmapr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lexmapr

   and update with::

      conda update lexmapr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lexmapr


.. |required_by_lexmapr| conda:required_by:: lexmapr
.. |downloads_lexmapr| image:: https://img.shields.io/conda/dn/bioconda/lexmapr.svg?style=flat
   :alt:   (downloads)
.. |docker_lexmapr| image:: https://quay.io/repository/biocontainers/lexmapr/status
   :target: https://quay.io/repository/biocontainers/lexmapr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lexmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lexmapr/README.html

