:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ruby-dna-tools'
.. highlight: bash

ruby-dna-tools
==============

.. conda:recipe:: ruby-dna-tools
   :replaces_section_title:

   Various libraries containing useful functions for working with DNA sequences\, written in ruby. Some tools are not specific to DNA.

   :homepage: https://github.com/Carldeboer/Ruby-DNA-Tools
   :license: GPL-2.0
   :recipe: /`ruby-dna-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruby-dna-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruby-dna-tools/meta.yaml>`_

   


.. conda:package:: ruby-dna-tools

   |downloads_ruby-dna-tools| |docker_ruby-dna-tools|

   :versions: 1.0-2, 1.0-1, 1.0-0
   
   :depends jemalloc: 
   :depends python: 
   :depends ruby: >=2.4
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ruby-dna-tools

   and update with::

      conda update ruby-dna-tools

   or use the docker container::

      docker pull quay.io/biocontainers/ruby-dna-tools:<tag>

   (see `ruby-dna-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_ruby-dna-tools| image:: https://img.shields.io/conda/dn/bioconda/ruby-dna-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/ruby-dna-tools
   :alt:   (downloads)
.. |docker_ruby-dna-tools| image:: https://quay.io/repository/biocontainers/ruby-dna-tools/status
   :target: https://quay.io/repository/biocontainers/ruby-dna-tools
.. _`ruby-dna-tools/tags`: https://quay.io/repository/biocontainers/ruby-dna-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ruby-dna-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ruby-dna-tools/README.html