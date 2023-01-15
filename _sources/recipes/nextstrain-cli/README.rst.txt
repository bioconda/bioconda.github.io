:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextstrain-cli'
.. highlight: bash

nextstrain-cli
==============

.. conda:recipe:: nextstrain-cli
   :replaces_section_title:
   :noindex:

   The Nextstrain command\-line interface \(CLI\)

   :homepage: https://docs.nextstrain.org/projects/cli/
   :developer docs: https://github.com/nextstrain/cli
   :license: MIT / MIT
   :recipe: /`nextstrain-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain-cli/meta.yaml>`_

   The Nextstrain command\-line interface \(CLI\)—a program called nextstrain—aims to provide a consistent way to run and visualize pathogen builds and access Nextstrain components like Augur and Auspice across computing environments such as Docker\, Conda\, and AWS Batch.



.. conda:package:: nextstrain-cli

   |downloads_nextstrain-cli| |docker_nextstrain-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.2-0</code>,  <code>6.0.0-0</code>,  <code>5.0.1-0</code>,  <code>5.0.0-0</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  <code>4.1.1-1</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  </span></summary>
      

      ``6.0.2-0``,  ``6.0.0-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends boto3: 
   :depends docutils: 
   :depends fasteners: 
   :depends fsspec: 
   :depends importlib_resources: ``>=5.3.0``
   :depends packaging: 
   :depends pyjwt: ``>=2.0.0``
   :depends pyparsing: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends s3fs: 
   :depends typing_extensions: ``>=3.6.4``
   :depends wcmatch: ``>=6.0``
   :depends wrapt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nextstrain-cli

   and update with::

      conda update nextstrain-cli

   or use the docker container::

      docker pull quay.io/biocontainers/nextstrain-cli:<tag>

   (see `nextstrain-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_nextstrain-cli| image:: https://img.shields.io/conda/dn/bioconda/nextstrain-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/nextstrain-cli
   :alt:   (downloads)
.. |docker_nextstrain-cli| image:: https://quay.io/repository/biocontainers/nextstrain-cli/status
   :target: https://quay.io/repository/biocontainers/nextstrain-cli
.. _`nextstrain-cli/tags`: https://quay.io/repository/biocontainers/nextstrain-cli?tab=tags


.. raw:: html

    <script>
        var package = "nextstrain-cli";
        var versions = ["6.0.2","6.0.0","5.0.1","5.0.0","4.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextstrain-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextstrain-cli/README.html