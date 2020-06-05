:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainseeker'
.. highlight: bash

strainseeker
============

.. conda:recipe:: strainseeker
   :replaces_section_title:
   :noindex:

   A bacterial identification program for fast identification of bacterial strains from raw sequencing reads

   :homepage: http://bioinfo.ut.ee/strainseeker
   :developer docs: https://github.com/bioinfo-ut/StrainSeeker.git
   :license: BSD
   :recipe: /`strainseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainseeker/meta.yaml>`_

   


.. conda:package:: strainseeker

   |downloads_strainseeker| |docker_strainseeker|

   :versions:
      
      

      ``1.5.1-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends perl: 
   :depends r-base: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strainseeker

   and update with::

      conda update strainseeker

   or use the docker container::

      docker pull quay.io/biocontainers/strainseeker:<tag>

   (see `strainseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_strainseeker| image:: https://img.shields.io/conda/dn/bioconda/strainseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/strainseeker
   :alt:   (downloads)
.. |docker_strainseeker| image:: https://quay.io/repository/biocontainers/strainseeker/status
   :target: https://quay.io/repository/biocontainers/strainseeker
.. _`strainseeker/tags`: https://quay.io/repository/biocontainers/strainseeker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainseeker/README.html