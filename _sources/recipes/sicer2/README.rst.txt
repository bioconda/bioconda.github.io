:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sicer2'
.. highlight: bash

sicer2
======

.. conda:recipe:: sicer2
   :replaces_section_title:
   :noindex:

   Redesigned and improved ChIP\-seq broad peak calling tool SICER.

   :homepage: https://pypi.org/project/SICER2/
   :developer docs: https://github.com/zanglab/SICER2
   :license: MIT / MIT
   :recipe: /`sicer2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer2/meta.yaml>`_

   


.. conda:package:: sicer2

   |downloads_sicer2| |docker_sicer2|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends numpy: ``>=1.17.5,<2.0a0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scipy: ``>=1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sicer2

   and update with::

      conda update sicer2

   or use the docker container::

      docker pull quay.io/biocontainers/sicer2:<tag>

   (see `sicer2/tags`_ for valid values for ``<tag>``)


.. |downloads_sicer2| image:: https://img.shields.io/conda/dn/bioconda/sicer2.svg?style=flat
   :target: https://anaconda.org/bioconda/sicer2
   :alt:   (downloads)
.. |docker_sicer2| image:: https://quay.io/repository/biocontainers/sicer2/status
   :target: https://quay.io/repository/biocontainers/sicer2
.. _`sicer2/tags`: https://quay.io/repository/biocontainers/sicer2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sicer2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sicer2/README.html