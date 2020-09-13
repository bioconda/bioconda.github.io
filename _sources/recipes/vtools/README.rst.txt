:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vtools'
.. highlight: bash

vtools
======

.. conda:recipe:: vtools
   :replaces_section_title:
   :noindex:

   Various tools operating over VCF files. Uses cyvcf2 and cython under the hood for speed

   :homepage: https://github.com/LUMC/vtools
   :license: MIT / MIT
   :recipe: /`vtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vtools/meta.yaml>`_

   


.. conda:package:: vtools

   |downloads_vtools| |docker_vtools|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends click: 
   :depends cyvcf2: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends numpy: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vtools

   and update with::

      conda update vtools

   or use the docker container::

      docker pull quay.io/biocontainers/vtools:<tag>

   (see `vtools/tags`_ for valid values for ``<tag>``)


.. |downloads_vtools| image:: https://img.shields.io/conda/dn/bioconda/vtools.svg?style=flat
   :target: https://anaconda.org/bioconda/vtools
   :alt:   (downloads)
.. |docker_vtools| image:: https://quay.io/repository/biocontainers/vtools/status
   :target: https://quay.io/repository/biocontainers/vtools
.. _`vtools/tags`: https://quay.io/repository/biocontainers/vtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vtools/README.html