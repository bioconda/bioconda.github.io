:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gottcha'
.. highlight: bash

gottcha
=======

.. conda:recipe:: gottcha
   :replaces_section_title:

   Genomic Origin Through Taxonomic CHAllenge \(GOTTCHA\)

   :homepage: https://github.com/LANL-Bioinformatics/GOTTCHA
   :license: GNU GPL v3
   :recipe: /`gottcha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gottcha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gottcha/meta.yaml>`_

   


.. conda:package:: gottcha

   |downloads_gottcha| |docker_gottcha|

   :versions: 1.0-2, 1.0-1, 1.0-0
   
   :depends bwa: 
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-yaml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gottcha

   and update with::

      conda update gottcha

   or use the docker container::

      docker pull quay.io/biocontainers/gottcha:<tag>

   (see `gottcha/tags`_ for valid values for ``<tag>``)


.. |downloads_gottcha| image:: https://img.shields.io/conda/dn/bioconda/gottcha.svg?style=flat
   :alt:   (downloads)
.. |docker_gottcha| image:: https://quay.io/repository/biocontainers/gottcha/status
   :target: https://quay.io/repository/biocontainers/gottcha
.. _`gottcha/tags`: https://quay.io/repository/biocontainers/gottcha?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gottcha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gottcha/README.html