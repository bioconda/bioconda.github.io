:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadbit'
.. highlight: bash

tadbit
======

.. conda:recipe:: tadbit
   :replaces_section_title:
   :noindex:

   TADbit is a complete Python library to deal with all steps to analyze\, model and explore 3C\-based data.

   :homepage: http://sgt.cnag.cat/3dg/tadbit/
   :license: GPL-3.0
   :recipe: /`tadbit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadbit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadbit/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1005665`

   


.. conda:package:: tadbit

   |downloads_tadbit| |docker_tadbit|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.5-1``,  ``0.5-0``

      

   
   :depends future: 
   :depends gem3-mapper: 
   :depends h5py: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends matplotlib-base: 
   :depends mcl: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tadbit

   and update with::

      conda update tadbit

   or use the docker container::

      docker pull quay.io/biocontainers/tadbit:<tag>

   (see `tadbit/tags`_ for valid values for ``<tag>``)


.. |downloads_tadbit| image:: https://img.shields.io/conda/dn/bioconda/tadbit.svg?style=flat
   :target: https://anaconda.org/bioconda/tadbit
   :alt:   (downloads)
.. |docker_tadbit| image:: https://quay.io/repository/biocontainers/tadbit/status
   :target: https://quay.io/repository/biocontainers/tadbit
.. _`tadbit/tags`: https://quay.io/repository/biocontainers/tadbit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadbit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadbit/README.html