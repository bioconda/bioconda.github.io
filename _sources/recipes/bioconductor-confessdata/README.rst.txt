.. title:: Package Recipe 'bioconductor-confessdata'
.. highlight: bash


bioconductor-confessdata
========================

.. conda:recipe:: bioconductor-confessdata
   :replaces_section_title:

   Example text\-converted C01 image files for use in the CONFESS Bioconductor package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/CONFESSdata.html
   :license: GPL-2
   :recipe: /`bioconductor-confessdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confessdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confessdata/meta.yaml>`_

   


.. conda:package:: bioconductor-confessdata

   |downloads_bioconductor-confessdata| |docker_bioconductor-confessdata|

   :versions: 1.10.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-confessdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-confessdata

   and update with::

      conda update bioconductor-confessdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-confessdata


.. |required_by_bioconductor-confessdata| conda:required_by:: bioconductor-confessdata
.. |downloads_bioconductor-confessdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-confessdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-confessdata| image:: https://quay.io/repository/biocontainers/bioconductor-confessdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-confessdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-confessdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-confessdata/README.html

