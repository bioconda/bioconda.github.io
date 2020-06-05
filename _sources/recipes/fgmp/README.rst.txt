:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgmp'
.. highlight: bash

fgmp
====

.. conda:recipe:: fgmp
   :replaces_section_title:
   :noindex:

   FGMP\: assessing fungal genome completeness and gene content.

   :homepage: https://github.com/stajichlab/FGMP
   :license: MIT
   :recipe: /`fgmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgmp/meta.yaml>`_
   :links: biotools: :biotools:`fgmp`, doi: :doi:`10.1101/049619`

   


.. conda:package:: fgmp

   |downloads_fgmp| |docker_fgmp|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends augustus: ``>=3.2.3``
   :depends blast: ``>=2.2.31``
   :depends emboss: ``>=6.5.7``
   :depends exonerate: ``>=2.2.0``
   :depends hmmer: ``>=3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-app-cpanminus: 
   :depends perl-bioperl: 
   :depends perl-ipc-run: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fgmp

   and update with::

      conda update fgmp

   or use the docker container::

      docker pull quay.io/biocontainers/fgmp:<tag>

   (see `fgmp/tags`_ for valid values for ``<tag>``)


.. |downloads_fgmp| image:: https://img.shields.io/conda/dn/bioconda/fgmp.svg?style=flat
   :target: https://anaconda.org/bioconda/fgmp
   :alt:   (downloads)
.. |docker_fgmp| image:: https://quay.io/repository/biocontainers/fgmp/status
   :target: https://quay.io/repository/biocontainers/fgmp
.. _`fgmp/tags`: https://quay.io/repository/biocontainers/fgmp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgmp/README.html