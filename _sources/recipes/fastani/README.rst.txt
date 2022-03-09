:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastani'
.. highlight: bash

fastani
=======

.. conda:recipe:: fastani
   :replaces_section_title:
   :noindex:

   FastANI is developed for fast alignment\-free computation of whole\-genome Average Nucleotide Identity \(ANI\).

   :homepage: https://github.com/ParBLiSS/FastANI
   :license: Apache / Apache-2.0
   :recipe: /`fastani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastani/meta.yaml>`_

   


.. conda:package:: fastani

   |downloads_fastani| |docker_fastani|

   :versions:
      
      

      ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastani

   and update with::

      conda update fastani

   or use the docker container::

      docker pull quay.io/biocontainers/fastani:<tag>

   (see `fastani/tags`_ for valid values for ``<tag>``)


.. |downloads_fastani| image:: https://img.shields.io/conda/dn/bioconda/fastani.svg?style=flat
   :target: https://anaconda.org/bioconda/fastani
   :alt:   (downloads)
.. |docker_fastani| image:: https://quay.io/repository/biocontainers/fastani/status
   :target: https://quay.io/repository/biocontainers/fastani
.. _`fastani/tags`: https://quay.io/repository/biocontainers/fastani?tab=tags


.. raw:: html

    <script>
        var package = "fastani";
        var versions = ["1.33","1.32","1.31","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastani/README.html