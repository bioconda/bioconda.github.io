:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'truvari'
.. highlight: bash

truvari
=======

.. conda:recipe:: truvari
   :replaces_section_title:

   Structural variant comparison tool for VCFs

   :homepage: https://github.com/spiralgenetics/truvari
   :license: MIT
   :recipe: /`truvari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari/meta.yaml>`_

   


.. conda:package:: truvari

   |downloads_truvari| |docker_truvari|

   :versions: 0.1.2018.08.10-0
   
   :depends intervaltree: 
   
   :depends progressbar2: 
   
   :depends pyfaidx: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends python-levenshtein: 
   
   :depends pyvcf: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install truvari

   and update with::

      conda update truvari

   or use the docker container::

      docker pull quay.io/biocontainers/truvari:<tag>

   (see `truvari/tags`_ for valid values for ``<tag>``)


.. |downloads_truvari| image:: https://img.shields.io/conda/dn/bioconda/truvari.svg?style=flat
   :alt:   (downloads)
.. |docker_truvari| image:: https://quay.io/repository/biocontainers/truvari/status
   :target: https://quay.io/repository/biocontainers/truvari
.. _`truvari/tags`: https://quay.io/repository/biocontainers/truvari?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/truvari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/truvari/README.html