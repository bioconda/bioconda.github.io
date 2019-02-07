.. title:: Package Recipe 'pyhashxx'
.. highlight: bash


pyhashxx
========

.. conda:recipe:: pyhashxx
   :replaces_section_title:

   Python wrapper for xxHash algorithm

   :homepage: http://github.com/ewencp/pyhashxx
   :license: BSD / BSD
   :recipe: /`pyhashxx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhashxx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhashxx/meta.yaml>`_

   


.. conda:package:: pyhashxx

   |downloads_pyhashxx| |docker_pyhashxx|

   :versions: 0.1.3

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_pyhashxx|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyhashxx

   and update with::

      conda update pyhashxx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyhashxx


.. |required_by_pyhashxx| conda:required_by:: pyhashxx
.. |downloads_pyhashxx| image:: https://img.shields.io/conda/dn/bioconda/pyhashxx.svg?style=flat
   :alt:   (downloads)
.. |docker_pyhashxx| image:: https://quay.io/repository/biocontainers/pyhashxx/status
   :target: https://quay.io/repository/biocontainers/pyhashxx







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhashxx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhashxx/README.html

