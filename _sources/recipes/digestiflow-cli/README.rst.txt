:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'digestiflow-cli'
.. highlight: bash

digestiflow-cli
===============

.. conda:recipe:: digestiflow-cli
   :replaces_section_title:

   Command line client for Digestiflow.

   :homepage: https://github.com/bihealth/digestiflow-cli
   :license: MIT
   :recipe: /`digestiflow-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-cli/meta.yaml>`_

   


.. conda:package:: digestiflow-cli

   |downloads_digestiflow-cli| |docker_digestiflow-cli|

   :versions: 0.4.0-0, 0.3.0-0, 0.2.0-0, 0.1.1-0
   
   :depends libgcc-ng: >=4.9
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install digestiflow-cli

   and update with::

      conda update digestiflow-cli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/digestiflow-cli:<tag>

   (see `digestiflow-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_digestiflow-cli| image:: https://img.shields.io/conda/dn/bioconda/digestiflow-cli.svg?style=flat
   :alt:   (downloads)
.. |docker_digestiflow-cli| image:: https://quay.io/repository/biocontainers/digestiflow-cli/status
   :target: https://quay.io/repository/biocontainers/digestiflow-cli
.. _`digestiflow-cli/tags`: https://quay.io/repository/biocontainers/digestiflow-cli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/digestiflow-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/digestiflow-cli/README.html