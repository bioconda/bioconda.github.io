:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnabridge-denovo'
.. highlight: bash

rnabridge-denovo
================

.. conda:recipe:: rnabridge-denovo
   :replaces_section_title:
   :noindex:

   A tool to construct the alignments of entire fragments given the alignments of paired\-end reads.

   :homepage: https://github.com/Shao-Group/rnabridge-denovo
   :license: BSD-3-Clause
   :recipe: /`rnabridge-denovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabridge-denovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabridge-denovo/meta.yaml>`_

   


.. conda:package:: rnabridge-denovo

   |downloads_rnabridge-denovo| |docker_rnabridge-denovo|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bifrost: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnabridge-denovo

   and update with::

      conda update rnabridge-denovo

   or use the docker container::

      docker pull quay.io/biocontainers/rnabridge-denovo:<tag>

   (see `rnabridge-denovo/tags`_ for valid values for ``<tag>``)


.. |downloads_rnabridge-denovo| image:: https://img.shields.io/conda/dn/bioconda/rnabridge-denovo.svg?style=flat
   :target: https://anaconda.org/bioconda/rnabridge-denovo
   :alt:   (downloads)
.. |docker_rnabridge-denovo| image:: https://quay.io/repository/biocontainers/rnabridge-denovo/status
   :target: https://quay.io/repository/biocontainers/rnabridge-denovo
.. _`rnabridge-denovo/tags`: https://quay.io/repository/biocontainers/rnabridge-denovo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnabridge-denovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnabridge-denovo/README.html