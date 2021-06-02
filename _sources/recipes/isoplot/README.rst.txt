:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoplot'
.. highlight: bash

isoplot
=======

.. conda:recipe:: isoplot
   :replaces_section_title:
   :noindex:

   Generate figures from Isocor output

   :homepage: https://github.com/LoloPopoPy/Isoplot
   :documentation: https://isoplot.readthedocs.io/
   
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`isoplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoplot/meta.yaml>`_

   


.. conda:package:: isoplot

   |downloads_isoplot| |docker_isoplot|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.5-0``

      

   
   :depends bokeh: ``2.0.2``
   :depends colorcet: ``>=2.0.2``
   :depends ipywidgets: ``>=7.5.1``
   :depends matplotlib-base: ``>=3.3.1``
   :depends natsort: ``>=7.0.1``
   :depends numpy: ``>=1.19.1``
   :depends openpyxl: ``>=3.0.5``
   :depends pandas: ``>=1.1.1``
   :depends python: 
   :depends seaborn: ``>=0.10.1``
   :depends xlrd: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install isoplot

   and update with::

      conda update isoplot

   or use the docker container::

      docker pull quay.io/biocontainers/isoplot:<tag>

   (see `isoplot/tags`_ for valid values for ``<tag>``)


.. |downloads_isoplot| image:: https://img.shields.io/conda/dn/bioconda/isoplot.svg?style=flat
   :target: https://anaconda.org/bioconda/isoplot
   :alt:   (downloads)
.. |docker_isoplot| image:: https://quay.io/repository/biocontainers/isoplot/status
   :target: https://quay.io/repository/biocontainers/isoplot
.. _`isoplot/tags`: https://quay.io/repository/biocontainers/isoplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoplot/README.html