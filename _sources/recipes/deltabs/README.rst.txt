:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deltabs'
.. highlight: bash

deltabs
=======

.. conda:recipe:: deltabs
   :replaces_section_title:

   Quantifying the significance of genetic variation using probabilistic profile\-based methods.

   :homepage: https://github.com/UCanCompBio/deltaBS/wiki
   :license: GPL3
   :recipe: /`deltabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltabs/meta.yaml>`_

   


.. conda:package:: deltabs

   |downloads_deltabs| |docker_deltabs|

   :versions: 0.1-2, 0.1-1, 0.1-0
   
   :depends hmmer: 
   :depends perl: 
   :depends perl-bioperl: 
   :depends perl-statistics-distributions: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deltabs

   and update with::

      conda update deltabs

   or use the docker container::

      docker pull quay.io/biocontainers/deltabs:<tag>

   (see `deltabs/tags`_ for valid values for ``<tag>``)


.. |downloads_deltabs| image:: https://img.shields.io/conda/dn/bioconda/deltabs.svg?style=flat
   :target: https://anaconda.org/bioconda/deltabs
   :alt:   (downloads)
.. |docker_deltabs| image:: https://quay.io/repository/biocontainers/deltabs/status
   :target: https://quay.io/repository/biocontainers/deltabs
.. _`deltabs/tags`: https://quay.io/repository/biocontainers/deltabs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deltabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deltabs/README.html