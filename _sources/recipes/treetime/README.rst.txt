.. title:: Package Recipe 'treetime'
.. highlight: bash


treetime
========

.. conda:recipe:: treetime
   :replaces_section_title:

   Maximum\-Likelihood dating and ancestral inference for phylogenetic trees

   :homepage: https://github.com/neherlab/treetime
   :license: MIT / MIT
   :recipe: /`treetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treetime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treetime/meta.yaml>`_

   


.. conda:package:: treetime

   |downloads_treetime| |docker_treetime|

   :versions: 0.5.2, 0.5.1, 0.5.0, 0.4.1, 0.4.0, 0.2.4, 0.2.1, 0.1

   :depends: :conda:package:`biopython` >=1.66 :conda:package:`matplotlib`  :conda:package:`numpy` >=1.10.4 :conda:package:`pandas` >=0.17.1 :conda:package:`python` <3 :conda:package:`scipy` >=0.16.1 

   :required~by: |required_by_treetime|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treetime

   and update with::

      conda update treetime

   or use the docker container::

      docker pull quay.io/repository/biocontainers/treetime


.. |required_by_treetime| conda:required_by:: treetime
.. |downloads_treetime| image:: https://img.shields.io/conda/dn/bioconda/treetime.svg?style=flat
   :alt:   (downloads)
.. |docker_treetime| image:: https://quay.io/repository/biocontainers/treetime/status
   :target: https://quay.io/repository/biocontainers/treetime







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treetime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treetime/README.html

