:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhmmer'
.. highlight: bash

pyhmmer
=======

.. conda:recipe:: pyhmmer
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to HMMER3.

   :homepage: https://github.com/althonos/pyhmmer
   :documentation: https://pyhmmer.readthedocs.io
   
   :license: MIT
   :recipe: /`pyhmmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmer/meta.yaml>`_
   :links: DOI: :DOI:`10.1093/bioinformatics/btad214`

   


.. conda:package:: pyhmmer

   |downloads_pyhmmer| |docker_pyhmmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-3</code>,  <code>0.8.0-1</code>,  <code>0.8.0-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-1</code>,  <code>0.7.1-0</code>,  <code>0.6.3-0</code>,  </span></summary>
      

      ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-3``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.6.3-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.11-1``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.4-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends psutil: ``>=5.8``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyhmmer

   and update with::

      conda update pyhmmer

   or use the docker container::

      docker pull quay.io/biocontainers/pyhmmer:<tag>

   (see `pyhmmer/tags`_ for valid values for ``<tag>``)


.. |downloads_pyhmmer| image:: https://img.shields.io/conda/dn/bioconda/pyhmmer.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhmmer
   :alt:   (downloads)
.. |docker_pyhmmer| image:: https://quay.io/repository/biocontainers/pyhmmer/status
   :target: https://quay.io/repository/biocontainers/pyhmmer
.. _`pyhmmer/tags`: https://quay.io/repository/biocontainers/pyhmmer?tab=tags


.. raw:: html

    <script>
        var package = "pyhmmer";
        var versions = ["0.8.1","0.8.1","0.8.0","0.8.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhmmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhmmer/README.html