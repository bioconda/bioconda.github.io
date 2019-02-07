.. title:: Package Recipe 'mmvc'
.. highlight: bash


mmvc
====

.. conda:recipe:: mmvc
   :replaces_section_title:

   Call variants based on a Bayesian multinomial mixture model.

   :homepage: https://github.com/veg/mmvc
   :license: MIT
   :recipe: /`mmvc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmvc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmvc/meta.yaml>`_

   


.. conda:package:: mmvc

   |downloads_mmvc| |docker_mmvc|

   :versions: 1.0.2

   :depends: :conda:package:`julia` 0.6.1 

   :required~by: |required_by_mmvc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mmvc

   and update with::

      conda update mmvc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mmvc


.. |required_by_mmvc| conda:required_by:: mmvc
.. |downloads_mmvc| image:: https://img.shields.io/conda/dn/bioconda/mmvc.svg?style=flat
   :alt:   (downloads)
.. |docker_mmvc| image:: https://quay.io/repository/biocontainers/mmvc/status
   :target: https://quay.io/repository/biocontainers/mmvc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmvc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmvc/README.html

