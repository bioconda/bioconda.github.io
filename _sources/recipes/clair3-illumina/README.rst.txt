:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair3-illumina'
.. highlight: bash

clair3-illumina
===============

.. conda:recipe:: clair3-illumina
   :replaces_section_title:
   :noindex:

   Clair3 with libraries to support variant calling using Illumina short\-reads. Version in sync with Clair3.

   :homepage: https://github.com/HKU-BAL/Clair3
   :license: BSD-3-Clause
   :recipe: /`clair3-illumina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-illumina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-illumina/meta.yaml>`_

   


.. conda:package:: clair3-illumina

   |downloads_clair3-illumina| |docker_clair3-illumina|

   :versions:
      
      

      ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends clair3: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clair3-illumina

   and update with::

      conda update clair3-illumina

   or use the docker container::

      docker pull quay.io/biocontainers/clair3-illumina:<tag>

   (see `clair3-illumina/tags`_ for valid values for ``<tag>``)


.. |downloads_clair3-illumina| image:: https://img.shields.io/conda/dn/bioconda/clair3-illumina.svg?style=flat
   :target: https://anaconda.org/bioconda/clair3-illumina
   :alt:   (downloads)
.. |docker_clair3-illumina| image:: https://quay.io/repository/biocontainers/clair3-illumina/status
   :target: https://quay.io/repository/biocontainers/clair3-illumina
.. _`clair3-illumina/tags`: https://quay.io/repository/biocontainers/clair3-illumina?tab=tags


.. raw:: html

    <script>
        var package = "clair3-illumina";
        var versions = ["0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair3-illumina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair3-illumina/README.html