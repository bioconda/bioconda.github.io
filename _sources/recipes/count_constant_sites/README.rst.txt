:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'count_constant_sites'
.. highlight: bash

count_constant_sites
====================

.. conda:recipe:: count_constant_sites
   :replaces_section_title:

   Compute the count of cases in constant sites in a \(FASTA\) multiple sequence alignment

   :homepage: https://github.com/pvanheus/count_constant_sites
   :license: MIT
   :recipe: /`count_constant_sites <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/count_constant_sites>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/count_constant_sites/meta.yaml>`_

   Given a FASTA file with a multiple sequence alignment of nucleotides\,
   this tool counts the sites in the alignment that are constant. The 
   output is a line suitable for use in IQTREE\'s \`\-fconst\`\, thus 4 numbers
   with commas expressing the count of As\, Cs\, Gs and Ts.



.. conda:package:: count_constant_sites

   |downloads_count_constant_sites| |docker_count_constant_sites|

   :versions: 0.1.1-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install count_constant_sites

   and update with::

      conda update count_constant_sites

   or use the docker container::

      docker pull quay.io/biocontainers/count_constant_sites:<tag>

   (see `count_constant_sites/tags`_ for valid values for ``<tag>``)


.. |downloads_count_constant_sites| image:: https://img.shields.io/conda/dn/bioconda/count_constant_sites.svg?style=flat
   :target: https://anaconda.org/bioconda/count_constant_sites
   :alt:   (downloads)
.. |docker_count_constant_sites| image:: https://quay.io/repository/biocontainers/count_constant_sites/status
   :target: https://quay.io/repository/biocontainers/count_constant_sites
.. _`count_constant_sites/tags`: https://quay.io/repository/biocontainers/count_constant_sites?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/count_constant_sites/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/count_constant_sites/README.html