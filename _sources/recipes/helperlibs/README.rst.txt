:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'helperlibs'
.. highlight: bash

helperlibs
==========

.. conda:recipe:: helperlibs
   :replaces_section_title:
   :noindex:

   A collection of bioinformatics\-related helper functions

   :homepage: https://github.com/kblin/bioinf-helperlibs
   :license: GPL / GPL-3.0
   :recipe: /`helperlibs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/helperlibs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/helperlibs/meta.yaml>`_

   


.. conda:package:: helperlibs

   |downloads_helperlibs| |docker_helperlibs|

   :versions:
      
      

      ``0.2.1-0``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``

      

   
   :depends biopython: ``>=1.76``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install helperlibs

   and update with::

      conda update helperlibs

   or use the docker container::

      docker pull quay.io/biocontainers/helperlibs:<tag>

   (see `helperlibs/tags`_ for valid values for ``<tag>``)


.. |downloads_helperlibs| image:: https://img.shields.io/conda/dn/bioconda/helperlibs.svg?style=flat
   :target: https://anaconda.org/bioconda/helperlibs
   :alt:   (downloads)
.. |docker_helperlibs| image:: https://quay.io/repository/biocontainers/helperlibs/status
   :target: https://quay.io/repository/biocontainers/helperlibs
.. _`helperlibs/tags`: https://quay.io/repository/biocontainers/helperlibs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/helperlibs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/helperlibs/README.html