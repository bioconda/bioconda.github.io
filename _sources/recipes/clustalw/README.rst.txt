:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clustalw'
.. highlight: bash

clustalw
========

.. conda:recipe:: clustalw
   :replaces_section_title:
   :noindex:

   ClustalW2 is a general purpose multiple sequence alignment program for DNA or proteins.

   :homepage: http://www.clustal.org/clustal2/
   :license: GNU Lesser GPL
   :recipe: /`clustalw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalw/meta.yaml>`_

   


.. conda:package:: clustalw

   |downloads_clustalw| |docker_clustalw|

   :versions:
      
      

      ``2.1-5``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clustalw

   and update with::

      conda update clustalw

   or use the docker container::

      docker pull quay.io/biocontainers/clustalw:<tag>

   (see `clustalw/tags`_ for valid values for ``<tag>``)


.. |downloads_clustalw| image:: https://img.shields.io/conda/dn/bioconda/clustalw.svg?style=flat
   :target: https://anaconda.org/bioconda/clustalw
   :alt:   (downloads)
.. |docker_clustalw| image:: https://quay.io/repository/biocontainers/clustalw/status
   :target: https://quay.io/repository/biocontainers/clustalw
.. _`clustalw/tags`: https://quay.io/repository/biocontainers/clustalw?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustalw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustalw/README.html