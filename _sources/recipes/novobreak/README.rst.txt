:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novobreak'
.. highlight: bash

novobreak
=========

.. conda:recipe:: novobreak
   :replaces_section_title:
   :noindex:

   local assembly for breakpoint detection in cancer genomes

   :homepage: https://github.com/czc/nb_distribution
   :license: MIT
   :recipe: /`novobreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novobreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novobreak/meta.yaml>`_

   


.. conda:package:: novobreak

   |downloads_novobreak| |docker_novobreak|

   :versions:
      
      

      ``1.1.3rc-6``,  ``1.1.3rc-5``,  ``1.1.3rc-4``,  ``1.1.3rc-3``,  ``1.1.3rc-2``,  ``1.1.3rc-1``,  ``1.1.3rc-0``

      

   
   :depends bwa: ``>=0.7.10``
   :depends libgcc-ng: ``>=7.3.0``
   :depends perl: 
   :depends samtools: ``1.*``
   :depends ssake: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install novobreak

   and update with::

      conda update novobreak

   or use the docker container::

      docker pull quay.io/biocontainers/novobreak:<tag>

   (see `novobreak/tags`_ for valid values for ``<tag>``)


.. |downloads_novobreak| image:: https://img.shields.io/conda/dn/bioconda/novobreak.svg?style=flat
   :target: https://anaconda.org/bioconda/novobreak
   :alt:   (downloads)
.. |docker_novobreak| image:: https://quay.io/repository/biocontainers/novobreak/status
   :target: https://quay.io/repository/biocontainers/novobreak
.. _`novobreak/tags`: https://quay.io/repository/biocontainers/novobreak?tab=tags






Notes
-----
This package makes novobreak available via a wrapper in PATH\, called \`run\_novobreak\`\, which 
takes all arguments of the run\_novoBreak.sh script except the first\, which is automatically
inferred.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novobreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novobreak/README.html