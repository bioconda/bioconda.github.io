:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastmlst'
.. highlight: bash

fastmlst
========

.. conda:recipe:: fastmlst
   :replaces_section_title:
   :noindex:

   A Fast Multilocus Sequence Typing scan against PubMLST typing schemes

   :homepage: https://github.com/EnzoAndree/FastMLST
   :license: LGPL-3.0-only
   :recipe: /`fastmlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastmlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastmlst/meta.yaml>`_

   


.. conda:package:: fastmlst

   |downloads_fastmlst| |docker_fastmlst|

   :versions:
      
      

      ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastmlst

   and update with::

      conda update fastmlst

   or use the docker container::

      docker pull quay.io/biocontainers/fastmlst:<tag>

   (see `fastmlst/tags`_ for valid values for ``<tag>``)


.. |downloads_fastmlst| image:: https://img.shields.io/conda/dn/bioconda/fastmlst.svg?style=flat
   :target: https://anaconda.org/bioconda/fastmlst
   :alt:   (downloads)
.. |docker_fastmlst| image:: https://quay.io/repository/biocontainers/fastmlst/status
   :target: https://quay.io/repository/biocontainers/fastmlst
.. _`fastmlst/tags`: https://quay.io/repository/biocontainers/fastmlst?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastmlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastmlst/README.html