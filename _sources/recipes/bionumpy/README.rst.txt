:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bionumpy'
.. highlight: bash

bionumpy
========

.. conda:recipe:: bionumpy
   :replaces_section_title:
   :noindex:

   Library for working with biological sequence data as numpy arrays

   :homepage: https://github.com/bionumpy/bionumpy
   :license: MIT
   :recipe: /`bionumpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionumpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionumpy/meta.yaml>`_

   


.. conda:package:: bionumpy

   |downloads_bionumpy| |docker_bionumpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.26-0</code>,  <code>0.2.25-0</code>,  <code>0.2.24-0</code>,  <code>0.2.23-0</code>,  <code>0.2.22-0</code>,  <code>0.2.20-0</code>,  <code>0.2.19-0</code>,  <code>0.2.18-0</code>,  <code>0.2.17-0</code>,  </span></summary>
      

      ``0.2.26-0``,  ``0.2.25-0``,  ``0.2.24-0``,  ``0.2.23-0``,  ``0.2.22-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.13-0``,  ``0.2.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends npstructures: ``>=0.2.9``
   :depends numpy: ``>=1.20,<1.24``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bionumpy

   and update with::

      conda update bionumpy

   or use the docker container::

      docker pull quay.io/biocontainers/bionumpy:<tag>

   (see `bionumpy/tags`_ for valid values for ``<tag>``)


.. |downloads_bionumpy| image:: https://img.shields.io/conda/dn/bioconda/bionumpy.svg?style=flat
   :target: https://anaconda.org/bioconda/bionumpy
   :alt:   (downloads)
.. |docker_bionumpy| image:: https://quay.io/repository/biocontainers/bionumpy/status
   :target: https://quay.io/repository/biocontainers/bionumpy
.. _`bionumpy/tags`: https://quay.io/repository/biocontainers/bionumpy?tab=tags


.. raw:: html

    <script>
        var package = "bionumpy";
        var versions = ["0.2.26","0.2.25","0.2.24","0.2.23","0.2.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bionumpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bionumpy/README.html