:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyopenms'
.. highlight: bash

pyopenms
========

.. conda:recipe:: pyopenms
   :replaces_section_title:
   :noindex:

   python bindings for OpenMS\, an open\-source software C\+\+ library for LC\-MS data management and analyses

   :homepage: https://github.com/OpenMS/OpenMS
   :license: BSD
   :recipe: /`pyopenms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopenms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopenms/meta.yaml>`_
   :links: biotools: :biotools:`openms`, doi: :doi:`10.1038/nmeth.3959`

   


.. conda:package:: pyopenms

   |downloads_pyopenms| |docker_pyopenms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-0</code>,  <code>2.9.1-3</code>,  <code>2.9.1-1</code>,  <code>2.9.1-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.7.0-1</code>,  <code>2.6.0-0</code>,  <code>2.5.0-6</code>,  </span></summary>
      

      ``3.0.0-0``,  ``2.9.1-3``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-3``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<1.1.0a0``
   :depends coinmp: ``>=1.8.4,<1.9.0a0``
   :depends eigen: ``>=3.4.1,<3.5.0a0``
   :depends hdf5: ``>=1.14.1,<1.15.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libopenms: ``3.0.0.*``
   :depends libstdcxx-ng: ``>=12``
   :depends libsvm: ``>=325,<326.0a0``
   :depends matplotlib-base: 
   :depends numpy: ``1.23.*``
   :depends numpy: ``>=1.23.5,<2.0a0``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends qt-main: ``>=5.15.8,<5.16.0a0``
   :depends sysroot_linux-64: ``2.17.*``
   :depends xerces-c: ``>=3.2.4,<3.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyopenms

   and update with::

      conda update pyopenms

   or use the docker container::

      docker pull quay.io/biocontainers/pyopenms:<tag>

   (see `pyopenms/tags`_ for valid values for ``<tag>``)


.. |downloads_pyopenms| image:: https://img.shields.io/conda/dn/bioconda/pyopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/pyopenms
   :alt:   (downloads)
.. |docker_pyopenms| image:: https://quay.io/repository/biocontainers/pyopenms/status
   :target: https://quay.io/repository/biocontainers/pyopenms
.. _`pyopenms/tags`: https://quay.io/repository/biocontainers/pyopenms?tab=tags


.. raw:: html

    <script>
        var package = "pyopenms";
        var versions = ["3.0.0","2.9.1","2.9.1","2.9.1","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyopenms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyopenms/README.html