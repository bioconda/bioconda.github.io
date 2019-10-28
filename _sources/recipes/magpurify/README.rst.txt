:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magpurify'
.. highlight: bash

magpurify
=========

.. conda:recipe:: magpurify
   :replaces_section_title:

   Improvement of metagenome\-assembled genomes


   :homepage: https://github.com/snayfach/MAGpurify
   :license: GPL-3
   :recipe: /`magpurify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magpurify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magpurify/meta.yaml>`_
   :links: doi: :doi:`http://dx.doi.org/10.1038/s41586-019-1058-x`

   


.. conda:package:: magpurify

   |downloads_magpurify| |docker_magpurify|

   :versions: 1.0-2, 1.0-1
   
   :depends biopython: 
   :depends blast: 2.7.1.*
   :depends hmmer: 3.1b2.*
   :depends last: 
   :depends mash: 2.0.*
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 2.6.3.*
   :depends python: 2.7.*
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install magpurify

   and update with::

      conda update magpurify

   or use the docker container::

      docker pull quay.io/biocontainers/magpurify:<tag>

   (see `magpurify/tags`_ for valid values for ``<tag>``)


.. |downloads_magpurify| image:: https://img.shields.io/conda/dn/bioconda/magpurify.svg?style=flat
   :target: https://anaconda.org/bioconda/magpurify
   :alt:   (downloads)
.. |docker_magpurify| image:: https://quay.io/repository/biocontainers/magpurify/status
   :target: https://quay.io/repository/biocontainers/magpurify
.. _`magpurify/tags`: https://quay.io/repository/biocontainers/magpurify?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magpurify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magpurify/README.html