:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'synapseclient'
.. highlight: bash

synapseclient
=============

.. conda:recipe:: synapseclient
   :replaces_section_title:
   :noindex:

   Python client for Synapse

   :homepage: https://www.synapse.org
   :documentation: https://python-docs.synapse.org/
   
   :developer docs: https://github.com/Sage-Bionetworks/synapsePythonClient
   :license: APACHE / Apache-2.0
   :recipe: /`synapseclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synapseclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synapseclient/meta.yaml>`_

   A client for Synapse\, a collaborative compute space  that allows
   scientists to share and analyze data together.



.. conda:package:: synapseclient

   |downloads_synapseclient| |docker_synapseclient|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.5.0-0</code>,  <code>4.4.1-0</code>,  <code>4.4.0-0</code>,  <code>4.3.1-0</code>,  <code>4.3.0-0</code>,  <code>4.2.0-0</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-0</code>,  </span></summary>
      

      ``4.5.0-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.1-0``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.7.5-1``,  ``1.7.5-0``,  ``1.7.1-0``,  ``1.6.2-0``,  ``1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends async-lru: 
   :depends asyncio-atexit: 
   :depends deprecated: ``>=1.2.4``
   :depends httpx: 
   :depends loky: 
   :depends nest-asyncio: 
   :depends opentelemetry-api: 
   :depends opentelemetry-exporter-otlp-proto-http: 
   :depends opentelemetry-sdk: 
   :depends psutil: 
   :depends python: ``>=3.8``
   :depends requests: ``>=2.22``
   :depends tqdm: 
   :depends urllib3: ``<2``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install synapseclient

   and update with::

      mamba update synapseclient

  To create a new environment, run::

      mamba create --name myenvname synapseclient

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/synapseclient:<tag>

   (see `synapseclient/tags`_ for valid values for ``<tag>``)


.. |downloads_synapseclient| image:: https://img.shields.io/conda/dn/bioconda/synapseclient.svg?style=flat
   :target: https://anaconda.org/bioconda/synapseclient
   :alt:   (downloads)
.. |docker_synapseclient| image:: https://quay.io/repository/biocontainers/synapseclient/status
   :target: https://quay.io/repository/biocontainers/synapseclient
.. _`synapseclient/tags`: https://quay.io/repository/biocontainers/synapseclient?tab=tags


.. raw:: html

    <script>
        var package = "synapseclient";
        var versions = ["4.5.0","4.4.1","4.4.0","4.3.1","4.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/synapseclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/synapseclient/README.html