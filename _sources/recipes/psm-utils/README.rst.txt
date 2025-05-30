:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psm-utils'
.. highlight: bash

psm-utils
=========

.. conda:recipe:: psm-utils
   :replaces_section_title:
   :noindex:

   Common utilities for parsing and handling peptide\-spectrum matches and search engine results.

   :homepage: https://github.com/compomics/psm_utils
   :documentation: https://psm_utils.readthedocs.io
   
   :license: APACHE / Apache-2.0
   :recipe: /`psm-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm-utils/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jproteome.2c00609`, biotools: :biotools:`psm_utils`

   


.. conda:package:: psm-utils

   |downloads_psm-utils| |docker_psm-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends lxml: 
   :depends numpy: 
   :depends pandas: 
   :depends psims: 
   :depends pyarrow: 
   :depends pydantic: 
   :depends pyteomics: ``>=4``
   :depends python: ``>=3.7``
   :depends rich: 
   :depends sqlalchemy: 
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

      mamba install psm-utils

   and update with::

      mamba update psm-utils

  To create a new environment, run::

      mamba create --name myenvname psm-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psm-utils:<tag>

   (see `psm-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_psm-utils| image:: https://img.shields.io/conda/dn/bioconda/psm-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/psm-utils
   :alt:   (downloads)
.. |docker_psm-utils| image:: https://quay.io/repository/biocontainers/psm-utils/status
   :target: https://quay.io/repository/biocontainers/psm-utils
.. _`psm-utils/tags`: https://quay.io/repository/biocontainers/psm-utils?tab=tags


.. raw:: html

    <script>
        var package = "psm-utils";
        var versions = ["1.4.1","1.4.0","1.3.0","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psm-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psm-utils/README.html