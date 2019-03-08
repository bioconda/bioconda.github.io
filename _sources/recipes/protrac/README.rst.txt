:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protrac'
.. highlight: bash

protrac
=======

.. conda:recipe:: protrac
   :replaces_section_title:

   piRNA detection

   :homepage: http://www.smallrnagroup.uni-mainz.de/software.html
   :license: CC BY-NC 2.0
   :recipe: /`protrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protrac/meta.yaml>`_

   


.. conda:package:: protrac

   |downloads_protrac| |docker_protrac|

   :versions: 2.3.1-1, 2.3.1-0, 2.1-1, 2.1-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :depends perl-gd: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install protrac

   and update with::

      conda update protrac

   or use the docker container::

      docker pull quay.io/biocontainers/protrac:<tag>

   (see `protrac/tags`_ for valid values for ``<tag>``)


.. |downloads_protrac| image:: https://img.shields.io/conda/dn/bioconda/protrac.svg?style=flat
   :alt:   (downloads)
.. |docker_protrac| image:: https://quay.io/repository/biocontainers/protrac/status
   :target: https://quay.io/repository/biocontainers/protrac
.. _`protrac/tags`: https://quay.io/repository/biocontainers/protrac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protrac/README.html