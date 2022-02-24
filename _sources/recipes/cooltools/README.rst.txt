:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cooltools'
.. highlight: bash

cooltools
=========

.. conda:recipe:: cooltools
   :replaces_section_title:
   :noindex:

   Analysis tools for genomic interaction data stored in .cool format

   :homepage: https://github.com/open2c/cooltools
   :documentation: https://cooltools.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`cooltools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooltools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooltools/meta.yaml>`_

   


.. conda:package:: cooltools

   |downloads_cooltools| |docker_cooltools|

   :versions:
      
      

      ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``

      

   
   :depends bioframe: ``>=0.3.1``
   :depends click: ``>=7``
   :depends cooler: ``>=0.8.5``
   :depends cytoolz: ``<0.11``
   :depends joblib: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: ``>=1.3``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends scikit-image: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cooltools

   and update with::

      conda update cooltools

   or use the docker container::

      docker pull quay.io/biocontainers/cooltools:<tag>

   (see `cooltools/tags`_ for valid values for ``<tag>``)


.. |downloads_cooltools| image:: https://img.shields.io/conda/dn/bioconda/cooltools.svg?style=flat
   :target: https://anaconda.org/bioconda/cooltools
   :alt:   (downloads)
.. |docker_cooltools| image:: https://quay.io/repository/biocontainers/cooltools/status
   :target: https://quay.io/repository/biocontainers/cooltools
.. _`cooltools/tags`: https://quay.io/repository/biocontainers/cooltools?tab=tags


.. raw:: html

    <script>
        var package = "cooltools";
        var versions = ["0.5.0","0.5.0","0.4.0","0.3.2","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cooltools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cooltools/README.html