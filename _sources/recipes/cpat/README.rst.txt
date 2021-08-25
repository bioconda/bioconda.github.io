:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpat'
.. highlight: bash

cpat
====

.. conda:recipe:: cpat
   :replaces_section_title:
   :noindex:

   Coding Potential Assessment Tool

   :homepage: https://cpat.readthedocs.io/en/latest/
   :license: GNU General Public v2 or later (GPLv2+)
   :recipe: /`cpat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpat/meta.yaml>`_

   


.. conda:package:: cpat

   |downloads_cpat| |docker_cpat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.4-0</code>,  <code>2.0.0-4</code>,  <code>2.0.0-3</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-1</code>,  </span></summary>
      

      ``3.0.4-0``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-2``

      
      .. raw:: html

         </details>
      

   
   :depends bx-python: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cpat

   and update with::

      conda update cpat

   or use the docker container::

      docker pull quay.io/biocontainers/cpat:<tag>

   (see `cpat/tags`_ for valid values for ``<tag>``)


.. |downloads_cpat| image:: https://img.shields.io/conda/dn/bioconda/cpat.svg?style=flat
   :target: https://anaconda.org/bioconda/cpat
   :alt:   (downloads)
.. |docker_cpat| image:: https://quay.io/repository/biocontainers/cpat/status
   :target: https://quay.io/repository/biocontainers/cpat
.. _`cpat/tags`: https://quay.io/repository/biocontainers/cpat?tab=tags


.. raw:: html

    <script>
        var package = "cpat";
        var versions = ["3.0.4","2.0.0","2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpat/README.html