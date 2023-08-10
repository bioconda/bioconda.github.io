:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyspoa'
.. highlight: bash

pyspoa
======

.. conda:recipe:: pyspoa
   :replaces_section_title:
   :noindex:

   Python binding to spoa library.

   :homepage: https://github.com/nanoporetech/pyspoa
   :documentation: https://github.com/nanoporetech/spoa
   
   :developer docs: https://github.com/nanoporetech/spoa
   :license: MIT
   :recipe: /`pyspoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyspoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyspoa/meta.yaml>`_

   


.. conda:package:: pyspoa

   |downloads_pyspoa| |docker_pyspoa|

   :versions:
      
      

      ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.3-6``,  ``0.0.3-4``,  ``0.0.3-3``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyspoa

   and update with::

      conda update pyspoa

   or use the docker container::

      docker pull quay.io/biocontainers/pyspoa:<tag>

   (see `pyspoa/tags`_ for valid values for ``<tag>``)


.. |downloads_pyspoa| image:: https://img.shields.io/conda/dn/bioconda/pyspoa.svg?style=flat
   :target: https://anaconda.org/bioconda/pyspoa
   :alt:   (downloads)
.. |docker_pyspoa| image:: https://quay.io/repository/biocontainers/pyspoa/status
   :target: https://quay.io/repository/biocontainers/pyspoa
.. _`pyspoa/tags`: https://quay.io/repository/biocontainers/pyspoa?tab=tags


.. raw:: html

    <script>
        var package = "pyspoa";
        var versions = ["0.0.10","0.0.9","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyspoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyspoa/README.html