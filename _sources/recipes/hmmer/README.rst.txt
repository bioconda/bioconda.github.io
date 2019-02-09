.. title:: Package Recipe 'hmmer'
.. highlight: bash


hmmer
=====

.. conda:recipe:: hmmer
   :replaces_section_title:

   Biosequence analysis using profile hidden Markov models

   :homepage: http://hmmer.org/
   :license: BSD
   :recipe: /`hmmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer/meta.yaml>`_

   


.. conda:package:: hmmer

   |downloads_hmmer| |docker_hmmer|

   :versions: 3.2.1, 3.2, 3.1b2, 2.3.2

   :depends: :conda:package:`libcxx` >=4.0.1 

   :required~by: |required_by_hmmer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmmer

   and update with::

      conda update hmmer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hmmer


.. |required_by_hmmer| conda:required_by:: hmmer
.. |downloads_hmmer| image:: https://img.shields.io/conda/dn/bioconda/hmmer.svg?style=flat
   :alt:   (downloads)
.. |docker_hmmer| image:: https://quay.io/repository/biocontainers/hmmer/status
   :target: https://quay.io/repository/biocontainers/hmmer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmer/README.html

