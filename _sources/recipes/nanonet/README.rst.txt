:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanonet'
.. highlight: bash

nanonet
=======

.. conda:recipe:: nanonet
   :replaces_section_title:
   :noindex:

   Nanonet provides recurrent neural network basecalling for Oxford Nanopore MinION data.

   :homepage: https://github.com/nanoporetech/nanonet
   :license: MPL-2.0
   :recipe: /`nanonet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanonet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanonet/meta.yaml>`_

   


.. conda:package:: nanonet

   |downloads_nanonet| |docker_nanonet|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends argh: 
   :depends boost: ``1.60*``
   :depends cython: 
   :depends h5py: 
   :depends hdf5: 
   :depends libgcc: 
   :depends myriad: ``>=0.1.2``
   :depends numpy: 
   :depends pathtools: ``>=0.1.1``
   :depends python: ``2.7*``
   :depends pyyaml: ``>=3.10``
   :depends six: 
   :depends watchdog: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanonet

   and update with::

      conda update nanonet

   or use the docker container::

      docker pull quay.io/biocontainers/nanonet:<tag>

   (see `nanonet/tags`_ for valid values for ``<tag>``)


.. |downloads_nanonet| image:: https://img.shields.io/conda/dn/bioconda/nanonet.svg?style=flat
   :target: https://anaconda.org/bioconda/nanonet
   :alt:   (downloads)
.. |docker_nanonet| image:: https://quay.io/repository/biocontainers/nanonet/status
   :target: https://quay.io/repository/biocontainers/nanonet
.. _`nanonet/tags`: https://quay.io/repository/biocontainers/nanonet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanonet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanonet/README.html