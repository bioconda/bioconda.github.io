.. title:: Package Recipe 'bioconductor-iontreedata'
.. highlight: bash


bioconductor-iontreedata
========================

.. conda:recipe:: bioconductor-iontreedata
   :replaces_section_title:

   Raw MS2\, MS3 scans from direct infusion mass spectrometry \(DIMS\) and a demo ion tree database \'mzDB\' derived from the DIMS data are included. The demo database is used to show the functionalities provided by the \'iontree\' package\, not for the purpose of compound identification by any means.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/iontreeData.html
   :license: GPL-2
   :recipe: /`bioconductor-iontreedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iontreedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iontreedata/meta.yaml>`_

   


.. conda:package:: bioconductor-iontreedata

   |downloads_bioconductor-iontreedata| |docker_bioconductor-iontreedata|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-iontreedata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iontreedata

   and update with::

      conda update bioconductor-iontreedata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-iontreedata


.. |required_by_bioconductor-iontreedata| conda:required_by:: bioconductor-iontreedata
.. |downloads_bioconductor-iontreedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iontreedata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iontreedata| image:: https://quay.io/repository/biocontainers/bioconductor-iontreedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iontreedata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iontreedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iontreedata/README.html

