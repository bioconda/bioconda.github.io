:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdkit'
.. highlight: bash

rdkit
=====

.. conda:recipe:: rdkit/2015.09.2
   :replaces_section_title:

   Open\-Source Cheminformatics Software

   :homepage: http://rdkit.org
   :license: BSD
   :recipe: /`rdkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdkit>`_/`2015.09.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdkit/2015.09.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdkit/2015.09.2/meta.yaml>`_

   


.. conda:package:: rdkit

   |downloads_rdkit| |docker_rdkit|

   :versions: 2016.03.3-0, 2015.09.2-1, 2015.09.2-0
   
   :depends boost: 1.57*
   
   :depends numpy: >=1.7
   
   :depends pillow: 
   
   :depends python: 2.7*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rdkit

   and update with::

      conda update rdkit

   or use the docker container::

      docker pull quay.io/biocontainers/rdkit:<tag>

   (see `rdkit/tags`_ for valid values for ``<tag>``)


.. |downloads_rdkit| image:: https://img.shields.io/conda/dn/bioconda/rdkit.svg?style=flat
   :alt:   (downloads)
.. |docker_rdkit| image:: https://quay.io/repository/biocontainers/rdkit/status
   :target: https://quay.io/repository/biocontainers/rdkit
.. _`rdkit/tags`: https://quay.io/repository/biocontainers/rdkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdkit/README.html