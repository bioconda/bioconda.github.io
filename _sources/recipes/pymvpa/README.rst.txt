:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymvpa'
.. highlight: bash

pymvpa
======

.. conda:recipe:: pymvpa
   :replaces_section_title:
   :noindex:

   PyMVPA \-\- Multivariate Pattern Analysis in Python

   :homepage: http://www.pymvpa.org/
   :developer docs: https://github.com/PyMVPA/PyMVPA
   :license: perl_5
   :recipe: /`pymvpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymvpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymvpa/meta.yaml>`_

   


.. conda:package:: pymvpa

   |downloads_pymvpa| |docker_pymvpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.5-8</code>,  <code>2.6.5-6</code>,  <code>2.6.5-5</code>,  <code>2.6.5-4</code>,  <code>2.6.5-3</code>,  <code>2.6.5-2</code>,  <code>2.6.5-1</code>,  <code>2.6.5-0</code>,  <code>2.6.4-0</code>,  </span></summary>
      

      ``2.6.5-8``,  ``2.6.5-6``,  ``2.6.5-5``,  ``2.6.5-4``,  ``2.6.5-3``,  ``2.6.5-2``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libsvm: ``>=3.21,<4.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends swig: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymvpa

   and update with::

      conda update pymvpa

   or use the docker container::

      docker pull quay.io/biocontainers/pymvpa:<tag>

   (see `pymvpa/tags`_ for valid values for ``<tag>``)


.. |downloads_pymvpa| image:: https://img.shields.io/conda/dn/bioconda/pymvpa.svg?style=flat
   :target: https://anaconda.org/bioconda/pymvpa
   :alt:   (downloads)
.. |docker_pymvpa| image:: https://quay.io/repository/biocontainers/pymvpa/status
   :target: https://quay.io/repository/biocontainers/pymvpa
.. _`pymvpa/tags`: https://quay.io/repository/biocontainers/pymvpa?tab=tags


.. raw:: html

    <script>
        var package = "pymvpa";
        var versions = ["2.6.5","2.6.5","2.6.5","2.6.5","2.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymvpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymvpa/README.html