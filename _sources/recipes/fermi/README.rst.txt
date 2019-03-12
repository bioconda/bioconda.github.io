:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermi'
.. highlight: bash

fermi
=====

.. conda:recipe:: fermi
   :replaces_section_title:

   A WGS de novo assembler based on the FMD\-index for large genomes

   :homepage: https://github.com/lh3/fermi
   :license: Unknown
   :recipe: /`fermi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi/meta.yaml>`_

   


.. conda:package:: fermi

   |downloads_fermi| |docker_fermi|

   :versions: 1.1_r751_beta-3, 1.1_r751_beta-2, 1.1_r751_beta-1, 1.1_r751_beta-0
   
   :depends perl: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fermi

   and update with::

      conda update fermi

   or use the docker container::

      docker pull quay.io/biocontainers/fermi:<tag>

   (see `fermi/tags`_ for valid values for ``<tag>``)


.. |downloads_fermi| image:: https://img.shields.io/conda/dn/bioconda/fermi.svg?style=flat
   :alt:   (downloads)
.. |docker_fermi| image:: https://quay.io/repository/biocontainers/fermi/status
   :target: https://quay.io/repository/biocontainers/fermi
.. _`fermi/tags`: https://quay.io/repository/biocontainers/fermi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi/README.html