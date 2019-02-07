.. title:: Package Recipe 'bioconductor-mircompdata'
.. highlight: bash


bioconductor-mircompdata
========================

.. conda:recipe:: bioconductor-mircompdata
   :replaces_section_title:

   Raw amplification data from a large microRNA mixture \/ dilution study. These data are used by the miRcomp package to assess the performance of methods that estimate expression from the amplification curves.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/miRcompData.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-mircompdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircompdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircompdata/meta.yaml>`_

   


.. conda:package:: bioconductor-mircompdata

   |downloads_bioconductor-mircompdata| |docker_bioconductor-mircompdata|

   :versions: 1.12.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mircompdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mircompdata

   and update with::

      conda update bioconductor-mircompdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mircompdata


.. |required_by_bioconductor-mircompdata| conda:required_by:: bioconductor-mircompdata
.. |downloads_bioconductor-mircompdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mircompdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mircompdata| image:: https://quay.io/repository/biocontainers/bioconductor-mircompdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mircompdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mircompdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mircompdata/README.html

