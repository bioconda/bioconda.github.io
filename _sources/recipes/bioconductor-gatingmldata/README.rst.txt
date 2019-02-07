.. title:: Package Recipe 'bioconductor-gatingmldata'
.. highlight: bash


bioconductor-gatingmldata
=========================

.. conda:recipe:: bioconductor-gatingmldata
   :replaces_section_title:

   Test data and XML files for testing compliance of the flowUtils\/flowCore packages with Gating\-ML \(1.5 and 2.0\) standards.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/gatingMLData.html
   :license: GPL
   :recipe: /`bioconductor-gatingmldata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gatingmldata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gatingmldata/meta.yaml>`_

   


.. conda:package:: bioconductor-gatingmldata

   |downloads_bioconductor-gatingmldata| |docker_bioconductor-gatingmldata|

   :versions: 2.22.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-gatingmldata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gatingmldata

   and update with::

      conda update bioconductor-gatingmldata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gatingmldata


.. |required_by_bioconductor-gatingmldata| conda:required_by:: bioconductor-gatingmldata
.. |downloads_bioconductor-gatingmldata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gatingmldata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gatingmldata| image:: https://quay.io/repository/biocontainers/bioconductor-gatingmldata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gatingmldata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gatingmldata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gatingmldata/README.html

