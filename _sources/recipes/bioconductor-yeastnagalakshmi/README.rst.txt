.. title:: Package Recipe 'bioconductor-yeastnagalakshmi'
.. highlight: bash


bioconductor-yeastnagalakshmi
=============================

.. conda:recipe:: bioconductor-yeastnagalakshmi
   :replaces_section_title:

   The yeast genome data was retrieved from the sequence read archive\, aligned with bwa\, and converted to BAM format with samtools.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/yeastNagalakshmi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yeastnagalakshmi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastnagalakshmi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastnagalakshmi/meta.yaml>`_

   


.. conda:package:: bioconductor-yeastnagalakshmi

   |downloads_bioconductor-yeastnagalakshmi| |docker_bioconductor-yeastnagalakshmi|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-yeastnagalakshmi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yeastnagalakshmi

   and update with::

      conda update bioconductor-yeastnagalakshmi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi


.. |required_by_bioconductor-yeastnagalakshmi| conda:required_by:: bioconductor-yeastnagalakshmi
.. |downloads_bioconductor-yeastnagalakshmi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeastnagalakshmi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-yeastnagalakshmi| image:: https://quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeastnagalakshmi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeastnagalakshmi/README.html

