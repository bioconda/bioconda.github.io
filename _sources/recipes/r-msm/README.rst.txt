.. title:: Package Recipe 'r-msm'
.. highlight: bash


r-msm
=====

.. conda:recipe:: r-msm
   :replaces_section_title:

   Functions for fitting continuous\-time Markov and hidden Markov multi\-state models to longitudinal data.  Designed for processes observed at arbitrary times in continuous time \(panel data\) but some other observation schemes are supported. Both Markov transition rates and the hidden Markov output process can be modelled in terms of covariates\, which may be constant or piecewise\-constant in time.

   :homepage: https://github.com/chjackson/msm
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-msm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-msm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-msm/meta.yaml>`_

   


.. conda:package:: r-msm

   |downloads_r-msm| |docker_r-msm|

   :versions: 1.6.6

   :depends: :conda:package:`r-base` 3.4.1* :conda:package:`r-expm`  :conda:package:`r-mvtnorm`  :conda:package:`r-survival`  

   :required~by: |required_by_r-msm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-msm

   and update with::

      conda update r-msm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-msm


.. |required_by_r-msm| conda:required_by:: r-msm
.. |downloads_r-msm| image:: https://img.shields.io/conda/dn/bioconda/r-msm.svg?style=flat
   :alt:   (downloads)
.. |docker_r-msm| image:: https://quay.io/repository/biocontainers/r-msm/status
   :target: https://quay.io/repository/biocontainers/r-msm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-msm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-msm/README.html

