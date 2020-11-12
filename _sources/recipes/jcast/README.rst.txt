:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jcast'
.. highlight: bash

jcast
=====

.. conda:recipe:: jcast
   :replaces_section_title:
   :noindex:

   Jcast retrieves splice junction information and translates into amino acids

   :homepage: https://github.com/ed-lau/jcast
   :license: MIT / MIT
   :recipe: /`jcast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcast/meta.yaml>`_

   


.. conda:package:: jcast

   |downloads_jcast| |docker_jcast|

   :versions:
      
      

      ``0.3.1-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``

      

   
   :depends biopython: ``>=1.7,<2``
   :depends gtfparse: ``>=1,<2``
   :depends pandas: ``>=1.0,<2``
   :depends python: ``>=3.7``
   :depends requests: ``>=2,<3``
   :depends tqdm: ``>=4,<5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jcast

   and update with::

      conda update jcast

   or use the docker container::

      docker pull quay.io/biocontainers/jcast:<tag>

   (see `jcast/tags`_ for valid values for ``<tag>``)


.. |downloads_jcast| image:: https://img.shields.io/conda/dn/bioconda/jcast.svg?style=flat
   :target: https://anaconda.org/bioconda/jcast
   :alt:   (downloads)
.. |docker_jcast| image:: https://quay.io/repository/biocontainers/jcast/status
   :target: https://quay.io/repository/biocontainers/jcast
.. _`jcast/tags`: https://quay.io/repository/biocontainers/jcast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jcast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jcast/README.html