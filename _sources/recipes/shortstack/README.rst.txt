:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shortstack'
.. highlight: bash

shortstack
==========

.. conda:recipe:: shortstack
   :replaces_section_title:

   ShortStack\: Comprehensive annotation and quantification of small RNA genes

   :homepage: https://github.com/MikeAxtell/ShortStack
   :license: GPL / GPL-3.0
   :recipe: /`shortstack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortstack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortstack/meta.yaml>`_

   


.. conda:package:: shortstack

   |downloads_shortstack| |docker_shortstack|

   :versions: 3.8.5-2, 3.8.5-1, 3.8.5-0, 3.8.3-0, 3.6-0
   
   :depends bowtie: 
   :depends perl: 
   :depends samtools: 1.*
   :depends viennarna: 2.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shortstack

   and update with::

      conda update shortstack

   or use the docker container::

      docker pull quay.io/biocontainers/shortstack:<tag>

   (see `shortstack/tags`_ for valid values for ``<tag>``)


.. |downloads_shortstack| image:: https://img.shields.io/conda/dn/bioconda/shortstack.svg?style=flat
   :target: https://anaconda.org/bioconda/shortstack
   :alt:   (downloads)
.. |docker_shortstack| image:: https://quay.io/repository/biocontainers/shortstack/status
   :target: https://quay.io/repository/biocontainers/shortstack
.. _`shortstack/tags`: https://quay.io/repository/biocontainers/shortstack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shortstack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shortstack/README.html