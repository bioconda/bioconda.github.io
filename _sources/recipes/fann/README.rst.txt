.. title:: Package Recipe 'fann'
.. highlight: bash


fann
====

.. conda:recipe:: fann
   :replaces_section_title:

   Fast Artificial Neural Network Library

   :homepage: http://leenissen.dk/fann/wp/
   :license: LGPL-2.1
   :recipe: /`fann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fann/meta.yaml>`_

   


.. conda:package:: fann

   |downloads_fann| |docker_fann|

   :versions: 2.2.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_fann|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fann

   and update with::

      conda update fann

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fann


.. |required_by_fann| conda:required_by:: fann
.. |downloads_fann| image:: https://img.shields.io/conda/dn/bioconda/fann.svg?style=flat
   :alt:   (downloads)
.. |docker_fann| image:: https://quay.io/repository/biocontainers/fann/status
   :target: https://quay.io/repository/biocontainers/fann







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fann/README.html

