:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binlorry'
.. highlight: bash

binlorry
========

.. conda:recipe:: binlorry
   :replaces_section_title:
   :noindex:

   BinLorry\, a flexible tool for binning and filtering sequencing reads

   :homepage: https://github.com/rambaut/binlorry
   :license: GPL3 / GPL-3.0
   :recipe: /`binlorry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binlorry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binlorry/meta.yaml>`_

   


.. conda:package:: binlorry

   |downloads_binlorry| |docker_binlorry|

   :versions:
      
      

      ``1.3.1-0``

      

   
   :depends python: ``>3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install binlorry

   and update with::

      conda update binlorry

   or use the docker container::

      docker pull quay.io/biocontainers/binlorry:<tag>

   (see `binlorry/tags`_ for valid values for ``<tag>``)


.. |downloads_binlorry| image:: https://img.shields.io/conda/dn/bioconda/binlorry.svg?style=flat
   :target: https://anaconda.org/bioconda/binlorry
   :alt:   (downloads)
.. |docker_binlorry| image:: https://quay.io/repository/biocontainers/binlorry/status
   :target: https://quay.io/repository/biocontainers/binlorry
.. _`binlorry/tags`: https://quay.io/repository/biocontainers/binlorry?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binlorry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binlorry/README.html