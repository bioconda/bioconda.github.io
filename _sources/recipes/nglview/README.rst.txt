:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nglview'
.. highlight: bash

nglview
=======

.. conda:recipe:: nglview
   :replaces_section_title:

   An IPython widget to interactively view molecular structures and trajectories. Utilizes the embeddable NGL Viewer for rendering.

   :homepage: https://github.com/arose/nglview
   :documentation: https://arose.github.io/nglview/latest/
   
   :license: MIT / MIT
   :recipe: /`nglview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nglview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nglview/meta.yaml>`_

   


.. conda:package:: nglview

   |downloads_nglview| |docker_nglview|

   :versions: 1.1.7-0, 1.1.6-0, 1.1.2-1, 1.1.1-1, 1.0-1, 0.6.5-1, 0.6.4-1, 0.6.3-0, 0.6.2.4-0, 0.6.2.3-0, 0.6.2.2-1, 0.6.2.2-0, 0.6.2.1-0, 0.6.1-0, 0.5.2-0, 0.5.1-0
   
   :depends ipywidgets: >=7
   
   :depends notebook: 
   
   :depends numpy: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nglview

   and update with::

      conda update nglview

   or use the docker container::

      docker pull quay.io/biocontainers/nglview:<tag>

   (see `nglview/tags`_ for valid values for ``<tag>``)


.. |downloads_nglview| image:: https://img.shields.io/conda/dn/bioconda/nglview.svg?style=flat
   :alt:   (downloads)
.. |docker_nglview| image:: https://quay.io/repository/biocontainers/nglview/status
   :target: https://quay.io/repository/biocontainers/nglview
.. _`nglview/tags`: https://quay.io/repository/biocontainers/nglview?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nglview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nglview/README.html