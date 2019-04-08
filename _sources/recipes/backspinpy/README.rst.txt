:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'backspinpy'
.. highlight: bash

backspinpy
==========

.. conda:recipe:: backspinpy
   :replaces_section_title:

   backSPIN clustering algorythm

   :homepage: https://github.com/linnarsson-lab/BackSPIN
   :license: MIT / MIT
   :recipe: /`backspinpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/backspinpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/backspinpy/meta.yaml>`_

   


.. conda:package:: backspinpy

   |downloads_backspinpy| |docker_backspinpy|

   :versions: 0.2.1-1, 0.2.1-0
   
   :depends future: 
   :depends numpy: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install backspinpy

   and update with::

      conda update backspinpy

   or use the docker container::

      docker pull quay.io/biocontainers/backspinpy:<tag>

   (see `backspinpy/tags`_ for valid values for ``<tag>``)


.. |downloads_backspinpy| image:: https://img.shields.io/conda/dn/bioconda/backspinpy.svg?style=flat
   :alt:   (downloads)
.. |docker_backspinpy| image:: https://quay.io/repository/biocontainers/backspinpy/status
   :target: https://quay.io/repository/biocontainers/backspinpy
.. _`backspinpy/tags`: https://quay.io/repository/biocontainers/backspinpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/backspinpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/backspinpy/README.html