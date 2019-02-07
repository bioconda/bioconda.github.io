.. title:: Package Recipe 'bioconductor-meshr'
.. highlight: bash


bioconductor-meshr
==================

.. conda:recipe:: bioconductor-meshr
   :replaces_section_title:

   A set of annotation maps describing the entire MeSH assembled using data from MeSH.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/meshr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshr/meta.yaml>`_

   


.. conda:package:: bioconductor-meshr

   |downloads_bioconductor-meshr| |docker_bioconductor-meshr|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-category` >=2.48.0,<2.49.0 :conda:package:`bioconductor-cummerbund` >=2.24.0,<2.25.0 :conda:package:`bioconductor-mesh.aca.eg.db` >=1.11.0,<1.12.0 :conda:package:`bioconductor-mesh.aor.db` >=1.11.0,<1.12.0 :conda:package:`bioconductor-mesh.bsu.168.eg.db` >=1.11.0,<1.12.0 :conda:package:`bioconductor-mesh.db` >=1.11.0,<1.12.0 :conda:package:`bioconductor-mesh.hsa.eg.db` >=1.11.0,<1.12.0 :conda:package:`bioconductor-mesh.pcr.db` >=1.11.0,<1.12.0 :conda:package:`bioconductor-mesh.syn.eg.db` >=1.11.0,<1.12.0 :conda:package:`bioconductor-meshdbi` >=1.18.0,<1.19.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fdrtool`  :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-meshr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meshr

   and update with::

      conda update bioconductor-meshr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-meshr


.. |required_by_bioconductor-meshr| conda:required_by:: bioconductor-meshr
.. |downloads_bioconductor-meshr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-meshr| image:: https://quay.io/repository/biocontainers/bioconductor-meshr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshr/README.html

