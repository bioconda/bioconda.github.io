:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phastaf'
.. highlight: bash

phastaf
=======

.. conda:recipe:: phastaf
   :replaces_section_title:

   Identify phage regions in bacterial genomes for masking purposes

   :homepage: https://github.com/tseemann/phastaf
   :license: GPL / GPLv3
   :recipe: /`phastaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phastaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phastaf/meta.yaml>`_

   


.. conda:package:: phastaf

   |downloads_phastaf| |docker_phastaf|

   :versions: 0.1.0-0
   
   :depends any2fasta: >=0.4
   :depends bedtools: >=2.0
   :depends coreutils: 
   :depends diamond: >=0.9
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phastaf

   and update with::

      conda update phastaf

   or use the docker container::

      docker pull quay.io/biocontainers/phastaf:<tag>

   (see `phastaf/tags`_ for valid values for ``<tag>``)


.. |downloads_phastaf| image:: https://img.shields.io/conda/dn/bioconda/phastaf.svg?style=flat
   :target: https://anaconda.org/bioconda/phastaf
   :alt:   (downloads)
.. |docker_phastaf| image:: https://quay.io/repository/biocontainers/phastaf/status
   :target: https://quay.io/repository/biocontainers/phastaf
.. _`phastaf/tags`: https://quay.io/repository/biocontainers/phastaf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phastaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phastaf/README.html