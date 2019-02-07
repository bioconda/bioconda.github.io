.. title:: Package Recipe 'bioconductor-italicsdata'
.. highlight: bash


bioconductor-italicsdata
========================

.. conda:recipe:: bioconductor-italicsdata
   :replaces_section_title:

   Data needed to use the ITALICS package

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ITALICSData.html
   :license: GPL
   :recipe: /`bioconductor-italicsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italicsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italicsdata/meta.yaml>`_

   


.. conda:package:: bioconductor-italicsdata

   |downloads_bioconductor-italicsdata| |docker_bioconductor-italicsdata|

   :versions: 2.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-italicsdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-italicsdata

   and update with::

      conda update bioconductor-italicsdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-italicsdata


.. |required_by_bioconductor-italicsdata| conda:required_by:: bioconductor-italicsdata
.. |downloads_bioconductor-italicsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-italicsdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-italicsdata| image:: https://quay.io/repository/biocontainers/bioconductor-italicsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-italicsdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-italicsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-italicsdata/README.html

