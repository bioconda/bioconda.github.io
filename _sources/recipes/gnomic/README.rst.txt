:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnomic'
.. highlight: bash

gnomic
======

.. conda:recipe:: gnomic
   :replaces_section_title:
   :noindex:

   A grammar for describing microbial genotypes and phenotypes

   :homepage: https://github.com/biosustain/gnomic
   :license: APACHE / Apache Software
   :recipe: /`gnomic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnomic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnomic/meta.yaml>`_

   


.. conda:package:: gnomic

   |downloads_gnomic| |docker_gnomic|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends grako: ``>=3.18.1``
   :depends python: 
   :depends six: ``>=1.8.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gnomic

   and update with::

      conda update gnomic

   or use the docker container::

      docker pull quay.io/biocontainers/gnomic:<tag>

   (see `gnomic/tags`_ for valid values for ``<tag>``)


.. |downloads_gnomic| image:: https://img.shields.io/conda/dn/bioconda/gnomic.svg?style=flat
   :target: https://anaconda.org/bioconda/gnomic
   :alt:   (downloads)
.. |docker_gnomic| image:: https://quay.io/repository/biocontainers/gnomic/status
   :target: https://quay.io/repository/biocontainers/gnomic
.. _`gnomic/tags`: https://quay.io/repository/biocontainers/gnomic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnomic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnomic/README.html