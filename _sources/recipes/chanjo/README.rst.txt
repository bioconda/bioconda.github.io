:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chanjo'
.. highlight: bash

chanjo
======

.. conda:recipe:: chanjo
   :replaces_section_title:

   Coverage analysis tool for clinical sequencing

   :homepage: http://www.chanjo.co/
   :license: MIT License
   :recipe: /`chanjo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chanjo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chanjo/meta.yaml>`_

   


.. conda:package:: chanjo

   |downloads_chanjo| |docker_chanjo|

   :versions: 3.3.0-0, 3.1.1-0
   
   :depends click: 
   
   :depends path.py: 
   
   :depends python: 2.7*
   
   :depends pyyaml: 
   
   :depends sambamba: 
   
   :depends setuptools: 
   
   :depends setuptools: 
   
   :depends sqlalchemy: >=0.8.2
   
   :depends toolz: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chanjo

   and update with::

      conda update chanjo

   or use the docker container::

      docker pull quay.io/biocontainers/chanjo:<tag>

   (see `chanjo/tags`_ for valid values for ``<tag>``)


.. |downloads_chanjo| image:: https://img.shields.io/conda/dn/bioconda/chanjo.svg?style=flat
   :alt:   (downloads)
.. |docker_chanjo| image:: https://quay.io/repository/biocontainers/chanjo/status
   :target: https://quay.io/repository/biocontainers/chanjo
.. _`chanjo/tags`: https://quay.io/repository/biocontainers/chanjo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chanjo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chanjo/README.html