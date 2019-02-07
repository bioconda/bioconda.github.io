.. title:: Package Recipe 'bioconductor-snadata'
.. highlight: bash


bioconductor-snadata
====================

.. conda:recipe:: bioconductor-snadata
   :replaces_section_title:

   Data from Wasserman \& Faust \(1999\) \"Social Network Analysis\"

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/SNAData.html
   :license: LGPL
   :recipe: /`bioconductor-snadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snadata/meta.yaml>`_

   


.. conda:package:: bioconductor-snadata

   |downloads_bioconductor-snadata| |docker_bioconductor-snadata|

   :versions: 1.28.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-snadata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snadata

   and update with::

      conda update bioconductor-snadata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-snadata


.. |required_by_bioconductor-snadata| conda:required_by:: bioconductor-snadata
.. |downloads_bioconductor-snadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snadata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-snadata| image:: https://quay.io/repository/biocontainers/bioconductor-snadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snadata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snadata/README.html

