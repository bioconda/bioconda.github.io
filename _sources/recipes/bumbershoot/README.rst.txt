:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bumbershoot'
.. highlight: bash

bumbershoot
===========

.. conda:recipe:: bumbershoot
   :replaces_section_title:

   The Bumbershoot tool suite for analyzing shotgun proteomic data

   :homepage: https://proteowizard.sourceforge.net
   :license: Apache 2.0
   :recipe: /`bumbershoot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bumbershoot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bumbershoot/meta.yaml>`_

   


.. conda:package:: bumbershoot

   |downloads_bumbershoot| |docker_bumbershoot|

   :versions: 3_0_11579-0, 3_0_11392-0, 3_0_11391-0, 3_0_11369-0, 3_0_10246-0, 3_0_10158-0
   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bumbershoot

   and update with::

      conda update bumbershoot

   or use the docker container::

      docker pull quay.io/biocontainers/bumbershoot:<tag>

   (see `bumbershoot/tags`_ for valid values for ``<tag>``)


.. |downloads_bumbershoot| image:: https://img.shields.io/conda/dn/bioconda/bumbershoot.svg?style=flat
   :target: https://anaconda.org/bioconda/bumbershoot
   :alt:   (downloads)
.. |docker_bumbershoot| image:: https://quay.io/repository/biocontainers/bumbershoot/status
   :target: https://quay.io/repository/biocontainers/bumbershoot
.. _`bumbershoot/tags`: https://quay.io/repository/biocontainers/bumbershoot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bumbershoot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bumbershoot/README.html