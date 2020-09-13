:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lamassemble'
.. highlight: bash

lamassemble
===========

.. conda:recipe:: lamassemble
   :replaces_section_title:
   :noindex:

   Merge overlapping \"long\" DNA reads into a consensus sequence

   :homepage: https://gitlab.com/mcfrith/lamassemble
   :license: MIT
   :recipe: /`lamassemble <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lamassemble>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lamassemble/meta.yaml>`_

   


.. conda:package:: lamassemble

   |downloads_lamassemble| |docker_lamassemble|

   :versions:
      
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``

      

   
   :depends last: 
   :depends mafft: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lamassemble

   and update with::

      conda update lamassemble

   or use the docker container::

      docker pull quay.io/biocontainers/lamassemble:<tag>

   (see `lamassemble/tags`_ for valid values for ``<tag>``)


.. |downloads_lamassemble| image:: https://img.shields.io/conda/dn/bioconda/lamassemble.svg?style=flat
   :target: https://anaconda.org/bioconda/lamassemble
   :alt:   (downloads)
.. |docker_lamassemble| image:: https://quay.io/repository/biocontainers/lamassemble/status
   :target: https://quay.io/repository/biocontainers/lamassemble
.. _`lamassemble/tags`: https://quay.io/repository/biocontainers/lamassemble?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lamassemble/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lamassemble/README.html