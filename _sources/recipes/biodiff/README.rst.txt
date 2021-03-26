:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biodiff'
.. highlight: bash

biodiff
=======

.. conda:recipe:: biodiff
   :replaces_section_title:
   :noindex:

   exact comparison of biological sequences

   :homepage: https://gitlab.com/LPCDRP/biodiff
   :license: GPLv3+
   :recipe: /`biodiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biodiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biodiff/meta.yaml>`_

   biodiff is a variant caller that determines the exact differences between two biological sequences. It can operate on DNA and protein sequences\, as long as they are in fasta format. The sequences to be compared must have the same fasta header \(up to the first whitespace\). If the reference and query each have only one sequence\, however\, the header need not match and the comparison will be done\, but a warning will be emitted. Output is in the Variant Call Format.


.. conda:package:: biodiff

   |downloads_biodiff| |docker_biodiff|

   :versions:
      
      

      ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends perl: ``>=5.32.0,<5.32.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biodiff

   and update with::

      conda update biodiff

   or use the docker container::

      docker pull quay.io/biocontainers/biodiff:<tag>

   (see `biodiff/tags`_ for valid values for ``<tag>``)


.. |downloads_biodiff| image:: https://img.shields.io/conda/dn/bioconda/biodiff.svg?style=flat
   :target: https://anaconda.org/bioconda/biodiff
   :alt:   (downloads)
.. |docker_biodiff| image:: https://quay.io/repository/biocontainers/biodiff/status
   :target: https://quay.io/repository/biocontainers/biodiff
.. _`biodiff/tags`: https://quay.io/repository/biocontainers/biodiff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biodiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biodiff/README.html