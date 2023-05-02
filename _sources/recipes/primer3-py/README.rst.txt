:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primer3-py'
.. highlight: bash

primer3-py
==========

.. conda:recipe:: primer3-py
   :replaces_section_title:
   :noindex:

   Python bindings for Primer3

   :homepage: https://github.com/libnano/primer3-py
   :license: GPL-2.0-only
   :recipe: /`primer3-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3-py/meta.yaml>`_

   


.. conda:package:: primer3-py

   |downloads_primer3-py| |docker_primer3-py|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.4-3</code>,  <code>0.5.4-2</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install primer3-py

   and update with::

      conda update primer3-py

   or use the docker container::

      docker pull quay.io/biocontainers/primer3-py:<tag>

   (see `primer3-py/tags`_ for valid values for ``<tag>``)


.. |downloads_primer3-py| image:: https://img.shields.io/conda/dn/bioconda/primer3-py.svg?style=flat
   :target: https://anaconda.org/bioconda/primer3-py
   :alt:   (downloads)
.. |docker_primer3-py| image:: https://quay.io/repository/biocontainers/primer3-py/status
   :target: https://quay.io/repository/biocontainers/primer3-py
.. _`primer3-py/tags`: https://quay.io/repository/biocontainers/primer3-py?tab=tags


.. raw:: html

    <script>
        var package = "primer3-py";
        var versions = ["1.2.1","1.2.0","0.6.1","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primer3-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primer3-py/README.html