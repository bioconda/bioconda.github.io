:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypeflow'
.. highlight: bash

pypeflow
========

.. conda:recipe:: pypeflow
   :replaces_section_title:

   Light weight and reusable make \/ flow data process library written in Python

   :homepage: https://github.com/PacificBiosciences/pypeFLOW
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`pypeflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypeflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypeflow/meta.yaml>`_

   


.. conda:package:: pypeflow

   |downloads_pypeflow| |docker_pypeflow|

   :versions: 2.1.1-0, 2.0.4-0, 2.0.2-1, 2.0.2-0, 2.0.1-0, 2.0.0-0, 1.1.0-0, 1.0.0-0, 0.1.1-0, 0.1.0-1, 0.1.0-0
   
   :depends future: >=0.16.0
   :depends networkx: >=1.7,<=1.11
   :depends python: <3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pypeflow

   and update with::

      conda update pypeflow

   or use the docker container::

      docker pull quay.io/biocontainers/pypeflow:<tag>

   (see `pypeflow/tags`_ for valid values for ``<tag>``)


.. |downloads_pypeflow| image:: https://img.shields.io/conda/dn/bioconda/pypeflow.svg?style=flat
   :target: https://anaconda.org/bioconda/pypeflow
   :alt:   (downloads)
.. |docker_pypeflow| image:: https://quay.io/repository/biocontainers/pypeflow/status
   :target: https://quay.io/repository/biocontainers/pypeflow
.. _`pypeflow/tags`: https://quay.io/repository/biocontainers/pypeflow?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypeflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypeflow/README.html