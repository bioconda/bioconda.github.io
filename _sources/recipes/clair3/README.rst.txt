:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair3'
.. highlight: bash

clair3
======

.. conda:recipe:: clair3
   :replaces_section_title:
   :noindex:

   Clair3 is a small variant caller for long\-reads. Compare to PEPPER \(r0.4\)\, Clair3 \(v0.1\) shows a better SNP F1\-score with ≤30\-fold of ONT data \(precisionFDA Truth Challenge V2\)\, and a better Indel F1\-score\, while runs generally four times faster. Clair3 makes the best of both worlds of using pileup or full\-alignment as input for deep\-learning based long\-read small variant calling. Clair3 is simple and modular for easy deployment and integration.

   :homepage: https://github.com/HKU-BAL/Clair3
   :license: BSD-3-Clause
   :recipe: /`clair3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3/meta.yaml>`_

   


.. conda:package:: clair3

   |downloads_clair3| |docker_clair3|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4.2-0``,  ``0.1.4.1-0``,  ``0.1.4-0``

      

   
   :depends numpy: ``1.19.5.*``
   :depends parallel: ``20191122.*``
   :depends pigz: ``2.4.*``
   :depends pypy3.6: 
   :depends pytables: ``3.6.1.*``
   :depends python: ``3.6.10.*``
   :depends samtools: ``1.10.*``
   :depends tensorflow: ``2.2.0.*``
   :depends whatshap: ``1.0.*``
   :depends zstd: ``1.4.4.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clair3

   and update with::

      conda update clair3

   or use the docker container::

      docker pull quay.io/biocontainers/clair3:<tag>

   (see `clair3/tags`_ for valid values for ``<tag>``)


.. |downloads_clair3| image:: https://img.shields.io/conda/dn/bioconda/clair3.svg?style=flat
   :target: https://anaconda.org/bioconda/clair3
   :alt:   (downloads)
.. |docker_clair3| image:: https://quay.io/repository/biocontainers/clair3/status
   :target: https://quay.io/repository/biocontainers/clair3
.. _`clair3/tags`: https://quay.io/repository/biocontainers/clair3?tab=tags


.. raw:: html

    <script>
        var package = "clair3";
        var versions = ["0.1.9","0.1.8","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair3/README.html