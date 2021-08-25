:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hca'
.. highlight: bash

hca
===

.. conda:recipe:: hca
   :replaces_section_title:
   :noindex:

   Human Cell Atlas Data Storage System Command Line Interface. This repository is a Command Line Interface \(CLI\) and Python library \(API\) for interacting with the Data Coordination Platform \(DCP\) of the Human Cell Atlas \(HCA\). Currently the hca package supports interaction with the Upload Service and Data Storage Service \(DSS\) for services such as uploading\, downloading\, and querying data.

   :homepage: https://github.com/HumanCellAtlas/dcp-cli
   :license: APACHE / Apache Software
   :recipe: /`hca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hca/meta.yaml>`_

   


.. conda:package:: hca

   |downloads_hca| |docker_hca|

   :versions:
      
      

      ``7.0.1-0``,  ``7.0.0-0``,  ``6.5.1-0``,  ``6.5.0-0``,  ``6.4.0-0``,  ``6.3.0-0``

      

   
   :depends argcomplete: ``>=1.9.3,<2``
   :depends atomicwrites: ``>=1.3.0,<2``
   :depends boto3: ``>=1.9.86,<2``
   :depends botocore: ``>=1.12.208,<2``
   :depends commonmark: ``>=0.9.0,<1``
   :depends cryptography: ``>=2.6.1,<3``
   :depends dcplib: ``>=2.0.2,<3``
   :depends docutils: 
   :depends google-auth: ``>=1.3.0,<2``
   :depends google-auth-oauthlib: ``>=0.4.1,<2``
   :depends jinja2: ``>=2.10,<3``
   :depends jsonpointer: ``>=1.10,<2``
   :depends jsonschema: ``>=2.6,<3``
   :depends puremagic: ``>=1.4,<1.5``
   :depends pyjwt: ``>=1.6.4,<2``
   :depends python: ``>=3``
   :depends requests: ``>=2.20.0,<3``
   :depends tenacity: ``>=5.0.2,<5.1``
   :depends tqdm: ``>=4.33.0,<5``
   :depends tweak: ``>=1.0.3,<2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hca

   and update with::

      conda update hca

   or use the docker container::

      docker pull quay.io/biocontainers/hca:<tag>

   (see `hca/tags`_ for valid values for ``<tag>``)


.. |downloads_hca| image:: https://img.shields.io/conda/dn/bioconda/hca.svg?style=flat
   :target: https://anaconda.org/bioconda/hca
   :alt:   (downloads)
.. |docker_hca| image:: https://quay.io/repository/biocontainers/hca/status
   :target: https://quay.io/repository/biocontainers/hca
.. _`hca/tags`: https://quay.io/repository/biocontainers/hca?tab=tags


.. raw:: html

    <script>
        var package = "hca";
        var versions = ["7.0.1","7.0.0","6.5.1","6.5.0","6.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hca/README.html