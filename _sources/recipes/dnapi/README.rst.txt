:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnapi'
.. highlight: bash

dnapi
=====

.. conda:recipe:: dnapi
   :replaces_section_title:

   De novo adapter prediction \(iterative\) algorithm for small RNA sequencing data.

   :homepage: https://github.com/jnktsj/DNApi
   :license: MIT License
   :recipe: /`dnapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnapi/meta.yaml>`_

   


.. conda:package:: dnapi

   |downloads_dnapi| |docker_dnapi|

   :versions: 1.1-3, 1.1-2, 1.1-1, 1.1-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnapi

   and update with::

      conda update dnapi

   or use the docker container::

      docker pull quay.io/biocontainers/dnapi:<tag>

   (see `dnapi/tags`_ for valid values for ``<tag>``)


.. |downloads_dnapi| image:: https://img.shields.io/conda/dn/bioconda/dnapi.svg?style=flat
   :target: https://anaconda.org/bioconda/dnapi
   :alt:   (downloads)
.. |docker_dnapi| image:: https://quay.io/repository/biocontainers/dnapi/status
   :target: https://quay.io/repository/biocontainers/dnapi
.. _`dnapi/tags`: https://quay.io/repository/biocontainers/dnapi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnapi/README.html