:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnp-binstrings'
.. highlight: bash

dnp-binstrings
==============

.. conda:recipe:: dnp-binstrings
   :replaces_section_title:

   Convert fasta strings into dinucleotide binary indicator string as 00101...

   :homepage: https://github.com/erinijapranckeviciene/dnpatterntools
   :license: MIT
   :recipe: /`dnp-binstrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnp-binstrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnp-binstrings/meta.yaml>`_

   


.. conda:package:: dnp-binstrings

   |downloads_dnp-binstrings| |docker_dnp-binstrings|

   :versions: 1.0-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends libcxx: >=4.0.1
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnp-binstrings

   and update with::

      conda update dnp-binstrings

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dnp-binstrings:<tag>

   (see `dnp-binstrings/tags`_ for valid values for ``<tag>``)


.. |downloads_dnp-binstrings| image:: https://img.shields.io/conda/dn/bioconda/dnp-binstrings.svg?style=flat
   :alt:   (downloads)
.. |docker_dnp-binstrings| image:: https://quay.io/repository/biocontainers/dnp-binstrings/status
   :target: https://quay.io/repository/biocontainers/dnp-binstrings
.. _`dnp-binstrings/tags`: https://quay.io/repository/biocontainers/dnp-binstrings?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnp-binstrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnp-binstrings/README.html