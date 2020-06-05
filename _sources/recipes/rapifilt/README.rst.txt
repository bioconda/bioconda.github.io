:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapifilt'
.. highlight: bash

rapifilt
========

.. conda:recipe:: rapifilt
   :replaces_section_title:
   :noindex:

   RAPIFILT\:RAPId FILTer is a quality control of DNA sequences

   :homepage: https://github.com/andvides/RAPIFILT.git
   :license: GPL / GPL-3.0
   :recipe: /`rapifilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapifilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapifilt/meta.yaml>`_

   


.. conda:package:: rapifilt

   |downloads_rapifilt| |docker_rapifilt|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rapifilt

   and update with::

      conda update rapifilt

   or use the docker container::

      docker pull quay.io/biocontainers/rapifilt:<tag>

   (see `rapifilt/tags`_ for valid values for ``<tag>``)


.. |downloads_rapifilt| image:: https://img.shields.io/conda/dn/bioconda/rapifilt.svg?style=flat
   :target: https://anaconda.org/bioconda/rapifilt
   :alt:   (downloads)
.. |docker_rapifilt| image:: https://quay.io/repository/biocontainers/rapifilt/status
   :target: https://quay.io/repository/biocontainers/rapifilt
.. _`rapifilt/tags`: https://quay.io/repository/biocontainers/rapifilt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapifilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapifilt/README.html