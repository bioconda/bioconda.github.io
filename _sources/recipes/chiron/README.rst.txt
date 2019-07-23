:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chiron'
.. highlight: bash

chiron
======

.. conda:recipe:: chiron
   :replaces_section_title:

   A deep neural network basecaller for nanopore sequencing.

   :homepage: https://github.com/haotianteng/chiron
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`chiron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chiron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chiron/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giy037`, biotools: :biotools:`Chiron`

   


.. conda:package:: chiron

   |downloads_chiron| |docker_chiron|

   :versions: 0.4.2.1-0
   
   :depends h5py: >=2.7.0
   :depends mappy: >=2.10.0
   :depends numpy: >=1.13.3
   :depends python: 2.7.*
   :depends statsmodels: >=0.8.0
   :depends tensorflow: >=1.3.0
   :depends tqdm: >=4.23.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chiron

   and update with::

      conda update chiron

   or use the docker container::

      docker pull quay.io/biocontainers/chiron:<tag>

   (see `chiron/tags`_ for valid values for ``<tag>``)


.. |downloads_chiron| image:: https://img.shields.io/conda/dn/bioconda/chiron.svg?style=flat
   :target: https://anaconda.org/bioconda/chiron
   :alt:   (downloads)
.. |docker_chiron| image:: https://quay.io/repository/biocontainers/chiron/status
   :target: https://quay.io/repository/biocontainers/chiron
.. _`chiron/tags`: https://quay.io/repository/biocontainers/chiron?tab=tags






Notes
-----
conda\-forge\:\:tensorflow requires GLIBC \>\=2.16. It should be present on most\, but not all systems. See https\:\/\/github.com\/conda\-forge\/tensorflow\-feedstock\/issues\/67


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chiron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chiron/README.html