:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primedlamp'
.. highlight: bash

primedlamp
==========

.. conda:recipe:: primedlamp
   :replaces_section_title:

   LAMP primer design tool.

   :homepage: https://github.com/MatthewHiggins2017/PrimedLAMP/
   :license: GPL3
   :recipe: /`primedlamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primedlamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primedlamp/meta.yaml>`_

   


.. conda:package:: primedlamp

   |downloads_primedlamp| |docker_primedlamp|

   :versions: 1.0.1-0, 1.0.0-0
   
   :depends blast: 
   :depends clustalo: 
   :depends pandas: 
   :depends python: >=3.5
   :depends samtools: >=1.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install primedlamp

   and update with::

      conda update primedlamp

   or use the docker container::

      docker pull quay.io/biocontainers/primedlamp:<tag>

   (see `primedlamp/tags`_ for valid values for ``<tag>``)


.. |downloads_primedlamp| image:: https://img.shields.io/conda/dn/bioconda/primedlamp.svg?style=flat
   :target: https://anaconda.org/bioconda/primedlamp
   :alt:   (downloads)
.. |docker_primedlamp| image:: https://quay.io/repository/biocontainers/primedlamp/status
   :target: https://quay.io/repository/biocontainers/primedlamp
.. _`primedlamp/tags`: https://quay.io/repository/biocontainers/primedlamp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primedlamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primedlamp/README.html