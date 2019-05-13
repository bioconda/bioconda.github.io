:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2c'
.. highlight: bash

seq2c
=====

.. conda:recipe:: seq2c
   :replaces_section_title:

   Cohort based copy number calling in gene regions

   :homepage: https://github.com/AstraZeneca-NGS/Seq2C
   :license: MIT
   :recipe: /`seq2c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2c/meta.yaml>`_

   


.. conda:package:: seq2c

   |downloads_seq2c| |docker_seq2c|

   :versions: 2019.04.18-0, 2019.04.08-0, 2018.12.05-0, 2016.03.23-1, 2016.03.23-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-statistics-ttest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq2c

   and update with::

      conda update seq2c

   or use the docker container::

      docker pull quay.io/biocontainers/seq2c:<tag>

   (see `seq2c/tags`_ for valid values for ``<tag>``)


.. |downloads_seq2c| image:: https://img.shields.io/conda/dn/bioconda/seq2c.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2c
   :alt:   (downloads)
.. |docker_seq2c| image:: https://quay.io/repository/biocontainers/seq2c/status
   :target: https://quay.io/repository/biocontainers/seq2c
.. _`seq2c/tags`: https://quay.io/repository/biocontainers/seq2c?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2c/README.html