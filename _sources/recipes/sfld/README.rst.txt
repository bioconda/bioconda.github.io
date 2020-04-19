:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sfld'
.. highlight: bash

sfld
====

.. conda:recipe:: sfld
   :replaces_section_title:

   SFLD pre\/post\-processing

   :homepage: https://github.com/ebi-pf-team/interproscan
   :license: Apache
   :recipe: /`sfld <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfld>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfld/meta.yaml>`_

   


.. conda:package:: sfld

   |downloads_sfld| |docker_sfld|

   :versions: 1.1-0
   
   :depends libgcc-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sfld

   and update with::

      conda update sfld

   or use the docker container::

      docker pull quay.io/biocontainers/sfld:<tag>

   (see `sfld/tags`_ for valid values for ``<tag>``)


.. |downloads_sfld| image:: https://img.shields.io/conda/dn/bioconda/sfld.svg?style=flat
   :target: https://anaconda.org/bioconda/sfld
   :alt:   (downloads)
.. |docker_sfld| image:: https://quay.io/repository/biocontainers/sfld/status
   :target: https://quay.io/repository/biocontainers/sfld
.. _`sfld/tags`: https://quay.io/repository/biocontainers/sfld?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sfld/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sfld/README.html