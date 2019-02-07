.. title:: Package Recipe 'bioconductor-mesh.pcr.db'
.. highlight: bash


bioconductor-mesh.pcr.db
========================

.. conda:recipe:: bioconductor-mesh.pcr.db
   :replaces_section_title:

   A set of PCR \(parent\-child relationship\) in MeSH.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/MeSH.PCR.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.pcr.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.pcr.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.pcr.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.pcr.db

   |downloads_bioconductor-mesh.pcr.db| |docker_bioconductor-mesh.pcr.db|

   :versions: 1.11.0

   :depends: :conda:package:`bioconductor-meshdbi` >=1.18.0,<1.19.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mesh.pcr.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.pcr.db

   and update with::

      conda update bioconductor-mesh.pcr.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mesh.pcr.db


.. |required_by_bioconductor-mesh.pcr.db| conda:required_by:: bioconductor-mesh.pcr.db
.. |downloads_bioconductor-mesh.pcr.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.pcr.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mesh.pcr.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.pcr.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.pcr.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.pcr.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.pcr.db/README.html

