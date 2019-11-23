:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staramr'
.. highlight: bash

staramr
=======

.. conda:recipe:: staramr
   :replaces_section_title:

   Scan genome contigs against the ResFinder and PointFinder databases

   :homepage: https://github.com/phac-nml/staramr
   :license: APACHE / Apache Software License
   :recipe: /`staramr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staramr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staramr/meta.yaml>`_

   


.. conda:package:: staramr

   |downloads_staramr| |docker_staramr|

   :versions: 0.7.0-0, 0.6.1-0, 0.6.0-0, 0.5.1-0, 0.5.0-0, 0.4.0-0, 0.3.0-0, 0.2.2-0, 0.2.1-0, 0.2.0-1, 0.2.0-0, 0.1.0-0
   
   :depends biopython: >=1.70
   :depends blast: >=2.2.31
   :depends coloredlogs: >=10.0
   :depends git: 
   :depends gitpython: >=2.1.3
   :depends green: >=2.13.0
   :depends mlst: 
   :depends numpy: >=1.12.1
   :depends pandas: >=0.23.0
   :depends python: >=3
   :depends xlsxwriter: >=1.0.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install staramr

   and update with::

      conda update staramr

   or use the docker container::

      docker pull quay.io/biocontainers/staramr:<tag>

   (see `staramr/tags`_ for valid values for ``<tag>``)


.. |downloads_staramr| image:: https://img.shields.io/conda/dn/bioconda/staramr.svg?style=flat
   :target: https://anaconda.org/bioconda/staramr
   :alt:   (downloads)
.. |docker_staramr| image:: https://quay.io/repository/biocontainers/staramr/status
   :target: https://quay.io/repository/biocontainers/staramr
.. _`staramr/tags`: https://quay.io/repository/biocontainers/staramr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staramr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staramr/README.html