:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vargeno'
.. highlight: bash

vargeno
=======

.. conda:recipe:: vargeno
   :replaces_section_title:
   :noindex:

   Fast SNP genotyping tool for whole genome sequence data and large SNP database.

   :homepage: https://github.com/medvedevgroup/vargeno
   :license: MIT
   :recipe: /`vargeno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vargeno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vargeno/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty641`

   


.. conda:package:: vargeno

   |downloads_vargeno| |docker_vargeno|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends libcxx: ``>=9.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vargeno

   and update with::

      conda update vargeno

   or use the docker container::

      docker pull quay.io/biocontainers/vargeno:<tag>

   (see `vargeno/tags`_ for valid values for ``<tag>``)


.. |downloads_vargeno| image:: https://img.shields.io/conda/dn/bioconda/vargeno.svg?style=flat
   :target: https://anaconda.org/bioconda/vargeno
   :alt:   (downloads)
.. |docker_vargeno| image:: https://quay.io/repository/biocontainers/vargeno/status
   :target: https://quay.io/repository/biocontainers/vargeno
.. _`vargeno/tags`: https://quay.io/repository/biocontainers/vargeno?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vargeno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vargeno/README.html