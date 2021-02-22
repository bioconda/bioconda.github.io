:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flanker'
.. highlight: bash

flanker
=======

.. conda:recipe:: flanker
   :replaces_section_title:
   :noindex:

   Gene\-flank analysis tool

   :homepage: https://github.com/wtmatlock/flanker
   :license: MIT
   :recipe: /`flanker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flanker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flanker/meta.yaml>`_

   


.. conda:package:: flanker

   |downloads_flanker| |docker_flanker|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends abricate: ``>=1.0.1``
   :depends biopython: ``>=1.78``
   :depends mash: ``>=2.2.2``
   :depends networkx: ``>=2.5``
   :depends pandas: ``>=1.2``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flanker

   and update with::

      conda update flanker

   or use the docker container::

      docker pull quay.io/biocontainers/flanker:<tag>

   (see `flanker/tags`_ for valid values for ``<tag>``)


.. |downloads_flanker| image:: https://img.shields.io/conda/dn/bioconda/flanker.svg?style=flat
   :target: https://anaconda.org/bioconda/flanker
   :alt:   (downloads)
.. |docker_flanker| image:: https://quay.io/repository/biocontainers/flanker/status
   :target: https://quay.io/repository/biocontainers/flanker
.. _`flanker/tags`: https://quay.io/repository/biocontainers/flanker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flanker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flanker/README.html