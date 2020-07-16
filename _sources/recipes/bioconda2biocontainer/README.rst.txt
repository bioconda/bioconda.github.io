:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda2biocontainer'
.. highlight: bash

bioconda2biocontainer
=====================

.. conda:recipe:: bioconda2biocontainer
   :replaces_section_title:
   :noindex:

   BioContainers API client\: find biocontainer images for Bioconda packages

   :homepage: https://github.com/BioContainers/bioconda2biocontainer
   :license: PUBLIC-DOMAIN / Public Domain
   :recipe: /`bioconda2biocontainer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda2biocontainer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda2biocontainer/meta.yaml>`_

   


.. conda:package:: bioconda2biocontainer

   |downloads_bioconda2biocontainer| |docker_bioconda2biocontainer|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends python: ``>=3.5``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconda2biocontainer

   and update with::

      conda update bioconda2biocontainer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconda2biocontainer:<tag>

   (see `bioconda2biocontainer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconda2biocontainer| image:: https://img.shields.io/conda/dn/bioconda/bioconda2biocontainer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda2biocontainer
   :alt:   (downloads)
.. |docker_bioconda2biocontainer| image:: https://quay.io/repository/biocontainers/bioconda2biocontainer/status
   :target: https://quay.io/repository/biocontainers/bioconda2biocontainer
.. _`bioconda2biocontainer/tags`: https://quay.io/repository/biocontainers/bioconda2biocontainer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda2biocontainer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda2biocontainer/README.html