:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'k8'
.. highlight: bash

k8
==

.. conda:recipe:: k8
   :replaces_section_title:
   :noindex:

   Lightweight JavaScript shell based on Google\'s V8 JavaScript engine

   :homepage: https://github.com/attractivechaos/k8
   :license: MIT
   :recipe: /`k8 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k8>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k8/meta.yaml>`_

   


.. conda:package:: k8

   |downloads_k8| |docker_k8|

   :versions:
      
      

      ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install k8

   and update with::

      conda update k8

   or use the docker container::

      docker pull quay.io/biocontainers/k8:<tag>

   (see `k8/tags`_ for valid values for ``<tag>``)


.. |downloads_k8| image:: https://img.shields.io/conda/dn/bioconda/k8.svg?style=flat
   :target: https://anaconda.org/bioconda/k8
   :alt:   (downloads)
.. |docker_k8| image:: https://quay.io/repository/biocontainers/k8/status
   :target: https://quay.io/repository/biocontainers/k8
.. _`k8/tags`: https://quay.io/repository/biocontainers/k8?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/k8/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/k8/README.html