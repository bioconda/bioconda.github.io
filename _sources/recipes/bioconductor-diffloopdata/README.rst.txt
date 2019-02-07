.. title:: Package Recipe 'bioconductor-diffloopdata'
.. highlight: bash


bioconductor-diffloopdata
=========================

.. conda:recipe:: bioconductor-diffloopdata
   :replaces_section_title:

   ChIA\-PET example datasets and additional data for use with the diffloop package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/diffloopdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-diffloopdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffloopdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffloopdata/meta.yaml>`_

   


.. conda:package:: bioconductor-diffloopdata

   |downloads_bioconductor-diffloopdata| |docker_bioconductor-diffloopdata|

   :versions: 1.10.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-diffloopdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffloopdata

   and update with::

      conda update bioconductor-diffloopdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-diffloopdata


.. |required_by_bioconductor-diffloopdata| conda:required_by:: bioconductor-diffloopdata
.. |downloads_bioconductor-diffloopdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffloopdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-diffloopdata| image:: https://quay.io/repository/biocontainers/bioconductor-diffloopdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffloopdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffloopdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffloopdata/README.html

