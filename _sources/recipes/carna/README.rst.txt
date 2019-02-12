:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carna'
.. highlight: bash

carna
=====

.. conda:recipe:: carna
   :replaces_section_title:

   Constraint\-based Alignment of RNA Ensembles

   :homepage: https://www.bioinf.uni-leipzig.de/~will/Software/CARNA/
   :license: GPL
   :recipe: /`carna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carna/meta.yaml>`_
   :links: biotools: :biotools:`carna`

   


.. conda:package:: carna

   |downloads_carna| |docker_carna|

   :versions: 1.3.3-2, 1.3.3-1, 1.3.2-2, 1.3.2-1, 1.3.2-0, 1.3.1-5, 1.3.1-4, 1.3.1-3, 1.3.1-2, 1.3.1-1
   
   :depends gecode: 5.0.0.*
   
   :depends libgcc-ng: >=4.9
   
   :depends locarna: 1.9.1.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install carna

   and update with::

      conda update carna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/carna:<tag>

   (see `carna/tags`_ for valid values for ``<tag>``)


.. |downloads_carna| image:: https://img.shields.io/conda/dn/bioconda/carna.svg?style=flat
   :alt:   (downloads)
.. |docker_carna| image:: https://quay.io/repository/biocontainers/carna/status
   :target: https://quay.io/repository/biocontainers/carna
.. _`carna/tags`: https://quay.io/repository/biocontainers/carna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carna/README.html