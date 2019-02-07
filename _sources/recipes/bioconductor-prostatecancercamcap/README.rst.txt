.. title:: Package Recipe 'bioconductor-prostatecancercamcap'
.. highlight: bash


bioconductor-prostatecancercamcap
=================================

.. conda:recipe:: bioconductor-prostatecancercamcap
   :replaces_section_title:

   A Bioconductor data package for the Ross\-Adams \(2015\) Prostate Cancer dataset.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/prostateCancerCamcap.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostatecancercamcap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancercamcap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancercamcap/meta.yaml>`_

   


.. conda:package:: bioconductor-prostatecancercamcap

   |downloads_bioconductor-prostatecancercamcap| |docker_bioconductor-prostatecancercamcap|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-prostatecancercamcap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prostatecancercamcap

   and update with::

      conda update bioconductor-prostatecancercamcap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-prostatecancercamcap


.. |required_by_bioconductor-prostatecancercamcap| conda:required_by:: bioconductor-prostatecancercamcap
.. |downloads_bioconductor-prostatecancercamcap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostatecancercamcap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-prostatecancercamcap| image:: https://quay.io/repository/biocontainers/bioconductor-prostatecancercamcap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostatecancercamcap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostatecancercamcap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostatecancercamcap/README.html

