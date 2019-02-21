:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctat-metagenomics'
.. highlight: bash

ctat-metagenomics
=================

.. conda:recipe:: ctat-metagenomics
   :replaces_section_title:

   ctat\-metagenomics uses centrifuge

   :homepage: https://github.com/NCIP/ctat-metagenomics
   :license: BSD-3-Clause
   :recipe: /`ctat-metagenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-metagenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-metagenomics/meta.yaml>`_

   


.. conda:package:: ctat-metagenomics

   |downloads_ctat-metagenomics| |docker_ctat-metagenomics|

   :versions: 1.0.1-1
   
   :depends blast: 
   
   :depends centrifuge: 
   
   :depends python: 2.7*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ctat-metagenomics

   and update with::

      conda update ctat-metagenomics

   or use the docker container::

      docker pull quay.io/biocontainers/ctat-metagenomics:<tag>

   (see `ctat-metagenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_ctat-metagenomics| image:: https://img.shields.io/conda/dn/bioconda/ctat-metagenomics.svg?style=flat
   :alt:   (downloads)
.. |docker_ctat-metagenomics| image:: https://quay.io/repository/biocontainers/ctat-metagenomics/status
   :target: https://quay.io/repository/biocontainers/ctat-metagenomics
.. _`ctat-metagenomics/tags`: https://quay.io/repository/biocontainers/ctat-metagenomics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctat-metagenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctat-metagenomics/README.html