:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xpressplot'
.. highlight: bash

xpressplot
==========

.. conda:recipe:: xpressplot
   :replaces_section_title:
   :noindex:

   A toolkit for navigating and analyzing gene expression datasets.

   :homepage: https://github.com/XPRESSyourself/XPRESSplot
   :license: GPL-3.0
   :recipe: /`xpressplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpressplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpressplot/meta.yaml>`_

   


.. conda:package:: xpressplot

   |downloads_xpressplot| |docker_xpressplot|

   :versions:
      
      

      ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.0.8b0-0``,  ``0.0.5b0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: ``>=4``
   :depends plotly_express: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xpressplot

   and update with::

      conda update xpressplot

   or use the docker container::

      docker pull quay.io/biocontainers/xpressplot:<tag>

   (see `xpressplot/tags`_ for valid values for ``<tag>``)


.. |downloads_xpressplot| image:: https://img.shields.io/conda/dn/bioconda/xpressplot.svg?style=flat
   :target: https://anaconda.org/bioconda/xpressplot
   :alt:   (downloads)
.. |docker_xpressplot| image:: https://quay.io/repository/biocontainers/xpressplot/status
   :target: https://quay.io/repository/biocontainers/xpressplot
.. _`xpressplot/tags`: https://quay.io/repository/biocontainers/xpressplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xpressplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xpressplot/README.html