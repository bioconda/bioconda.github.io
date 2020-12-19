:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gunc'
.. highlight: bash

gunc
====

.. conda:recipe:: gunc
   :replaces_section_title:
   :noindex:

   Python package for detection of chimerism and contamination in prokaryotic genomes.

   :homepage: https://github.com/grp-bork/gunc
   :documentation: https://grp-bork.embl-community.io/gunc/
   
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`gunc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gunc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gunc/meta.yaml>`_

   


.. conda:package:: gunc

   |downloads_gunc| |docker_gunc|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.2-0``

      

   
   :depends diamond: ``2.0.4.*``
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends prodigal: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gunc

   and update with::

      conda update gunc

   or use the docker container::

      docker pull quay.io/biocontainers/gunc:<tag>

   (see `gunc/tags`_ for valid values for ``<tag>``)


.. |downloads_gunc| image:: https://img.shields.io/conda/dn/bioconda/gunc.svg?style=flat
   :target: https://anaconda.org/bioconda/gunc
   :alt:   (downloads)
.. |docker_gunc| image:: https://quay.io/repository/biocontainers/gunc/status
   :target: https://quay.io/repository/biocontainers/gunc
.. _`gunc/tags`: https://quay.io/repository/biocontainers/gunc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gunc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gunc/README.html