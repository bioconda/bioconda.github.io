:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-hyphy-python'
.. highlight: bash

python-hyphy-python
===================

.. conda:recipe:: python-hyphy-python
   :replaces_section_title:
   :noindex:

   HyPhy package interface library

   :homepage: https://github.com/veg/hyphy-python
   :license: MIT
   :recipe: /`python-hyphy-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hyphy-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hyphy-python/meta.yaml>`_

   


.. conda:package:: python-hyphy-python

   |downloads_python-hyphy-python| |docker_python-hyphy-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.10-1</code>,  <code>0.1.10-0</code>,  <code>0.1.9-4</code>,  <code>0.1.9-3</code>,  <code>0.1.9-2</code>,  <code>0.1.9-1</code>,  <code>0.1.9-0</code>,  <code>0.1.6-1</code>,  <code>0.1.6-0</code>,  </span></summary>
      

      ``0.1.10-1``,  ``0.1.10-0``,  ``0.1.9-4``,  ``0.1.9-3``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libcurl: ``>=7.75.0,<8.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-hyphy-python

   and update with::

      conda update python-hyphy-python

   or use the docker container::

      docker pull quay.io/biocontainers/python-hyphy-python:<tag>

   (see `python-hyphy-python/tags`_ for valid values for ``<tag>``)


.. |downloads_python-hyphy-python| image:: https://img.shields.io/conda/dn/bioconda/python-hyphy-python.svg?style=flat
   :target: https://anaconda.org/bioconda/python-hyphy-python
   :alt:   (downloads)
.. |docker_python-hyphy-python| image:: https://quay.io/repository/biocontainers/python-hyphy-python/status
   :target: https://quay.io/repository/biocontainers/python-hyphy-python
.. _`python-hyphy-python/tags`: https://quay.io/repository/biocontainers/python-hyphy-python?tab=tags


.. raw:: html

    <script>
        var package = "python-hyphy-python";
        var versions = ["0.1.10","0.1.10","0.1.9","0.1.9","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-hyphy-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-hyphy-python/README.html