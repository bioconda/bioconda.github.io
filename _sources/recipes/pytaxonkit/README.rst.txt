:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytaxonkit'
.. highlight: bash

pytaxonkit
==========

.. conda:recipe:: pytaxonkit
   :replaces_section_title:
   :noindex:

   Python bindings for the TaxonKit library.

   :homepage: https://github.com/bioforensics/pytaxonkit/
   :license: BSD / BSD License
   :recipe: /`pytaxonkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytaxonkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytaxonkit/meta.yaml>`_

   


.. conda:package:: pytaxonkit

   |downloads_pytaxonkit| |docker_pytaxonkit|

   :versions:
      
      

      ``0.6-0``

      

   
   :depends pandas: ``>=1.0``
   :depends pytest: ``>=5.4``
   :depends python: ``>=3``
   :depends taxonkit: ``>=0.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytaxonkit

   and update with::

      conda update pytaxonkit

   or use the docker container::

      docker pull quay.io/biocontainers/pytaxonkit:<tag>

   (see `pytaxonkit/tags`_ for valid values for ``<tag>``)


.. |downloads_pytaxonkit| image:: https://img.shields.io/conda/dn/bioconda/pytaxonkit.svg?style=flat
   :target: https://anaconda.org/bioconda/pytaxonkit
   :alt:   (downloads)
.. |docker_pytaxonkit| image:: https://quay.io/repository/biocontainers/pytaxonkit/status
   :target: https://quay.io/repository/biocontainers/pytaxonkit
.. _`pytaxonkit/tags`: https://quay.io/repository/biocontainers/pytaxonkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytaxonkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytaxonkit/README.html