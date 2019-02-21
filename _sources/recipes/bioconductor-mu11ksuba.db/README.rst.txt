:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mu11ksuba.db'
.. highlight: bash

bioconductor-mu11ksuba.db
=========================

.. conda:recipe:: bioconductor-mu11ksuba.db
   :replaces_section_title:

   Affymetrix Murine 11K Set annotation data \(chip mu11ksuba\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mu11ksuba.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mu11ksuba.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu11ksuba.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu11ksuba.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mu11ksuba.db

   |downloads_bioconductor-mu11ksuba.db| |docker_bioconductor-mu11ksuba.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mu11ksuba.db

   and update with::

      conda update bioconductor-mu11ksuba.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mu11ksuba.db:<tag>

   (see `bioconductor-mu11ksuba.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mu11ksuba.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mu11ksuba.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mu11ksuba.db| image:: https://quay.io/repository/biocontainers/bioconductor-mu11ksuba.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mu11ksuba.db
.. _`bioconductor-mu11ksuba.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mu11ksuba.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mu11ksuba.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mu11ksuba.db/README.html