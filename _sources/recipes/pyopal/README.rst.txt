:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyopal'
.. highlight: bash

pyopal
======

.. conda:recipe:: pyopal
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to Opal\, a SIMD\-accelerated pairwise aligner.

   :homepage: https://github.com/althonos/pyopal
   :documentation: https://pyopal.readthedocs.org/
   
   :license: MIT
   :recipe: /`pyopal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopal/meta.yaml>`_

   


.. conda:package:: pyopal

   |downloads_pyopal| |docker_pyopal|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends archspec: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyopal

   and update with::

      conda update pyopal

   or use the docker container::

      docker pull quay.io/biocontainers/pyopal:<tag>

   (see `pyopal/tags`_ for valid values for ``<tag>``)


.. |downloads_pyopal| image:: https://img.shields.io/conda/dn/bioconda/pyopal.svg?style=flat
   :target: https://anaconda.org/bioconda/pyopal
   :alt:   (downloads)
.. |docker_pyopal| image:: https://quay.io/repository/biocontainers/pyopal/status
   :target: https://quay.io/repository/biocontainers/pyopal
.. _`pyopal/tags`: https://quay.io/repository/biocontainers/pyopal?tab=tags


.. raw:: html

    <script>
        var package = "pyopal";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyopal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyopal/README.html