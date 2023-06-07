:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goldrush'
.. highlight: bash

goldrush
========

.. conda:recipe:: goldrush
   :replaces_section_title:
   :noindex:

   Linear\-time de novo long read assembler\, from the Bioinformatics Technology Lab

   :homepage: https://github.com/bcgsc/goldrush
   :license: GPL-3.0
   :recipe: /`goldrush <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goldrush>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goldrush/meta.yaml>`_

   


.. conda:package:: goldrush

   |downloads_goldrush| |docker_goldrush|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends btllib: 
   :depends gperftools: 
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends make: 
   :depends minimap2: 
   :depends ntlink: ``>=1.3.0``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends tigmint: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install goldrush

   and update with::

      conda update goldrush

   or use the docker container::

      docker pull quay.io/biocontainers/goldrush:<tag>

   (see `goldrush/tags`_ for valid values for ``<tag>``)


.. |downloads_goldrush| image:: https://img.shields.io/conda/dn/bioconda/goldrush.svg?style=flat
   :target: https://anaconda.org/bioconda/goldrush
   :alt:   (downloads)
.. |docker_goldrush| image:: https://quay.io/repository/biocontainers/goldrush/status
   :target: https://quay.io/repository/biocontainers/goldrush
.. _`goldrush/tags`: https://quay.io/repository/biocontainers/goldrush?tab=tags


.. raw:: html

    <script>
        var package = "goldrush";
        var versions = ["1.0.3","1.0.3","1.0.2","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goldrush/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goldrush/README.html