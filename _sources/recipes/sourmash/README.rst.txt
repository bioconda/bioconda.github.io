.. title:: Package Recipe 'sourmash'
.. highlight: bash


sourmash
========

.. conda:recipe:: sourmash
   :replaces_section_title:

   Compute and compare MinHash signatures for DNA data sets.

   :homepage: https://github.com/dib-lab/sourmash
   :license: BSD / BSD License
   :recipe: /`sourmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourmash/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.00027`

   


.. conda:package:: sourmash

   |downloads_sourmash| |docker_sourmash|

   :versions: 2.0.0a11, 2.0.0a10, 2.0.0a9, 2.0.0a8, 2.0.0a7, 2.0.0a6, 2.0.0a5, 2.0.0a4, 2.0.0a3, 2.0.0a2, 2.0.0a1, 1.0

   :depends: :conda:package:`ijson`  :conda:package:`khmer` >=2.1 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  :conda:package:`screed` >=0.9 

   :required~by: |required_by_sourmash|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sourmash

   and update with::

      conda update sourmash

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sourmash


.. |required_by_sourmash| conda:required_by:: sourmash
.. |downloads_sourmash| image:: https://img.shields.io/conda/dn/bioconda/sourmash.svg?style=flat
   :alt:   (downloads)
.. |docker_sourmash| image:: https://quay.io/repository/biocontainers/sourmash/status
   :target: https://quay.io/repository/biocontainers/sourmash







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourmash/README.html

