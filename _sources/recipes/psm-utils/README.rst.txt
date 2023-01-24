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

   


.. conda:package:: psm-utils

   |downloads_psm-utils| |docker_psm-utils|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends lxml: 
   :depends numpy: 
   :depends pandas: 
   :depends psims: 
   :depends pydantic: 
   :depends pyteomics: ``>=4``
   :depends python: ``>=3.7``
   :depends rich: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psm-utils

   and update with::

      conda update psm-utils

   or use the docker container::

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
        var versions = ["0.2.1","0.2.0","0.1.0"];
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