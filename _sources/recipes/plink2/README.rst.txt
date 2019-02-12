:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plink2'
.. highlight: bash

plink2
======

.. conda:recipe:: plink2
   :replaces_section_title:

   Whole genome association analysis toolset\, designed to perform a range of basic\, large\-scale analyses in a computationally efficient manner.

   :homepage: https://www.cog-genomics.org/plink2
   :license: GPL
   :recipe: /`plink2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink2/meta.yaml>`_

   


.. conda:package:: plink2

   |downloads_plink2| |docker_plink2|

   :versions: 1.90b3.35-0
   
   :depends openblas: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plink2

   and update with::

      conda update plink2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/plink2:<tag>

   (see `plink2/tags`_ for valid values for ``<tag>``)


.. |downloads_plink2| image:: https://img.shields.io/conda/dn/bioconda/plink2.svg?style=flat
   :alt:   (downloads)
.. |docker_plink2| image:: https://quay.io/repository/biocontainers/plink2/status
   :target: https://quay.io/repository/biocontainers/plink2
.. _`plink2/tags`: https://quay.io/repository/biocontainers/plink2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plink2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plink2/README.html