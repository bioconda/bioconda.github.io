.. title:: Package Recipe 'mmseqs2'
.. highlight: bash


mmseqs2
=======

.. conda:recipe:: mmseqs2
   :replaces_section_title:

   MMseqs2.0\: ultra fast and sensitive protein search and clustering suite

   :homepage: https://github.com/soedinglab/mmseqs2
   :license: GPLv3
   :recipe: /`mmseqs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2/meta.yaml>`_

   


.. conda:package:: mmseqs2

   |downloads_mmseqs2| |docker_mmseqs2|

   :versions: 7.4e23d, 6.f5a1c, 5.9375b, 4.bff50, 4.0b8cc, 3.be8f6, 2.23394

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`gawk`  :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`openmp`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_mmseqs2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mmseqs2

   and update with::

      conda update mmseqs2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mmseqs2


.. |required_by_mmseqs2| conda:required_by:: mmseqs2
.. |downloads_mmseqs2| image:: https://img.shields.io/conda/dn/bioconda/mmseqs2.svg?style=flat
   :alt:   (downloads)
.. |docker_mmseqs2| image:: https://quay.io/repository/biocontainers/mmseqs2/status
   :target: https://quay.io/repository/biocontainers/mmseqs2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmseqs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmseqs2/README.html

