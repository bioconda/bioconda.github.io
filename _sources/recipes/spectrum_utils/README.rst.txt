:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectrum_utils'
.. highlight: bash

spectrum_utils
==============

.. conda:recipe:: spectrum_utils
   :replaces_section_title:
   :noindex:

   Mass spectrometry utility functions

   :homepage: https://github.com/bittremieux/spectrum_utils
   :documentation: https://spectrum-utils.readthedocs.io/
   
   :license: APACHE / Apache Software
   :recipe: /`spectrum_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrum_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrum_utils/meta.yaml>`_

   


.. conda:package:: spectrum_utils

   |downloads_spectrum_utils| |docker_spectrum_utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-2</code>,  <code>0.3.2-1</code>,  <code>0.3.2-0</code>,  <code>0.3.0-0</code>,  <code>0.2.1-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends altair: 
   :depends appdirs: 
   :depends fastobo: 
   :depends lark: ``>=1.0``
   :depends matplotlib-base: 
   :depends numba: ``>=0.47``
   :depends numpy: 
   :depends pandas: 
   :depends pyteomics: ``>=4.5``
   :depends python: ``>=3.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spectrum_utils

   and update with::

      conda update spectrum_utils

   or use the docker container::

      docker pull quay.io/biocontainers/spectrum_utils:<tag>

   (see `spectrum_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_spectrum_utils| image:: https://img.shields.io/conda/dn/bioconda/spectrum_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/spectrum_utils
   :alt:   (downloads)
.. |docker_spectrum_utils| image:: https://quay.io/repository/biocontainers/spectrum_utils/status
   :target: https://quay.io/repository/biocontainers/spectrum_utils
.. _`spectrum_utils/tags`: https://quay.io/repository/biocontainers/spectrum_utils?tab=tags


.. raw:: html

    <script>
        var package = "spectrum_utils";
        var versions = ["0.4.0","0.3.5","0.3.4","0.3.3","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectrum_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectrum_utils/README.html