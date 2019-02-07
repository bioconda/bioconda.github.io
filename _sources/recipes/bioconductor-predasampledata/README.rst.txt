.. title:: Package Recipe 'bioconductor-predasampledata'
.. highlight: bash


bioconductor-predasampledata
============================

.. conda:recipe:: bioconductor-predasampledata
   :replaces_section_title:

   Sample data for PREDA package. \(annotations objects synchronized with GeneAnnot custom CDFs version 2.2.0\)

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/PREDAsampledata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-predasampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predasampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predasampledata/meta.yaml>`_

   


.. conda:package:: bioconductor-predasampledata

   |downloads_bioconductor-predasampledata| |docker_bioconductor-predasampledata|

   :versions: 0.22.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-preda` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-predasampledata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-predasampledata

   and update with::

      conda update bioconductor-predasampledata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-predasampledata


.. |required_by_bioconductor-predasampledata| conda:required_by:: bioconductor-predasampledata
.. |downloads_bioconductor-predasampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-predasampledata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-predasampledata| image:: https://quay.io/repository/biocontainers/bioconductor-predasampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-predasampledata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-predasampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-predasampledata/README.html

