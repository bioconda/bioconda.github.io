:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyabpoa'
.. highlight: bash

pyabpoa
=======

.. conda:recipe:: pyabpoa
   :replaces_section_title:
   :noindex:

   pyabpoa\: SIMD\-based partial order alignment using adaptive band

   :homepage: https://github.com/yangao07/abPOA
   :license: MIT
   :recipe: /`pyabpoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyabpoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyabpoa/meta.yaml>`_

   


.. conda:package:: pyabpoa

   |downloads_pyabpoa| |docker_pyabpoa|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends cython: 
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyabpoa

   and update with::

      conda update pyabpoa

   or use the docker container::

      docker pull quay.io/biocontainers/pyabpoa:<tag>

   (see `pyabpoa/tags`_ for valid values for ``<tag>``)


.. |downloads_pyabpoa| image:: https://img.shields.io/conda/dn/bioconda/pyabpoa.svg?style=flat
   :target: https://anaconda.org/bioconda/pyabpoa
   :alt:   (downloads)
.. |docker_pyabpoa| image:: https://quay.io/repository/biocontainers/pyabpoa/status
   :target: https://quay.io/repository/biocontainers/pyabpoa
.. _`pyabpoa/tags`: https://quay.io/repository/biocontainers/pyabpoa?tab=tags


.. raw:: html

    <script>
        var package = "pyabpoa";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyabpoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyabpoa/README.html