:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coolbox'
.. highlight: bash

coolbox
=======

.. conda:recipe:: coolbox
   :replaces_section_title:
   :noindex:

   Jupyter notebook based genomic data visulization toolkit.

   :homepage: https://github.com/GangCaoLab/CoolBox
   :license: GPL3
   :recipe: /`coolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolbox/meta.yaml>`_

   


.. conda:package:: coolbox

   |downloads_coolbox| |docker_coolbox|

   :versions:
      
      

      ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends cooler: ``>=0.8.10``
   :depends dna_features_viewer: 
   :depends fire: 
   :depends h5py: 
   :depends intervaltree: 
   :depends ipywidgets: ``>=7.5.1``
   :depends jupyter: ``>=1.0.0``
   :depends matplotlib-base: ``>=3.1.1``
   :depends nbformat: 
   :depends numpy: 
   :depends numpydoc: 
   :depends pairix: 
   :depends pandas: 
   :depends pybbi: 
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.10``
   :depends scipy: ``>=1.0.0``
   :depends statsmodels: 
   :depends svgutils: 
   :depends tabix: 
   :depends voila: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coolbox

   and update with::

      conda update coolbox

   or use the docker container::

      docker pull quay.io/biocontainers/coolbox:<tag>

   (see `coolbox/tags`_ for valid values for ``<tag>``)


.. |downloads_coolbox| image:: https://img.shields.io/conda/dn/bioconda/coolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/coolbox
   :alt:   (downloads)
.. |docker_coolbox| image:: https://quay.io/repository/biocontainers/coolbox/status
   :target: https://quay.io/repository/biocontainers/coolbox
.. _`coolbox/tags`: https://quay.io/repository/biocontainers/coolbox?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coolbox/README.html