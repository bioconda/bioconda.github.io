:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krakentools'
.. highlight: bash

krakentools
===========

.. conda:recipe:: krakentools
   :replaces_section_title:
   :noindex:

   KrakenTools is a suite of scripts to be used for post\-analysis of Kraken\/KrakenUniq\/Kraken2\/Bracken results. Please cite the relevant paper if using KrakenTools with any of the listed programs.

   :homepage: https://github.com/jenniferlu717/KrakenTools
   :license: GPL / GPL-3.0
   :recipe: /`krakentools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakentools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakentools/meta.yaml>`_
   :links: biotools: :biotools:`krakentools`

   


.. conda:package:: krakentools

   |downloads_krakentools| |docker_krakentools|

   :versions:
      
      

      ``1.1-0``,  ``1.0.1-0``,  ``0.1-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krakentools

   and update with::

      conda update krakentools

   or use the docker container::

      docker pull quay.io/biocontainers/krakentools:<tag>

   (see `krakentools/tags`_ for valid values for ``<tag>``)


.. |downloads_krakentools| image:: https://img.shields.io/conda/dn/bioconda/krakentools.svg?style=flat
   :target: https://anaconda.org/bioconda/krakentools
   :alt:   (downloads)
.. |docker_krakentools| image:: https://quay.io/repository/biocontainers/krakentools/status
   :target: https://quay.io/repository/biocontainers/krakentools
.. _`krakentools/tags`: https://quay.io/repository/biocontainers/krakentools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakentools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakentools/README.html