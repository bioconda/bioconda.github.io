:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clipcontext'
.. highlight: bash

clipcontext
===========

.. conda:recipe:: clipcontext
   :replaces_section_title:

   Extract CLIP\-seq binding regions with both genomic and transcript context

   :homepage: https://github.com/BackofenLab/CLIPcontext
   :license: MIT
   :recipe: /`clipcontext <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipcontext>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipcontext/meta.yaml>`_

   


.. conda:package:: clipcontext

   |downloads_clipcontext| |docker_clipcontext|

   :versions: 0.6-0, 0.3-0, 0.2-0, 0.1-0
   
   :depends bedtools: 2.29.0.*
   :depends markdown: >=3.2.1
   :depends matplotlib-base: >=3.1.3
   :depends pandas: >=1.0.3
   :depends python: >=3.6
   :depends seaborn: >=0.10.0
   :depends ucsc-twobitinfo: 
   :depends ucsc-twobittofa: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clipcontext

   and update with::

      conda update clipcontext

   or use the docker container::

      docker pull quay.io/biocontainers/clipcontext:<tag>

   (see `clipcontext/tags`_ for valid values for ``<tag>``)


.. |downloads_clipcontext| image:: https://img.shields.io/conda/dn/bioconda/clipcontext.svg?style=flat
   :target: https://anaconda.org/bioconda/clipcontext
   :alt:   (downloads)
.. |docker_clipcontext| image:: https://quay.io/repository/biocontainers/clipcontext/status
   :target: https://quay.io/repository/biocontainers/clipcontext
.. _`clipcontext/tags`: https://quay.io/repository/biocontainers/clipcontext?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clipcontext/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clipcontext/README.html