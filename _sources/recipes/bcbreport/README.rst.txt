:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbreport'
.. highlight: bash

bcbreport
=========

.. conda:recipe:: bcbreport
   :replaces_section_title:

   Rmd templates for bcbio\-nextgen analysis

   :homepage: https://github.com/lpantano/bcbio.coverage
   :license: MIT License
   :recipe: /`bcbreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport/meta.yaml>`_

   


.. conda:package:: bcbreport

   |downloads_bcbreport| |docker_bcbreport|

   :versions: 0.99.29-1, 0.99.29-0, 0.99.28-0, 0.99.27-0, 0.99.26-0, 0.99.25-0, 0.99.24-0, 0.99.23-1, 0.99.22-1, 0.99.21-1, 0.99.20-1, 0.99.20-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbreport

   and update with::

      conda update bcbreport

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcbreport:<tag>

   (see `bcbreport/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbreport| image:: https://img.shields.io/conda/dn/bioconda/bcbreport.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbreport| image:: https://quay.io/repository/biocontainers/bcbreport/status
   :target: https://quay.io/repository/biocontainers/bcbreport
.. _`bcbreport/tags`: https://quay.io/repository/biocontainers/bcbreport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbreport/README.html