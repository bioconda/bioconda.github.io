:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlpy'
.. highlight: bash

mlpy
====

.. conda:recipe:: mlpy
   :replaces_section_title:
   :noindex:

   mlpy is a Python module for Machine Learning built on top of NumPy\/SciPy and the GNU Scientific Libraries.

   :homepage: http://mlpy.sourceforge.net/index.html
   :documentation: http://mlpy.sourceforge.net/docs
   
   :developer docs: http://hg.code.sf.net/p/mlpy/code/
   :license: GPL3
   :recipe: /`mlpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlpy/meta.yaml>`_

   


.. conda:package:: mlpy

   |downloads_mlpy| |docker_mlpy|

   :versions:
      
      

      ``3.5.0-0``

      

   
   :depends gsl: ``>=2.4,<2.5.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends numpy: ``>=1.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends scipy: ``>=0.7.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mlpy

   and update with::

      conda update mlpy

   or use the docker container::

      docker pull quay.io/biocontainers/mlpy:<tag>

   (see `mlpy/tags`_ for valid values for ``<tag>``)


.. |downloads_mlpy| image:: https://img.shields.io/conda/dn/bioconda/mlpy.svg?style=flat
   :target: https://anaconda.org/bioconda/mlpy
   :alt:   (downloads)
.. |docker_mlpy| image:: https://quay.io/repository/biocontainers/mlpy/status
   :target: https://quay.io/repository/biocontainers/mlpy
.. _`mlpy/tags`: https://quay.io/repository/biocontainers/mlpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlpy/README.html