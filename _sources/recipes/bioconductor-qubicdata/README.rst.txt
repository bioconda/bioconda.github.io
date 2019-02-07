.. title:: Package Recipe 'bioconductor-qubicdata'
.. highlight: bash


bioconductor-qubicdata
======================

.. conda:recipe:: bioconductor-qubicdata
   :replaces_section_title:

   The data employed in the vignette of the QUBIC package. These data belong to Many Microbe Microarrays Database and STRING v10.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/QUBICdata.html
   :license: Unlimited | file LICENSE
   :recipe: /`bioconductor-qubicdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubicdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubicdata/meta.yaml>`_

   


.. conda:package:: bioconductor-qubicdata

   |downloads_bioconductor-qubicdata| |docker_bioconductor-qubicdata|

   :versions: 1.10.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-qubicdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qubicdata

   and update with::

      conda update bioconductor-qubicdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-qubicdata


.. |required_by_bioconductor-qubicdata| conda:required_by:: bioconductor-qubicdata
.. |downloads_bioconductor-qubicdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qubicdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-qubicdata| image:: https://quay.io/repository/biocontainers/bioconductor-qubicdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qubicdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qubicdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qubicdata/README.html

