.. title:: Package Recipe 'bioconductor-meshdbi'
.. highlight: bash


bioconductor-meshdbi
====================

.. conda:recipe:: bioconductor-meshdbi
   :replaces_section_title:

   The package is unified implementation of MeSH.db\, MeSH.AOR.db\, and MeSH.PCR.db and also is interface to construct Gene\-MeSH package \(MeSH.XXX.eg.db\). loadMeSHDbiPkg import sqlite file and generate MeSH.XXX.eg.db.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MeSHDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshdbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshdbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshdbi/meta.yaml>`_
   :links: biotools: :biotools:`meshdbi`

   


.. conda:package:: bioconductor-meshdbi

   |downloads_bioconductor-meshdbi| |docker_bioconductor-meshdbi|

   :versions: 1.18.0, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-meshdbi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meshdbi

   and update with::

      conda update bioconductor-meshdbi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-meshdbi


.. |required_by_bioconductor-meshdbi| conda:required_by:: bioconductor-meshdbi
.. |downloads_bioconductor-meshdbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshdbi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-meshdbi| image:: https://quay.io/repository/biocontainers/bioconductor-meshdbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshdbi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshdbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshdbi/README.html

