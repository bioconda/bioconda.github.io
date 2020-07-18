:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncopipe'
.. highlight: bash

oncopipe
========

.. conda:recipe:: oncopipe
   :replaces_section_title:
   :noindex:

   Functions for running Snakemake modules

   :homepage: https://github.com/LCR-BCCRC/lcr-modules
   :documentation: https://lcr-modules.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`oncopipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncopipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncopipe/meta.yaml>`_

   


.. conda:package:: oncopipe

   |downloads_oncopipe| |docker_oncopipe|

   :versions:
      
      

      ``1.0.8-0``,  ``1.0.7-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends pyyaml: 
   :depends snakemake: ``>=5.4,<5.19``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install oncopipe

   and update with::

      conda update oncopipe

   or use the docker container::

      docker pull quay.io/biocontainers/oncopipe:<tag>

   (see `oncopipe/tags`_ for valid values for ``<tag>``)


.. |downloads_oncopipe| image:: https://img.shields.io/conda/dn/bioconda/oncopipe.svg?style=flat
   :target: https://anaconda.org/bioconda/oncopipe
   :alt:   (downloads)
.. |docker_oncopipe| image:: https://quay.io/repository/biocontainers/oncopipe/status
   :target: https://quay.io/repository/biocontainers/oncopipe
.. _`oncopipe/tags`: https://quay.io/repository/biocontainers/oncopipe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncopipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncopipe/README.html