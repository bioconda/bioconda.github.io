:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sloika'
.. highlight: bash

sloika
======

.. conda:recipe:: sloika
   :replaces_section_title:

   Sloika is Oxford Nanopore Technologies\' software for training neural network models for base calling

   :homepage: https://github.com/nanoporetech/sloika
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`sloika <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sloika>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sloika/meta.yaml>`_

   


.. conda:package:: sloika

   |downloads_sloika| |docker_sloika|

   :versions: 2.0.1-0
   
   :depends biopython: >=1.63
   
   :depends h5py: >=2.2.1,<=2.6.0
   
   :depends hdf5: 1.8.17*
   
   :depends numpy: 1.12*
   
   :depends theano: 0.8.2
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sloika

   and update with::

      conda update sloika

   or use the docker container::

      docker pull quay.io/biocontainers/sloika:<tag>

   (see `sloika/tags`_ for valid values for ``<tag>``)


.. |downloads_sloika| image:: https://img.shields.io/conda/dn/bioconda/sloika.svg?style=flat
   :alt:   (downloads)
.. |docker_sloika| image:: https://quay.io/repository/biocontainers/sloika/status
   :target: https://quay.io/repository/biocontainers/sloika
.. _`sloika/tags`: https://quay.io/repository/biocontainers/sloika?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sloika/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sloika/README.html