:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainge'
.. highlight: bash

strainge
========

.. conda:recipe:: strainge
   :replaces_section_title:
   :noindex:

   Strain Genome Explorer\: a tool suite for tracking and characterizing low\-abundance strains.

   :homepage: https://github.com/broadinstitute/strainge
   :license: BSD / BSD-3-Clause
   :recipe: /`strainge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainge/meta.yaml>`_

   


.. conda:package:: strainge

   |downloads_strainge| |docker_strainge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.7-1</code>,  <code>1.3.7-0</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2-1</code>,  </span></summary>
      

      ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: 
   :depends intervaltree: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pybind11: ``>=2.2``
   :depends pysam: ``>=0.10``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-bio: ``>=0.5``
   :depends scikit-learn: ``>=0.24``
   :depends scipy: ``<1.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strainge

   and update with::

      conda update strainge

   or use the docker container::

      docker pull quay.io/biocontainers/strainge:<tag>

   (see `strainge/tags`_ for valid values for ``<tag>``)


.. |downloads_strainge| image:: https://img.shields.io/conda/dn/bioconda/strainge.svg?style=flat
   :target: https://anaconda.org/bioconda/strainge
   :alt:   (downloads)
.. |docker_strainge| image:: https://quay.io/repository/biocontainers/strainge/status
   :target: https://quay.io/repository/biocontainers/strainge
.. _`strainge/tags`: https://quay.io/repository/biocontainers/strainge?tab=tags


.. raw:: html

    <script>
        var package = "strainge";
        var versions = ["1.3.7","1.3.7","1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainge/README.html