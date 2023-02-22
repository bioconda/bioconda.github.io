:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nda-tools'
.. highlight: bash

nda-tools
=========

.. conda:recipe:: nda-tools
   :replaces_section_title:
   :noindex:

   Python package for interacting with NDA web services.

   :homepage: https://github.com/NDAR/nda-tools
   :license: MIT / MIT
   :recipe: /`nda-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nda-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nda-tools/meta.yaml>`_

   


.. conda:package:: nda-tools

   |downloads_nda-tools| |docker_nda-tools|

   :versions:
      
      

      ``0.2.23-0``

      

   
   :depends boto3: 
   :depends botocore: 
   :depends keyring: 
   :depends mock: 
   :depends packaging: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nda-tools

   and update with::

      conda update nda-tools

   or use the docker container::

      docker pull quay.io/biocontainers/nda-tools:<tag>

   (see `nda-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_nda-tools| image:: https://img.shields.io/conda/dn/bioconda/nda-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/nda-tools
   :alt:   (downloads)
.. |docker_nda-tools| image:: https://quay.io/repository/biocontainers/nda-tools/status
   :target: https://quay.io/repository/biocontainers/nda-tools
.. _`nda-tools/tags`: https://quay.io/repository/biocontainers/nda-tools?tab=tags


.. raw:: html

    <script>
        var package = "nda-tools";
        var versions = ["0.2.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nda-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nda-tools/README.html