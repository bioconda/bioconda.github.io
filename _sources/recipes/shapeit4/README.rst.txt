:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapeit4'
.. highlight: bash

shapeit4
========

.. conda:recipe:: shapeit4
   :replaces_section_title:

   fast and accurate method for estimation of haplotypes \(phasing\)

   :homepage: https://odelaneau.github.io/shapeit4/
   :license: MIT
   :recipe: /`shapeit4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit4/meta.yaml>`_
   :links: doi: :doi:`10.1101/493403`

   


.. conda:package:: shapeit4

   |downloads_shapeit4| |docker_shapeit4|

   :versions: 4.0-0
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends bzip2: >=1.0.8,<2.0a0
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shapeit4

   and update with::

      conda update shapeit4

   or use the docker container::

      docker pull quay.io/biocontainers/shapeit4:<tag>

   (see `shapeit4/tags`_ for valid values for ``<tag>``)


.. |downloads_shapeit4| image:: https://img.shields.io/conda/dn/bioconda/shapeit4.svg?style=flat
   :target: https://anaconda.org/bioconda/shapeit4
   :alt:   (downloads)
.. |docker_shapeit4| image:: https://quay.io/repository/biocontainers/shapeit4/status
   :target: https://quay.io/repository/biocontainers/shapeit4
.. _`shapeit4/tags`: https://quay.io/repository/biocontainers/shapeit4?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeit4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeit4/README.html