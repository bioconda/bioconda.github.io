:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xhmm'
.. highlight: bash

xhmm
====

.. conda:recipe:: xhmm
   :replaces_section_title:
   :noindex:

   XHMM \(eXome\-Hidden Markov Model\).

   :homepage: http://atgu.mgh.harvard.edu/xhmm/index.shtml
   :license: GPL3
   :recipe: /`xhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xhmm/meta.yaml>`_
   :links: biotools: :biotools:`xhmm`, doi: :doi:`10.1016/j.ajhg.2012.08.005`, doi: :doi:`10.1002/0471142905.hg0723s81`

   


.. conda:package:: xhmm

   |downloads_xhmm| |docker_xhmm|

   :versions:
      
      

      ``0.0.0.2016_01_04.cc14e52-1``,  ``0.0.0.2016_01_04.cc14e52-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libgfortran-ng: ``>=7,<8.0a0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xhmm

   and update with::

      conda update xhmm

   or use the docker container::

      docker pull quay.io/biocontainers/xhmm:<tag>

   (see `xhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_xhmm| image:: https://img.shields.io/conda/dn/bioconda/xhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/xhmm
   :alt:   (downloads)
.. |docker_xhmm| image:: https://quay.io/repository/biocontainers/xhmm/status
   :target: https://quay.io/repository/biocontainers/xhmm
.. _`xhmm/tags`: https://quay.io/repository/biocontainers/xhmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xhmm/README.html