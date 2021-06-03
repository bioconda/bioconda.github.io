:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.sc.sgd.db'
.. highlight: bash

bioconductor-org.sc.sgd.db
==========================

.. conda:recipe:: bioconductor-org.sc.sgd.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Yeast

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/org.Sc.sgd.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.sc.sgd.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.sc.sgd.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.sc.sgd.db/meta.yaml>`_

   Genome wide annotation for Yeast\, primarily based on mapping using ORF identifiers from SGD.


.. conda:package:: bioconductor-org.sc.sgd.db

   |downloads_bioconductor-org.sc.sgd.db| |docker_bioconductor-org.sc.sgd.db|

   :versions:
      
      

      ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.sc.sgd.db

   and update with::

      conda update bioconductor-org.sc.sgd.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.sc.sgd.db:<tag>

   (see `bioconductor-org.sc.sgd.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.sc.sgd.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.sc.sgd.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.sc.sgd.db
   :alt:   (downloads)
.. |docker_bioconductor-org.sc.sgd.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.sc.sgd.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.sc.sgd.db
.. _`bioconductor-org.sc.sgd.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.sc.sgd.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.sc.sgd.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.sc.sgd.db/README.html