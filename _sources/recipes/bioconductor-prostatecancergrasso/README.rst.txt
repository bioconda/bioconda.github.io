.. title:: Package Recipe 'bioconductor-prostatecancergrasso'
.. highlight: bash


bioconductor-prostatecancergrasso
=================================

.. conda:recipe:: bioconductor-prostatecancergrasso
   :replaces_section_title:

   A Bioconductor data package for the Grasso \(2012\) Prostate Cancer dataset.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/prostateCancerGrasso.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostatecancergrasso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancergrasso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancergrasso/meta.yaml>`_

   


.. conda:package:: bioconductor-prostatecancergrasso

   |downloads_bioconductor-prostatecancergrasso| |docker_bioconductor-prostatecancergrasso|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-prostatecancergrasso|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prostatecancergrasso

   and update with::

      conda update bioconductor-prostatecancergrasso

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-prostatecancergrasso


.. |required_by_bioconductor-prostatecancergrasso| conda:required_by:: bioconductor-prostatecancergrasso
.. |downloads_bioconductor-prostatecancergrasso| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostatecancergrasso.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-prostatecancergrasso| image:: https://quay.io/repository/biocontainers/bioconductor-prostatecancergrasso/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostatecancergrasso







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostatecancergrasso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostatecancergrasso/README.html

