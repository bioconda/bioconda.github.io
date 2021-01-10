:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'falco'
.. highlight: bash

falco
=====

.. conda:recipe:: falco
   :replaces_section_title:
   :noindex:

   falco is a C\+\+ implementation of FastQC to run quality control checks on fastq files


   :homepage: https://github.com/smithlabcode/falco
   :license: GPL 3
   :recipe: /`falco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/falco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/falco/meta.yaml>`_

   


.. conda:package:: falco

   |downloads_falco| |docker_falco|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install falco

   and update with::

      conda update falco

   or use the docker container::

      docker pull quay.io/biocontainers/falco:<tag>

   (see `falco/tags`_ for valid values for ``<tag>``)


.. |downloads_falco| image:: https://img.shields.io/conda/dn/bioconda/falco.svg?style=flat
   :target: https://anaconda.org/bioconda/falco
   :alt:   (downloads)
.. |docker_falco| image:: https://quay.io/repository/biocontainers/falco/status
   :target: https://quay.io/repository/biocontainers/falco
.. _`falco/tags`: https://quay.io/repository/biocontainers/falco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/falco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/falco/README.html