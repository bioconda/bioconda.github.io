:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms2pip'
.. highlight: bash

ms2pip
======

.. conda:recipe:: ms2pip
   :replaces_section_title:
   :noindex:

   MS²PIP\: MS² Peak Intensity Prediction

   :homepage: http://compomics.github.io/projects/ms2pip_c
   :developer docs: https://github.com/compomics/ms2pip_c
   :license: APACHE / Apache-2.0
   :recipe: /`ms2pip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2pip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2pip/meta.yaml>`_

   


.. conda:package:: ms2pip

   |downloads_ms2pip| |docker_ms2pip|

   :versions:
      
      

      ``3.11.0-0``,  ``3.10.0-0``,  ``3.9.0-0``,  ``3.6.3-1``,  ``3.6.3-0``,  ``3.6.2-0``

      

   
   :depends biopython: ``>=1.74``
   :depends click: ``>=7``
   :depends libgcc-ng: ``>=12``
   :depends lxml: ``>=4``
   :depends matplotlib-base: ``>=3.0``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: ``>=1.0``
   :depends pydantic: ``>=1.10``
   :depends pytables: ``>=3.4``
   :depends pyteomics: ``>=3.5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rich: ``>=13``
   :depends spectrum_utils: ``>=0.3.5``
   :depends tomlkit: ``>=0.5``
   :depends tqdm: ``>=4``
   :depends xgboost: ``>=1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ms2pip

   and update with::

      conda update ms2pip

   or use the docker container::

      docker pull quay.io/biocontainers/ms2pip:<tag>

   (see `ms2pip/tags`_ for valid values for ``<tag>``)


.. |downloads_ms2pip| image:: https://img.shields.io/conda/dn/bioconda/ms2pip.svg?style=flat
   :target: https://anaconda.org/bioconda/ms2pip
   :alt:   (downloads)
.. |docker_ms2pip| image:: https://quay.io/repository/biocontainers/ms2pip/status
   :target: https://quay.io/repository/biocontainers/ms2pip
.. _`ms2pip/tags`: https://quay.io/repository/biocontainers/ms2pip?tab=tags


.. raw:: html

    <script>
        var package = "ms2pip";
        var versions = ["3.11.0","3.10.0","3.9.0","3.6.3","3.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms2pip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms2pip/README.html