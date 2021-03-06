:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epiweeks'
.. highlight: bash

epiweeks
========

.. conda:recipe:: epiweeks
   :replaces_section_title:
   :noindex:

   Calculate epidemiological weeks using the CDC \(MMWR\) and ISO week numbering systems.

   :homepage: https://github.com/dralshehri/epiweeks
   :license: MIT / MIT
   :recipe: /`epiweeks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epiweeks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epiweeks/meta.yaml>`_

   


.. conda:package:: epiweeks

   |downloads_epiweeks| |docker_epiweeks|

   :versions:
      
      

      ``2.1.2-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epiweeks

   and update with::

      conda update epiweeks

   or use the docker container::

      docker pull quay.io/biocontainers/epiweeks:<tag>

   (see `epiweeks/tags`_ for valid values for ``<tag>``)


.. |downloads_epiweeks| image:: https://img.shields.io/conda/dn/bioconda/epiweeks.svg?style=flat
   :target: https://anaconda.org/bioconda/epiweeks
   :alt:   (downloads)
.. |docker_epiweeks| image:: https://quay.io/repository/biocontainers/epiweeks/status
   :target: https://quay.io/repository/biocontainers/epiweeks
.. _`epiweeks/tags`: https://quay.io/repository/biocontainers/epiweeks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epiweeks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epiweeks/README.html