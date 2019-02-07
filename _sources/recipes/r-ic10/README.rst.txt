.. title:: Package Recipe 'r-ic10'
.. highlight: bash


r-ic10
======

.. conda:recipe:: r-ic10
   :replaces_section_title:

   Implementation of the classifier described in the paper \'Genome\-driven integrated classification of breast cancer validated in over 7\,500 samples\' \(Ali HR et al.\, Genome Biology 2014\). It uses copy number and\/or expression form breast cancer data\, trains a pamr classifier \(Tibshirani et al.\) with the features available and predicts the iC10 group.

   :homepage: https://CRAN.R-project.org/package=iC10
   :license: GPL3 / GPL-3
   :recipe: /`r-ic10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ic10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ic10/meta.yaml>`_

   


.. conda:package:: r-ic10

   |downloads_r-ic10| |docker_r-ic10|

   :versions: 1.4.2, 1.1.3

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-ic10trainingdata`  :conda:package:`r-pamr`  

   :required~by: |required_by_r-ic10|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ic10

   and update with::

      conda update r-ic10

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ic10


.. |required_by_r-ic10| conda:required_by:: r-ic10
.. |downloads_r-ic10| image:: https://img.shields.io/conda/dn/bioconda/r-ic10.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ic10| image:: https://quay.io/repository/biocontainers/r-ic10/status
   :target: https://quay.io/repository/biocontainers/r-ic10







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ic10/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ic10/README.html

