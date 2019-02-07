.. title:: Package Recipe 'nucamino'
.. highlight: bash


nucamino
========

.. conda:recipe:: nucamino
   :replaces_section_title:

   A nucleotide to amino acid alignment program optimized for virus gene sequences

   :homepage: https://github.com/hivdb/nucamino
   :license: MIT
   :recipe: /`nucamino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucamino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucamino/meta.yaml>`_

   


.. conda:package:: nucamino

   |downloads_nucamino| |docker_nucamino|

   :versions: 0.1.3

   :depends: 

   :required~by: |required_by_nucamino|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nucamino

   and update with::

      conda update nucamino

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nucamino


.. |required_by_nucamino| conda:required_by:: nucamino
.. |downloads_nucamino| image:: https://img.shields.io/conda/dn/bioconda/nucamino.svg?style=flat
   :alt:   (downloads)
.. |docker_nucamino| image:: https://quay.io/repository/biocontainers/nucamino/status
   :target: https://quay.io/repository/biocontainers/nucamino







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucamino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucamino/README.html

