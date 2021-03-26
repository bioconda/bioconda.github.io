:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kerneltree'
.. highlight: bash

kerneltree
==========

.. conda:recipe:: kerneltree
   :replaces_section_title:
   :noindex:

   Ultrafast interval tree implementation stolen from the kernel\, modified and wrapped for Python.

   :homepage: https://pypi.org/project/kerneltree/
   :developer docs: https://github.com/biocore-ntnu/kerneltree
   :license: GPL2
   :recipe: /`kerneltree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kerneltree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kerneltree/meta.yaml>`_

   


.. conda:package:: kerneltree

   |downloads_kerneltree| |docker_kerneltree|

   :versions:
      
      

      ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends pip: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kerneltree

   and update with::

      conda update kerneltree

   or use the docker container::

      docker pull quay.io/biocontainers/kerneltree:<tag>

   (see `kerneltree/tags`_ for valid values for ``<tag>``)


.. |downloads_kerneltree| image:: https://img.shields.io/conda/dn/bioconda/kerneltree.svg?style=flat
   :target: https://anaconda.org/bioconda/kerneltree
   :alt:   (downloads)
.. |docker_kerneltree| image:: https://quay.io/repository/biocontainers/kerneltree/status
   :target: https://quay.io/repository/biocontainers/kerneltree
.. _`kerneltree/tags`: https://quay.io/repository/biocontainers/kerneltree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kerneltree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kerneltree/README.html