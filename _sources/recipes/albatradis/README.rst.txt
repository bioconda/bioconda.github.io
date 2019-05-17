:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'albatradis'
.. highlight: bash

albatradis
==========

.. conda:recipe:: albatradis
   :replaces_section_title:

   Comparative TraDIS analysis

   :homepage: https://github.com/quadram-institute-bioscience/albatradis
   :license: GPLv3
   :recipe: /`albatradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/albatradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/albatradis/meta.yaml>`_

   


.. conda:package:: albatradis

   |downloads_albatradis| |docker_albatradis|

   :versions: 1.0.0-3, 1.0.0-2, 1.0.0-1, 1.0.0-0, 0.0.5-4
   
   :depends biopython: >=1.68
   :depends biotradis: 1.4.1.dev.*
   :depends cython: 
   :depends dendropy: 
   :depends graphviz: >=2.38.0,<3.0a0
   :depends numpy: 
   :depends pandas: 
   :depends perl-app-cpanminus: 
   :depends perl-moose: 
   :depends perl-parallel-forkmanager: 
   :depends perl-pathtools: 
   :depends perl-scalar-util-numeric: 
   :depends pyfastaq: >=3.12.0
   :depends python: >=3.7,<3.8.0a0
   :depends python-graphviz: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install albatradis

   and update with::

      conda update albatradis

   or use the docker container::

      docker pull quay.io/biocontainers/albatradis:<tag>

   (see `albatradis/tags`_ for valid values for ``<tag>``)


.. |downloads_albatradis| image:: https://img.shields.io/conda/dn/bioconda/albatradis.svg?style=flat
   :target: https://anaconda.org/bioconda/albatradis
   :alt:   (downloads)
.. |docker_albatradis| image:: https://quay.io/repository/biocontainers/albatradis/status
   :target: https://quay.io/repository/biocontainers/albatradis
.. _`albatradis/tags`: https://quay.io/repository/biocontainers/albatradis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/albatradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/albatradis/README.html