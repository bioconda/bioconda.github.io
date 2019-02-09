.. title:: Package Recipe 'khmer'
.. highlight: bash


khmer
=====

.. conda:recipe:: khmer
   :replaces_section_title:

   khmer k\-mer counting library

   :homepage: https://khmer.readthedocs.io/
   :developer docs: https://github.com/dib-lab/khmer
   :license: BSD / BSD License
   :recipe: /`khmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khmer/meta.yaml>`_
   :links: biotools: :biotools:`khmer`, doi: :doi:`10.12688/f1000research.6924.1`

   


.. conda:package:: khmer

   |downloads_khmer| |docker_khmer|

   :versions: 3.0.0a2, 3.0.0a1, 2.1.2, 2.1, 2.1rc1, 2.0

   :depends: :conda:package:`bz2file`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`screed` >=1.0 

   :required~by: |required_by_khmer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install khmer

   and update with::

      conda update khmer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/khmer


.. |required_by_khmer| conda:required_by:: khmer
.. |downloads_khmer| image:: https://img.shields.io/conda/dn/bioconda/khmer.svg?style=flat
   :alt:   (downloads)
.. |docker_khmer| image:: https://quay.io/repository/biocontainers/khmer/status
   :target: https://quay.io/repository/biocontainers/khmer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/khmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/khmer/README.html

