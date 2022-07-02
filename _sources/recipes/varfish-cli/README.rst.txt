:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varfish-cli'
.. highlight: bash

varfish-cli
===========

.. conda:recipe:: varfish-cli
   :replaces_section_title:
   :noindex:

   Command line interface to VarFish via REST API

   :homepage: https://github.com/bihealth/varfish-cli
   :license: MIT / MIT
   :recipe: /`varfish-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-cli/meta.yaml>`_

   


.. conda:package:: varfish-cli

   |downloads_varfish-cli| |docker_varfish-cli|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.4-0``

      

   
   :depends attrs: 
   :depends cattrs: 
   :depends jsonschema: 
   :depends logzero: 
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends python-levenshtein: 
   :depends requests: 
   :depends simplejson: 
   :depends tabulate: 
   :depends toml: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install varfish-cli

   and update with::

      conda update varfish-cli

   or use the docker container::

      docker pull quay.io/biocontainers/varfish-cli:<tag>

   (see `varfish-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_varfish-cli| image:: https://img.shields.io/conda/dn/bioconda/varfish-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/varfish-cli
   :alt:   (downloads)
.. |docker_varfish-cli| image:: https://quay.io/repository/biocontainers/varfish-cli/status
   :target: https://quay.io/repository/biocontainers/varfish-cli
.. _`varfish-cli/tags`: https://quay.io/repository/biocontainers/varfish-cli?tab=tags


.. raw:: html

    <script>
        var package = "varfish-cli";
        var versions = ["0.3.4","0.3.3","0.3.2","0.3.0","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varfish-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varfish-cli/README.html