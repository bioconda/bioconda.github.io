:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'admixture'
.. highlight: bash

admixture
=========

.. conda:recipe:: admixture
   :replaces_section_title:
   :noindex:

   ADMIXTURE is a software tool for maximum likelihood estimation of individual ancestries from multilocus SNP genotype datasets.

   :homepage: http://www.genetics.ucla.edu/software/admixture/index.html
   :license: Free for Academic Use
   :recipe: /`admixture <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/admixture>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/admixture/meta.yaml>`_
   :links: biotools: :biotools:`admixture`, doi: :doi:`10.1101/gr.094052.109`

   


.. conda:package:: admixture

   |downloads_admixture| |docker_admixture|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install admixture

   and update with::

      conda update admixture

   or use the docker container::

      docker pull quay.io/biocontainers/admixture:<tag>

   (see `admixture/tags`_ for valid values for ``<tag>``)


.. |downloads_admixture| image:: https://img.shields.io/conda/dn/bioconda/admixture.svg?style=flat
   :target: https://anaconda.org/bioconda/admixture
   :alt:   (downloads)
.. |docker_admixture| image:: https://quay.io/repository/biocontainers/admixture/status
   :target: https://quay.io/repository/biocontainers/admixture
.. _`admixture/tags`: https://quay.io/repository/biocontainers/admixture?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/admixture/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/admixture/README.html