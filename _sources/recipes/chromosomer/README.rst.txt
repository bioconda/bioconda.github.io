:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromosomer'
.. highlight: bash

chromosomer
===========

.. conda:recipe:: chromosomer
   :replaces_section_title:

   A reference\-assisted assembly tool for producing draft chromosome sequences.

   :homepage: https://github.com/gtamazian/chromosomer
   :license: MIT
   :recipe: /`chromosomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosomer/meta.yaml>`_

   


.. conda:package:: chromosomer

   |downloads_chromosomer| |docker_chromosomer|

   :versions: 0.1.4a-2, 0.1.4a-1, 0.1.4a-0
   
   :depends bioformats: 
   :depends future: 
   :depends pyfaidx: 
   :depends python: <3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chromosomer

   and update with::

      conda update chromosomer

   or use the docker container::

      docker pull quay.io/biocontainers/chromosomer:<tag>

   (see `chromosomer/tags`_ for valid values for ``<tag>``)


.. |downloads_chromosomer| image:: https://img.shields.io/conda/dn/bioconda/chromosomer.svg?style=flat
   :target: https://anaconda.org/bioconda/chromosomer
   :alt:   (downloads)
.. |docker_chromosomer| image:: https://quay.io/repository/biocontainers/chromosomer/status
   :target: https://quay.io/repository/biocontainers/chromosomer
.. _`chromosomer/tags`: https://quay.io/repository/biocontainers/chromosomer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromosomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromosomer/README.html