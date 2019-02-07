.. title:: Package Recipe 'graphclust-wrappers'
.. highlight: bash


graphclust-wrappers
===================

.. conda:recipe:: graphclust-wrappers
   :replaces_section_title:

   The set of individual perl wrappers extracted from GraphClust pipeline

   :homepage: http://www.bioinf.uni-freiburg.de/Software/GraphClust/
   :license: GPLv3
   :recipe: /`graphclust-wrappers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphclust-wrappers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphclust-wrappers/meta.yaml>`_

   


.. conda:package:: graphclust-wrappers

   |downloads_graphclust-wrappers| |docker_graphclust-wrappers|

   :versions: 0.6.0, 0.5.2, 0.5.1, 0.5.0, 0.3.1, 0.3.0, 0.2.0, 0.1.12, 0.1.11, 0.1.10, 0.1.9, 0.1.8, 0.1.7, 0.1

   :depends: :conda:package:`biopython` 1.70.0.* :conda:package:`pandas` 0.23.0.* :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-array-utils`  :conda:package:`perl-math-round`  

   :required~by: |required_by_graphclust-wrappers|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphclust-wrappers

   and update with::

      conda update graphclust-wrappers

   or use the docker container::

      docker pull quay.io/repository/biocontainers/graphclust-wrappers


.. |required_by_graphclust-wrappers| conda:required_by:: graphclust-wrappers
.. |downloads_graphclust-wrappers| image:: https://img.shields.io/conda/dn/bioconda/graphclust-wrappers.svg?style=flat
   :alt:   (downloads)
.. |docker_graphclust-wrappers| image:: https://quay.io/repository/biocontainers/graphclust-wrappers/status
   :target: https://quay.io/repository/biocontainers/graphclust-wrappers







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphclust-wrappers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphclust-wrappers/README.html

