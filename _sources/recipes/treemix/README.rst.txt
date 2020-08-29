:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treemix'
.. highlight: bash

treemix
=======

.. conda:recipe:: treemix
   :replaces_section_title:
   :noindex:

   TreeMix is a method for inferring the patterns of population splits and mixtures in the history of a set of populations.

   :homepage: http://pritchardlab.stanford.edu/software.html
   :license: GPL / GPLv3
   :recipe: /`treemix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemix/meta.yaml>`_
   :links: biotools: :biotools:`TreeMix`, doi: :doi:`10.1371/journal.pgen.1002967`

   


.. conda:package:: treemix

   |downloads_treemix| |docker_treemix|

   :versions:
      
      

      ``1.13-2``,  ``1.13-1``,  ``1.13-0``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=3.6``
   :depends r-rcolorbrewer: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treemix

   and update with::

      conda update treemix

   or use the docker container::

      docker pull quay.io/biocontainers/treemix:<tag>

   (see `treemix/tags`_ for valid values for ``<tag>``)


.. |downloads_treemix| image:: https://img.shields.io/conda/dn/bioconda/treemix.svg?style=flat
   :target: https://anaconda.org/bioconda/treemix
   :alt:   (downloads)
.. |docker_treemix| image:: https://quay.io/repository/biocontainers/treemix/status
   :target: https://quay.io/repository/biocontainers/treemix
.. _`treemix/tags`: https://quay.io/repository/biocontainers/treemix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treemix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treemix/README.html