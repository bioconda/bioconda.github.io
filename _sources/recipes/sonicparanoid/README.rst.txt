:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sonicparanoid'
.. highlight: bash

sonicparanoid
=============

.. conda:recipe:: sonicparanoid
   :replaces_section_title:
   :noindex:

   SonicParanoid\: fast\, easy and accurate orthology inference

   :homepage: http://iwasakilab.bs.s.u-tokyo.ac.jp/sonicparanoid/
   :license: GPL3 / GNU General Public License v3
   :recipe: /`sonicparanoid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty631`

   


.. conda:package:: sonicparanoid

   |downloads_sonicparanoid| |docker_sonicparanoid|

   :versions:
      
      

      ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``

      

   
   :depends biopython: ``>=1.67``
   :depends cython: 
   :depends gcc_linux-64: ``7.*``
   :depends gxx_linux-64: ``7.*``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends make: 
   :depends mmseqs2: ``6.f5a1c``
   :depends numpy: ``>=1.13.0``
   :depends pandas: ``>=0.22.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends sh: ``>=1.12.14``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sonicparanoid

   and update with::

      conda update sonicparanoid

   or use the docker container::

      docker pull quay.io/biocontainers/sonicparanoid:<tag>

   (see `sonicparanoid/tags`_ for valid values for ``<tag>``)


.. |downloads_sonicparanoid| image:: https://img.shields.io/conda/dn/bioconda/sonicparanoid.svg?style=flat
   :target: https://anaconda.org/bioconda/sonicparanoid
   :alt:   (downloads)
.. |docker_sonicparanoid| image:: https://quay.io/repository/biocontainers/sonicparanoid/status
   :target: https://quay.io/repository/biocontainers/sonicparanoid
.. _`sonicparanoid/tags`: https://quay.io/repository/biocontainers/sonicparanoid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sonicparanoid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sonicparanoid/README.html