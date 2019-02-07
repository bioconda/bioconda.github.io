.. title:: Package Recipe 'bioconductor-ocplus'
.. highlight: bash


bioconductor-ocplus
===================

.. conda:recipe:: bioconductor-ocplus
   :replaces_section_title:

   This package allows to characterize the operating characteristics of a microarray experiment\, i.e. the trade\-off between false discovery rate and the power to detect truly regulated genes. The package includes tools both for planned experiments \(for sample size assessment\) and for already collected data \(identification of differentially expressed genes\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OCplus.html
   :license: LGPL
   :recipe: /`bioconductor-ocplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ocplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ocplus/meta.yaml>`_

   


.. conda:package:: bioconductor-ocplus

   |downloads_bioconductor-ocplus| |docker_bioconductor-ocplus|

   :versions: 1.56.0

   :depends: :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`r-akima`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-ocplus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ocplus

   and update with::

      conda update bioconductor-ocplus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ocplus


.. |required_by_bioconductor-ocplus| conda:required_by:: bioconductor-ocplus
.. |downloads_bioconductor-ocplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ocplus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ocplus| image:: https://quay.io/repository/biocontainers/bioconductor-ocplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ocplus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ocplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ocplus/README.html

