:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmrpro'
.. highlight: bash

nmrpro
======

.. conda:recipe:: nmrpro
   :replaces_section_title:
   :noindex:

   NMRPro reads and processes different types of NMR spectra.

   :homepage: https://github.com/ahmohamed/nmrpro
   :license: MIT
   :recipe: /`nmrpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrpro/meta.yaml>`_

   


.. conda:package:: nmrpro

   |downloads_nmrpro| |docker_nmrpro|

   :versions:
      
      

      ``20161019-1``,  ``20161019-0``

      

   
   :depends nmrglue: ``>=0.5``
   :depends numpy: 
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nmrpro

   and update with::

      conda update nmrpro

   or use the docker container::

      docker pull quay.io/biocontainers/nmrpro:<tag>

   (see `nmrpro/tags`_ for valid values for ``<tag>``)


.. |downloads_nmrpro| image:: https://img.shields.io/conda/dn/bioconda/nmrpro.svg?style=flat
   :target: https://anaconda.org/bioconda/nmrpro
   :alt:   (downloads)
.. |docker_nmrpro| image:: https://quay.io/repository/biocontainers/nmrpro/status
   :target: https://quay.io/repository/biocontainers/nmrpro
.. _`nmrpro/tags`: https://quay.io/repository/biocontainers/nmrpro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmrpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmrpro/README.html