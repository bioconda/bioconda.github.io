:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylopandas'
.. highlight: bash

phylopandas
===========

.. conda:recipe:: phylopandas
   :replaces_section_title:

   Pandas for phylogenetics

   :homepage: https://github.com/Zsailer/phylopandas
   :license: MIT / MIT
   :recipe: /`phylopandas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopandas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopandas/meta.yaml>`_

   


.. conda:package:: phylopandas

   |downloads_phylopandas| |docker_phylopandas|

   :versions: 0.7.2-0, 0.7.1-0, 0.1.4-1, 0.1.4-0, 0.1.3-0
   
   :depends biopython: 
   :depends dendropy: 
   :depends pandas: 
   :depends pandas-flavor: 
   :depends python: >3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylopandas

   and update with::

      conda update phylopandas

   or use the docker container::

      docker pull quay.io/biocontainers/phylopandas:<tag>

   (see `phylopandas/tags`_ for valid values for ``<tag>``)


.. |downloads_phylopandas| image:: https://img.shields.io/conda/dn/bioconda/phylopandas.svg?style=flat
   :alt:   (downloads)
.. |docker_phylopandas| image:: https://quay.io/repository/biocontainers/phylopandas/status
   :target: https://quay.io/repository/biocontainers/phylopandas
.. _`phylopandas/tags`: https://quay.io/repository/biocontainers/phylopandas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylopandas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylopandas/README.html