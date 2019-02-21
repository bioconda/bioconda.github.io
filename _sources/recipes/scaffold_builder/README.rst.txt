:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scaffold_builder'
.. highlight: bash

scaffold_builder
================

.. conda:recipe:: scaffold_builder
   :replaces_section_title:

   Scaffold\_builder\: Combining de novo and reference\-guided assembly with Scaffold\_builder.

   :homepage: http://edwards.sdsu.edu/scaffold_builder
   :developer docs: https://github.com/metageni/Scaffold_builder
   :license: GPL / GPL-3.0
   :recipe: /`scaffold_builder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaffold_builder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaffold_builder/meta.yaml>`_

   


.. conda:package:: scaffold_builder

   |downloads_scaffold_builder| |docker_scaffold_builder|

   :versions: 2.2-0
   
   :depends mummer: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scaffold_builder

   and update with::

      conda update scaffold_builder

   or use the docker container::

      docker pull quay.io/biocontainers/scaffold_builder:<tag>

   (see `scaffold_builder/tags`_ for valid values for ``<tag>``)


.. |downloads_scaffold_builder| image:: https://img.shields.io/conda/dn/bioconda/scaffold_builder.svg?style=flat
   :alt:   (downloads)
.. |docker_scaffold_builder| image:: https://quay.io/repository/biocontainers/scaffold_builder/status
   :target: https://quay.io/repository/biocontainers/scaffold_builder
.. _`scaffold_builder/tags`: https://quay.io/repository/biocontainers/scaffold_builder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scaffold_builder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scaffold_builder/README.html