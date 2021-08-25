:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'py2bit'
.. highlight: bash

py2bit
======

.. conda:recipe:: py2bit
   :replaces_section_title:
   :noindex:

   A package for accessing 2bit files using lib2bit

   :homepage: https://github.com/deeptools/py2bit
   :license: MIT
   :recipe: /`py2bit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py2bit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py2bit/meta.yaml>`_

   


.. conda:package:: py2bit

   |downloads_py2bit| |docker_py2bit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-5</code>,  <code>0.3.0-4</code>,  <code>0.3.0-3</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install py2bit

   and update with::

      conda update py2bit

   or use the docker container::

      docker pull quay.io/biocontainers/py2bit:<tag>

   (see `py2bit/tags`_ for valid values for ``<tag>``)


.. |downloads_py2bit| image:: https://img.shields.io/conda/dn/bioconda/py2bit.svg?style=flat
   :target: https://anaconda.org/bioconda/py2bit
   :alt:   (downloads)
.. |docker_py2bit| image:: https://quay.io/repository/biocontainers/py2bit/status
   :target: https://quay.io/repository/biocontainers/py2bit
.. _`py2bit/tags`: https://quay.io/repository/biocontainers/py2bit?tab=tags


.. raw:: html

    <script>
        var package = "py2bit";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/py2bit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/py2bit/README.html