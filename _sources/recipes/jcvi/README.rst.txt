:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jcvi'
.. highlight: bash

jcvi
====

.. conda:recipe:: jcvi
   :replaces_section_title:

   Python utility libraries on genome assembly\, annotation and comparative genomics

   :homepage: http://github.com/tanghaibao/jcvi
   :license: BSD / BSD License
   :recipe: /`jcvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcvi/meta.yaml>`_

   JCVI utility libraries


.. conda:package:: jcvi

   |downloads_jcvi| |docker_jcvi|

   :versions: 0.8.12-0, 0.8.4-1, 0.8.4-0
   
   :depends biopython: 
   
   :depends deap: 
   
   :depends gffutils: 
   
   :depends libgcc-ng: >=4.9
   
   :depends matplotlib: 
   
   :depends networkx: 
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends r-ggplot2: >=3.0.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jcvi

   and update with::

      conda update jcvi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/jcvi:<tag>

   (see `jcvi/tags`_ for valid values for ``<tag>``)


.. |downloads_jcvi| image:: https://img.shields.io/conda/dn/bioconda/jcvi.svg?style=flat
   :alt:   (downloads)
.. |docker_jcvi| image:: https://quay.io/repository/biocontainers/jcvi/status
   :target: https://quay.io/repository/biocontainers/jcvi
.. _`jcvi/tags`: https://quay.io/repository/biocontainers/jcvi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jcvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jcvi/README.html