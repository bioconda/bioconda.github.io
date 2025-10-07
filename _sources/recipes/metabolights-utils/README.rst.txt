:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabolights-utils'
.. highlight: bash

metabolights-utils
==================

.. conda:recipe:: metabolights-utils
   :replaces_section_title:
   :noindex:

   MetaboLights open metabolomics data repository command line interface \(CLI\)\, common MetaboLights data models\, utility methods and classes.

   :homepage: https://github.com/EBI-Metabolights/metabolights-utils
   :documentation: https://github.com/EBI-Metabolights/metabolights-utils/blob/v1.4.9/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`metabolights-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolights-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolights-utils/meta.yaml>`_

   


.. conda:package:: metabolights-utils

   |downloads_metabolights-utils| |docker_metabolights-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.9-0</code>,  <code>1.4.8-0</code>,  <code>1.4.5-0</code>,  <code>1.4.4-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.12-0</code>,  </span></summary>
      

      ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.12-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.12-0``,  ``1.1.11-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends beautifulsoup4: ``>=4.12.3``
   :depends click: ``>=8.1.7``
   :depends httpx: ``>=0.27.0``
   :depends jsonpath-ng: ``>=1.7.0``
   :depends jsonschema: ``>=4.24.0``
   :depends pydantic: ``>=2.11.7``
   :depends pydantic-settings: ``>=2.0.3``
   :depends python: ``>=3.12``
   :depends python-dateutil: 
   :depends unidecode: ``>=1.3.8``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metabolights-utils

   and update with::

      mamba update metabolights-utils

  To create a new environment, run::

      mamba create --name myenvname metabolights-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metabolights-utils:<tag>

   (see `metabolights-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_metabolights-utils| image:: https://img.shields.io/conda/dn/bioconda/metabolights-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/metabolights-utils
   :alt:   (downloads)
.. |docker_metabolights-utils| image:: https://quay.io/repository/biocontainers/metabolights-utils/status
   :target: https://quay.io/repository/biocontainers/metabolights-utils
.. _`metabolights-utils/tags`: https://quay.io/repository/biocontainers/metabolights-utils?tab=tags


.. raw:: html

    <script>
        var package = "metabolights-utils";
        var versions = ["1.4.9","1.4.8","1.4.5","1.4.4","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabolights-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabolights-utils/README.html