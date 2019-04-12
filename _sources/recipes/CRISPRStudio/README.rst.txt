:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispr_studio'
.. highlight: bash

crispr_studio
=============

.. conda:recipe:: CRISPRStudio
   :replaces_section_title:

   CRISPRStudio is a program developed to facilitate and accelerate CRISPR array visualization

   :homepage: https://github.com/moineaulab/CRISPRStudio
   :license: GPL-3.0
   :recipe: /`CRISPRStudio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/CRISPRStudio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/CRISPRStudio/meta.yaml>`_

   


.. conda:package:: crispr_studio

   |downloads_crispr_studio| |docker_crispr_studio|

   :versions: 1-1, 1-0
   
   :depends fasta3: 
   :depends numpy: <=1.16.2
   :depends pandas: >=0.24.1
   :depends python: >=3.6,<3.7
   :depends scikit-bio: >=0.4.2
   :depends scipy: <=1.2.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crispr_studio

   and update with::

      conda update crispr_studio

   or use the docker container::

      docker pull quay.io/biocontainers/crispr_studio:<tag>

   (see `crispr_studio/tags`_ for valid values for ``<tag>``)


.. |downloads_crispr_studio| image:: https://img.shields.io/conda/dn/bioconda/crispr_studio.svg?style=flat
   :alt:   (downloads)
.. |docker_crispr_studio| image:: https://quay.io/repository/biocontainers/crispr_studio/status
   :target: https://quay.io/repository/biocontainers/crispr_studio
.. _`crispr_studio/tags`: https://quay.io/repository/biocontainers/crispr_studio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispr_studio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispr_studio/README.html