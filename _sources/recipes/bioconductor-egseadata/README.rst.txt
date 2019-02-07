.. title:: Package Recipe 'bioconductor-egseadata'
.. highlight: bash


bioconductor-egseadata
======================

.. conda:recipe:: bioconductor-egseadata
   :replaces_section_title:

   This package includes gene set collections that are used for the Ensemble of Gene Set Enrichment Analyses \(EGSEA\) method for gene set testing. It includes Human and Mouse versions of the MSidDB \(Subramanian\, et al. \(2005\) PNAS\, 102\(43\)\:15545\-15550\) and GeneSetDB \(Araki\, et al. \(2012\) FEBS Open Bio\, 2\:76\-82\) collections.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/EGSEAdata.html
   :license: file LICENSE
   :recipe: /`bioconductor-egseadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egseadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egseadata/meta.yaml>`_

   


.. conda:package:: bioconductor-egseadata

   |downloads_bioconductor-egseadata| |docker_bioconductor-egseadata|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-egseadata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-egseadata

   and update with::

      conda update bioconductor-egseadata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-egseadata


.. |required_by_bioconductor-egseadata| conda:required_by:: bioconductor-egseadata
.. |downloads_bioconductor-egseadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-egseadata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-egseadata| image:: https://quay.io/repository/biocontainers/bioconductor-egseadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-egseadata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-egseadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-egseadata/README.html

