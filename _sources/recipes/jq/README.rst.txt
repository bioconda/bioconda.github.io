:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jq'
.. highlight: bash

jq
==

.. conda:recipe:: jq
   :replaces_section_title:

   jq is a lightweight and flexible command\-line JSON processor.

   :homepage: https://stedolan.github.io/jq
   :license: MIT (code), CC-BY-3.0 (docs)
   :recipe: /`jq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jq/meta.yaml>`_

   


.. conda:package:: jq

   |downloads_jq| |docker_jq|

   :versions: 1.5-0
   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jq

   and update with::

      conda update jq

   or use the docker container::

      docker pull quay.io/biocontainers/jq:<tag>

   (see `jq/tags`_ for valid values for ``<tag>``)


.. |downloads_jq| image:: https://img.shields.io/conda/dn/bioconda/jq.svg?style=flat
   :alt:   (downloads)
.. |docker_jq| image:: https://quay.io/repository/biocontainers/jq/status
   :target: https://quay.io/repository/biocontainers/jq
.. _`jq/tags`: https://quay.io/repository/biocontainers/jq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jq/README.html