.. title:: Package Recipe 'gem3-mapper'
.. highlight: bash


gem3-mapper
===========

.. conda:recipe:: gem3-mapper
   :replaces_section_title:

   The GEM read mapper \(v3\).

   :homepage: https://github.com/smarco/gem3-mapper
   :license: GPL-3.0
   :recipe: /`gem3-mapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gem3-mapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gem3-mapper/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.2221`, biotools: :biotools:`GEM_Mapper`

   


.. conda:package:: gem3-mapper

   |downloads_gem3-mapper| |docker_gem3-mapper|

   :versions: 3.6.1

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_gem3-mapper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gem3-mapper

   and update with::

      conda update gem3-mapper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gem3-mapper


.. |required_by_gem3-mapper| conda:required_by:: gem3-mapper
.. |downloads_gem3-mapper| image:: https://img.shields.io/conda/dn/bioconda/gem3-mapper.svg?style=flat
   :alt:   (downloads)
.. |docker_gem3-mapper| image:: https://quay.io/repository/biocontainers/gem3-mapper/status
   :target: https://quay.io/repository/biocontainers/gem3-mapper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gem3-mapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gem3-mapper/README.html

