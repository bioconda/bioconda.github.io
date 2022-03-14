:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrodigal'
.. highlight: bash

pyrodigal
=========

.. conda:recipe:: pyrodigal
   :replaces_section_title:
   :noindex:

   Python bindings to Prodigal\, an ORF finder for microbial sequences.

   :homepage: https://github.com/althonos/pyrodigal
   :license: GPL / GPL-3
   :recipe: /`pyrodigal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrodigal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrodigal/meta.yaml>`_

   


.. conda:package:: pyrodigal

   |downloads_pyrodigal| |docker_pyrodigal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.4-1</code>,  <code>0.6.4-0</code>,  <code>0.6.2-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.7-0</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.2-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.7-0``,  ``0.4.6-1``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyrodigal

   and update with::

      conda update pyrodigal

   or use the docker container::

      docker pull quay.io/biocontainers/pyrodigal:<tag>

   (see `pyrodigal/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrodigal| image:: https://img.shields.io/conda/dn/bioconda/pyrodigal.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrodigal
   :alt:   (downloads)
.. |docker_pyrodigal| image:: https://quay.io/repository/biocontainers/pyrodigal/status
   :target: https://quay.io/repository/biocontainers/pyrodigal
.. _`pyrodigal/tags`: https://quay.io/repository/biocontainers/pyrodigal?tab=tags


.. raw:: html

    <script>
        var package = "pyrodigal";
        var versions = ["0.7.0","0.6.4","0.6.4","0.6.2","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrodigal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrodigal/README.html