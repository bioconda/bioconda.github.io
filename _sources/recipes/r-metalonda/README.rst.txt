.. title:: Package Recipe 'r-metalonda'
.. highlight: bash


r-metalonda
===========

.. conda:recipe:: r-metalonda
   :replaces_section_title:

   Identify time intervals of differentially abundant metagenomics features in longitudinal studies.

   :homepage: https://github.com/aametwally/MetaLonDA
   :license: MIT / MIT
   :recipe: /`r-metalonda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metalonda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metalonda/meta.yaml>`_

   


.. conda:package:: r-metalonda

   |downloads_r-metalonda| |docker_r-metalonda|

   :versions: 1.1.0

   :depends: :conda:package:`bioconductor-deseq2`  :conda:package:`bioconductor-edger`  :conda:package:`bioconductor-metagenomeseq`  :conda:package:`r-base` 3.4.1* :conda:package:`r-catools`  :conda:package:`r-doparallel`  :conda:package:`r-ggplot2`  :conda:package:`r-gss`  :conda:package:`r-plyr`  

   :required~by: |required_by_r-metalonda|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-metalonda

   and update with::

      conda update r-metalonda

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-metalonda


.. |required_by_r-metalonda| conda:required_by:: r-metalonda
.. |downloads_r-metalonda| image:: https://img.shields.io/conda/dn/bioconda/r-metalonda.svg?style=flat
   :alt:   (downloads)
.. |docker_r-metalonda| image:: https://quay.io/repository/biocontainers/r-metalonda/status
   :target: https://quay.io/repository/biocontainers/r-metalonda







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metalonda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metalonda/README.html

