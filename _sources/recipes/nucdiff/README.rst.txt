:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nucdiff'
.. highlight: bash

nucdiff
=======

.. conda:recipe:: nucdiff
   :replaces_section_title:
   :noindex:

   NucDiff locates and categorizes differences between two closely related nucleotide sequences.

   :homepage: https://github.com/uio-cels/NucDiff
   :license: MPL-2.0
   :recipe: /`nucdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucdiff/meta.yaml>`_

   


.. conda:package:: nucdiff

   |downloads_nucdiff| |docker_nucdiff|

   :versions:
      
      

      ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: 
   :depends mummer: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nucdiff

   and update with::

      conda update nucdiff

   or use the docker container::

      docker pull quay.io/biocontainers/nucdiff:<tag>

   (see `nucdiff/tags`_ for valid values for ``<tag>``)


.. |downloads_nucdiff| image:: https://img.shields.io/conda/dn/bioconda/nucdiff.svg?style=flat
   :target: https://anaconda.org/bioconda/nucdiff
   :alt:   (downloads)
.. |docker_nucdiff| image:: https://quay.io/repository/biocontainers/nucdiff/status
   :target: https://quay.io/repository/biocontainers/nucdiff
.. _`nucdiff/tags`: https://quay.io/repository/biocontainers/nucdiff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucdiff/README.html