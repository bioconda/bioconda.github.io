.. title:: Package Recipe 'biothings_client'
.. highlight: bash


biothings_client
================

.. conda:recipe:: biothings_client
   :replaces_section_title:

   Python Client for BioThings API services.

   :homepage: https://github.com/biothings/biothings_client.py
   :license: BSD / BSD
   :recipe: /`biothings_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biothings_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biothings_client/meta.yaml>`_

   


.. conda:package:: biothings_client

   |downloads_biothings_client| |docker_biothings_client|

   :versions: 0.2.0

   :depends: :conda:package:`python`  :conda:package:`requests` >=2.3.0 

   :required~by: |required_by_biothings_client|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biothings_client

   and update with::

      conda update biothings_client

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biothings_client


.. |required_by_biothings_client| conda:required_by:: biothings_client
.. |downloads_biothings_client| image:: https://img.shields.io/conda/dn/bioconda/biothings_client.svg?style=flat
   :alt:   (downloads)
.. |docker_biothings_client| image:: https://quay.io/repository/biocontainers/biothings_client/status
   :target: https://quay.io/repository/biocontainers/biothings_client







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biothings_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biothings_client/README.html

