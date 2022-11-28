:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varfish-annotator-cli'
.. highlight: bash

varfish-annotator-cli
=====================

.. conda:recipe:: varfish-annotator-cli
   :replaces_section_title:
   :noindex:

   Annotate variants for import into VarFish Server.

   :homepage: https://github.com/bihealth/varfish-annotator
   :license: MIT
   :recipe: /`varfish-annotator-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-annotator-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-annotator-cli/meta.yaml>`_

   


.. conda:package:: varfish-annotator-cli

   |downloads_varfish-annotator-cli| |docker_varfish-annotator-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.28-0</code>,  <code>0.27-0</code>,  <code>0.26-0</code>,  <code>0.25-0</code>,  <code>0.24-0</code>,  <code>0.23-0</code>,  <code>0.22-0</code>,  <code>0.21-0</code>,  <code>0.20-0</code>,  </span></summary>
      

      ``0.28-0``,  ``0.27-0``,  ``0.26-0``,  ``0.25-0``,  ``0.24-0``,  ``0.23-0``,  ``0.22-0``,  ``0.21-0``,  ``0.20-0``,  ``0.19-0``,  ``0.18-0``,  ``0.17-0``,  ``0.16-0``,  ``0.15-0``,  ``0.14-1``,  ``0.14-0``,  ``0.13-0``,  ``0.12-0``,  ``0.11-0``,  ``0.10-0``,  ``0.9-0``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install varfish-annotator-cli

   and update with::

      conda update varfish-annotator-cli

   or use the docker container::

      docker pull quay.io/biocontainers/varfish-annotator-cli:<tag>

   (see `varfish-annotator-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_varfish-annotator-cli| image:: https://img.shields.io/conda/dn/bioconda/varfish-annotator-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/varfish-annotator-cli
   :alt:   (downloads)
.. |docker_varfish-annotator-cli| image:: https://quay.io/repository/biocontainers/varfish-annotator-cli/status
   :target: https://quay.io/repository/biocontainers/varfish-annotator-cli
.. _`varfish-annotator-cli/tags`: https://quay.io/repository/biocontainers/varfish-annotator-cli?tab=tags


.. raw:: html

    <script>
        var package = "varfish-annotator-cli";
        var versions = ["0.28","0.27","0.26","0.25","0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varfish-annotator-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varfish-annotator-cli/README.html