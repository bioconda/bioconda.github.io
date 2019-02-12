.. title:: Package Recipe 'mash'
.. highlight: bash


mash
====

.. conda:recipe:: mash
   :replaces_section_title:

   Fast sequence distance estimator that uses MinHash

   :homepage: https://github.com/marbl/Mash
   :license: https://raw.githubusercontent.com/marbl/Mash/master/LICENSE.txt
   :recipe: /`mash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mash/meta.yaml>`_

   


.. conda:package:: mash

   |downloads_mash| |docker_mash|

   :versions: 2.1, 2.0, 1.1, 1.0.2

   :depends: :conda:package:`capnproto`  :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_mash|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mash

   and update with::

      conda update mash

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mash


.. |required_by_mash| conda:required_by:: mash
.. |downloads_mash| image:: https://img.shields.io/conda/dn/bioconda/mash.svg?style=flat
   :alt:   (downloads)
.. |docker_mash| image:: https://quay.io/repository/biocontainers/mash/status
   :target: https://quay.io/repository/biocontainers/mash







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mash/README.html

