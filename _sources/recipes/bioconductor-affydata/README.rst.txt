.. title:: Package Recipe 'bioconductor-affydata'
.. highlight: bash


bioconductor-affydata
=====================

.. conda:recipe:: bioconductor-affydata
   :replaces_section_title:

   Example datasets of a slightly large size. They represent \'real world examples\'\, unlike the artificial examples included in the package affy.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/affydata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affydata/meta.yaml>`_

   


.. conda:package:: bioconductor-affydata

   |downloads_bioconductor-affydata| |docker_bioconductor-affydata|

   :versions: 1.30.0, 1.28.0, 1.26.0, 1.24.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-affydata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affydata

   and update with::

      conda update bioconductor-affydata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affydata


.. |required_by_bioconductor-affydata| conda:required_by:: bioconductor-affydata
.. |downloads_bioconductor-affydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affydata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affydata| image:: https://quay.io/repository/biocontainers/bioconductor-affydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affydata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affydata/README.html

