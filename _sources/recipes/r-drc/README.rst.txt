:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-drc'
.. highlight: bash

r-drc
=====

.. conda:recipe:: r-drc
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-drc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-drc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-drc/meta.yaml>`_

   


.. conda:package:: r-drc

   |downloads_r-drc| |docker_r-drc|

   :versions: 3.0_1-0
   
   :depends r-base: 3.3.2*
   
   :depends r-car: 
   
   :depends r-gtools: 
   
   :depends r-mass: 
   
   :depends r-multcomp: 
   
   :depends r-plotrix: 
   
   :depends r-scales: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-drc

   and update with::

      conda update r-drc

   or use the docker container::

      docker pull quay.io/biocontainers/r-drc:<tag>

   (see `r-drc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-drc| image:: https://img.shields.io/conda/dn/bioconda/r-drc.svg?style=flat
   :alt:   (downloads)
.. |docker_r-drc| image:: https://quay.io/repository/biocontainers/r-drc/status
   :target: https://quay.io/repository/biocontainers/r-drc
.. _`r-drc/tags`: https://quay.io/repository/biocontainers/r-drc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-drc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-drc/README.html