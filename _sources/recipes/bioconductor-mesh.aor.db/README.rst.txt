:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.aor.db'
.. highlight: bash

bioconductor-mesh.aor.db
========================

.. conda:recipe:: bioconductor-mesh.aor.db
   :replaces_section_title:

   A set of AOR \(ancestor\-offspring relationship\) in MeSH.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/MeSH.AOR.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.aor.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.aor.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.aor.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.aor.db

   |downloads_bioconductor-mesh.aor.db| |docker_bioconductor-mesh.aor.db|

   :versions: 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.18.0,<1.19.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.aor.db

   and update with::

      conda update bioconductor-mesh.aor.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.aor.db:<tag>

   (see `bioconductor-mesh.aor.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.aor.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.aor.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mesh.aor.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.aor.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.aor.db
.. _`bioconductor-mesh.aor.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.aor.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.aor.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.aor.db/README.html