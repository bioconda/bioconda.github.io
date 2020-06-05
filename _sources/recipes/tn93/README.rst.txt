:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tn93'
.. highlight: bash

tn93
====

.. conda:recipe:: tn93
   :replaces_section_title:
   :noindex:

   This is a simple program meant to compute pairwise distances between aligned nucleotide sequences in sequential FASTA format using the Tamura Nei 93 distance.

   :homepage: https://github.com/veg/tn93
   :license: MIT
   :recipe: /`tn93 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn93>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn93/meta.yaml>`_

   


.. conda:package:: tn93

   |downloads_tn93| |docker_tn93|

   :versions:
      
      

      ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends libstdcxx-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tn93

   and update with::

      conda update tn93

   or use the docker container::

      docker pull quay.io/biocontainers/tn93:<tag>

   (see `tn93/tags`_ for valid values for ``<tag>``)


.. |downloads_tn93| image:: https://img.shields.io/conda/dn/bioconda/tn93.svg?style=flat
   :target: https://anaconda.org/bioconda/tn93
   :alt:   (downloads)
.. |docker_tn93| image:: https://quay.io/repository/biocontainers/tn93/status
   :target: https://quay.io/repository/biocontainers/tn93
.. _`tn93/tags`: https://quay.io/repository/biocontainers/tn93?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tn93/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tn93/README.html