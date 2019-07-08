:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agfusion'
.. highlight: bash

agfusion
========

.. conda:recipe:: agfusion
   :replaces_section_title:

   Python package to annotate and visualize gene fusions.

   :homepage: https://github.com/murphycj/AGFusion
   :license: MIT / MIT
   :recipe: /`agfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agfusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agfusion/meta.yaml>`_

   


.. conda:package:: agfusion

   |downloads_agfusion| |docker_agfusion|

   :versions: 1.251-0, 1.231-0, 1.23-0, 1.2-2, 1.2-0, 1.0-0
   
   :depends biopython: >=1.67
   :depends future: >=0.16.0
   :depends matplotlib: >=1.5.0
   :depends nose2: >=0.6.5
   :depends pandas: >=0.18.1
   :depends pyensembl: >=1.1.0
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install agfusion

   and update with::

      conda update agfusion

   or use the docker container::

      docker pull quay.io/biocontainers/agfusion:<tag>

   (see `agfusion/tags`_ for valid values for ``<tag>``)


.. |downloads_agfusion| image:: https://img.shields.io/conda/dn/bioconda/agfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/agfusion
   :alt:   (downloads)
.. |docker_agfusion| image:: https://quay.io/repository/biocontainers/agfusion/status
   :target: https://quay.io/repository/biocontainers/agfusion
.. _`agfusion/tags`: https://quay.io/repository/biocontainers/agfusion?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agfusion/README.html