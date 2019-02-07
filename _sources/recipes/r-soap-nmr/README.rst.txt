.. title:: Package Recipe 'r-soap-nmr'
.. highlight: bash


r-soap-nmr
==========

.. conda:recipe:: r-soap-nmr
   :replaces_section_title:

   R package for 1H\-NMR data pre\-treatment 

   :homepage: https://github.com/ManonMartin/SOAP-NMR
   :license: GPL2
   :recipe: /`r-soap-nmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-soap-nmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-soap-nmr/meta.yaml>`_

   


.. conda:package:: r-soap-nmr

   |downloads_r-soap-nmr| |docker_r-soap-nmr|

   :versions: 0.1.0.20170207

   :depends: :conda:package:`r` 3.3.1* :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-matrix`  :conda:package:`r-matrixstats`  :conda:package:`r-ptw`  :conda:package:`r-reshape2`  

   :required~by: |required_by_r-soap-nmr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-soap-nmr

   and update with::

      conda update r-soap-nmr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-soap-nmr


.. |required_by_r-soap-nmr| conda:required_by:: r-soap-nmr
.. |downloads_r-soap-nmr| image:: https://img.shields.io/conda/dn/bioconda/r-soap-nmr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-soap-nmr| image:: https://quay.io/repository/biocontainers/r-soap-nmr/status
   :target: https://quay.io/repository/biocontainers/r-soap-nmr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-soap-nmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-soap-nmr/README.html

