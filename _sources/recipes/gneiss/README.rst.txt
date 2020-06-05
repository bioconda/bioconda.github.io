:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gneiss'
.. highlight: bash

gneiss
======

.. conda:recipe:: gneiss
   :replaces_section_title:
   :noindex:

   Compositional data analysis tools and visualizations

   :homepage: https://biocore.github.io/gneiss/
   :license: BSD / BSD
   :recipe: /`gneiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gneiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gneiss/meta.yaml>`_

   


.. conda:package:: gneiss

   |downloads_gneiss| |docker_gneiss|

   :versions:
      
      

      ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``

      

   
   :depends biom-format: 
   :depends bokeh: 
   :depends ipython: ``>=3.2.0``
   :depends matplotlib: ``>=1.4.3``
   :depends nose: ``>=1.3.7``
   :depends numpy: ``>=1.9.2``
   :depends pandas: ``>=0.18.0``
   :depends python: ``>3``
   :depends scikit-bio: ``>=0.5.1``
   :depends scipy: ``>=0.15.1``
   :depends seaborn: 
   :depends statsmodels: ``>=0.8.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gneiss

   and update with::

      conda update gneiss

   or use the docker container::

      docker pull quay.io/biocontainers/gneiss:<tag>

   (see `gneiss/tags`_ for valid values for ``<tag>``)


.. |downloads_gneiss| image:: https://img.shields.io/conda/dn/bioconda/gneiss.svg?style=flat
   :target: https://anaconda.org/bioconda/gneiss
   :alt:   (downloads)
.. |docker_gneiss| image:: https://quay.io/repository/biocontainers/gneiss/status
   :target: https://quay.io/repository/biocontainers/gneiss
.. _`gneiss/tags`: https://quay.io/repository/biocontainers/gneiss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gneiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gneiss/README.html