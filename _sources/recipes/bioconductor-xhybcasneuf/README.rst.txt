.. title:: Package Recipe 'bioconductor-xhybcasneuf'
.. highlight: bash


bioconductor-xhybcasneuf
========================

.. conda:recipe:: bioconductor-xhybcasneuf
   :replaces_section_title:

   Cross\-hybridisation study on the ATH1 Affymetrix GeneChip

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/XhybCasneuf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xhybcasneuf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xhybcasneuf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xhybcasneuf/meta.yaml>`_

   


.. conda:package:: bioconductor-xhybcasneuf

   |downloads_bioconductor-xhybcasneuf| |docker_bioconductor-xhybcasneuf|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-ath1121501cdf` >=2.18.0,<2.19.0 :conda:package:`bioconductor-tinesath1cdf` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcolorbrewer`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-xhybcasneuf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xhybcasneuf

   and update with::

      conda update bioconductor-xhybcasneuf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-xhybcasneuf


.. |required_by_bioconductor-xhybcasneuf| conda:required_by:: bioconductor-xhybcasneuf
.. |downloads_bioconductor-xhybcasneuf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xhybcasneuf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-xhybcasneuf| image:: https://quay.io/repository/biocontainers/bioconductor-xhybcasneuf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xhybcasneuf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xhybcasneuf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xhybcasneuf/README.html

