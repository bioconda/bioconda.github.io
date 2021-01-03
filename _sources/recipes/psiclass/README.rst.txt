:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psiclass'
.. highlight: bash

psiclass
========

.. conda:recipe:: psiclass
   :replaces_section_title:
   :noindex:

   Simultaneous multi\-sample transcript assembler for RNA\-seq data

   :homepage: https://github.com/splicebox/PsiCLASS
   :license: GPL-3.0-only
   :recipe: /`psiclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psiclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psiclass/meta.yaml>`_

   


.. conda:package:: psiclass

   |downloads_psiclass| |docker_psiclass|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psiclass

   and update with::

      conda update psiclass

   or use the docker container::

      docker pull quay.io/biocontainers/psiclass:<tag>

   (see `psiclass/tags`_ for valid values for ``<tag>``)


.. |downloads_psiclass| image:: https://img.shields.io/conda/dn/bioconda/psiclass.svg?style=flat
   :target: https://anaconda.org/bioconda/psiclass
   :alt:   (downloads)
.. |docker_psiclass| image:: https://quay.io/repository/biocontainers/psiclass/status
   :target: https://quay.io/repository/biocontainers/psiclass
.. _`psiclass/tags`: https://quay.io/repository/biocontainers/psiclass?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psiclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psiclass/README.html