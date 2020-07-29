:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pp-sketchlib'
.. highlight: bash

pp-sketchlib
============

.. conda:recipe:: pp-sketchlib
   :replaces_section_title:
   :noindex:

   Library of sketching functions used by PopPUNK

   :homepage: https://github.com/johnlees/pp-sketchlib
   :license: APACHE / Apache-2.0
   :recipe: /`pp-sketchlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pp-sketchlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pp-sketchlib/meta.yaml>`_

   


.. conda:package:: pp-sketchlib

   |downloads_pp-sketchlib| |docker_pp-sketchlib|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends h5py: 
   :depends hdf5: ``>=1.10.5,<1.10.6.0a0``
   :depends intel-openmp: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends mkl: ``>=2019.5,<2020.0a0``
   :depends numpy: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pp-sketchlib

   and update with::

      conda update pp-sketchlib

   or use the docker container::

      docker pull quay.io/biocontainers/pp-sketchlib:<tag>

   (see `pp-sketchlib/tags`_ for valid values for ``<tag>``)


.. |downloads_pp-sketchlib| image:: https://img.shields.io/conda/dn/bioconda/pp-sketchlib.svg?style=flat
   :target: https://anaconda.org/bioconda/pp-sketchlib
   :alt:   (downloads)
.. |docker_pp-sketchlib| image:: https://quay.io/repository/biocontainers/pp-sketchlib/status
   :target: https://quay.io/repository/biocontainers/pp-sketchlib
.. _`pp-sketchlib/tags`: https://quay.io/repository/biocontainers/pp-sketchlib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pp-sketchlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pp-sketchlib/README.html