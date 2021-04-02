:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcen'
.. highlight: bash

gcen
====

.. conda:recipe:: gcen
   :replaces_section_title:
   :noindex:

   an easy toolkit of Gene Co\-Expression Network analysis for lncRNAs annotation

   :homepage: https://www.biochen.com/gcen/
   :license: GPL v3
   :recipe: /`gcen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcen/meta.yaml>`_
   :links: biotools: :biotools:`gcen`

   


.. conda:package:: gcen

   |downloads_gcen| |docker_gcen|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gcen

   and update with::

      conda update gcen

   or use the docker container::

      docker pull quay.io/biocontainers/gcen:<tag>

   (see `gcen/tags`_ for valid values for ``<tag>``)


.. |downloads_gcen| image:: https://img.shields.io/conda/dn/bioconda/gcen.svg?style=flat
   :target: https://anaconda.org/bioconda/gcen
   :alt:   (downloads)
.. |docker_gcen| image:: https://quay.io/repository/biocontainers/gcen/status
   :target: https://quay.io/repository/biocontainers/gcen
.. _`gcen/tags`: https://quay.io/repository/biocontainers/gcen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcen/README.html