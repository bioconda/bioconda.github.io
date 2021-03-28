:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lra'
.. highlight: bash

lra
===

.. conda:recipe:: lra
   :replaces_section_title:
   :noindex:

   Long read aligner for sequences and contigs

   :homepage: https://github.com/ChaissonLab/LRA
   :license: USC-RL v1.0
   :recipe: /`lra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lra/meta.yaml>`_

   


.. conda:package:: lra

   |downloads_lra| |docker_lra|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lra

   and update with::

      conda update lra

   or use the docker container::

      docker pull quay.io/biocontainers/lra:<tag>

   (see `lra/tags`_ for valid values for ``<tag>``)


.. |downloads_lra| image:: https://img.shields.io/conda/dn/bioconda/lra.svg?style=flat
   :target: https://anaconda.org/bioconda/lra
   :alt:   (downloads)
.. |docker_lra| image:: https://quay.io/repository/biocontainers/lra/status
   :target: https://quay.io/repository/biocontainers/lra
.. _`lra/tags`: https://quay.io/repository/biocontainers/lra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lra/README.html