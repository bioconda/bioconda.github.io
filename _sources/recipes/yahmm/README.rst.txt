:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yahmm'
.. highlight: bash

yahmm
=====

.. conda:recipe:: yahmm
   :replaces_section_title:
   :noindex:

   YAHMM is a HMM package for Python\, implemented in Cython for speed.

   :homepage: http://pypi.python.org/pypi/yahmm/
   :license: MIT
   :recipe: /`yahmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahmm/meta.yaml>`_

   


.. conda:package:: yahmm

   |downloads_yahmm| |docker_yahmm|

   :versions:
      
      

      ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-1``,  ``1.1.3-0``

      

   
   :depends cython: ``>=0.20.1``
   :depends libgcc-ng: ``>=9.3.0``
   :depends matplotlib-base: ``>=1.3.1``
   :depends networkx: ``>=1.8.1``
   :depends numpy: ``>=1.8.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scipy: ``>=0.13.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yahmm

   and update with::

      conda update yahmm

   or use the docker container::

      docker pull quay.io/biocontainers/yahmm:<tag>

   (see `yahmm/tags`_ for valid values for ``<tag>``)


.. |downloads_yahmm| image:: https://img.shields.io/conda/dn/bioconda/yahmm.svg?style=flat
   :target: https://anaconda.org/bioconda/yahmm
   :alt:   (downloads)
.. |docker_yahmm| image:: https://quay.io/repository/biocontainers/yahmm/status
   :target: https://quay.io/repository/biocontainers/yahmm
.. _`yahmm/tags`: https://quay.io/repository/biocontainers/yahmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yahmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yahmm/README.html