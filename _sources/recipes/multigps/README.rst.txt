:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multigps'
.. highlight: bash

multigps
========

.. conda:recipe:: multigps
   :replaces_section_title:
   :noindex:

   MultiGPS is a framework for analyzing collections of multi\-condition ChIP\-seq datasets and characterizing differential binding events between conditions.

   :homepage: http://mahonylab.org/software/multigps/
   :license: MIT
   :recipe: /`multigps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps/meta.yaml>`_

   


.. conda:package:: multigps

   |downloads_multigps| |docker_multigps|

   :versions:
      
      

      ``0.74-2``,  ``0.74-1``,  ``0.74-0``,  ``0.73-1``,  ``0.73-0``,  ``0.72-1``,  ``0.72-0``,  ``0.5-1``

      

   
   :depends bioconductor-edger: 
   :depends meme: ``>=4.11.2``
   :depends openjdk: ``>=8``
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multigps

   and update with::

      conda update multigps

   or use the docker container::

      docker pull quay.io/biocontainers/multigps:<tag>

   (see `multigps/tags`_ for valid values for ``<tag>``)


.. |downloads_multigps| image:: https://img.shields.io/conda/dn/bioconda/multigps.svg?style=flat
   :target: https://anaconda.org/bioconda/multigps
   :alt:   (downloads)
.. |docker_multigps| image:: https://quay.io/repository/biocontainers/multigps/status
   :target: https://quay.io/repository/biocontainers/multigps
.. _`multigps/tags`: https://quay.io/repository/biocontainers/multigps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multigps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multigps/README.html