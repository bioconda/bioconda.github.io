:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sensv'
.. highlight: bash

sensv
=====

.. conda:recipe:: sensv
   :replaces_section_title:
   :noindex:

   SENSV

   :homepage: https://github.com/HKU-BAL/SENSV
   :license: AGPLv3
   :recipe: /`sensv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sensv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sensv/meta.yaml>`_

   


.. conda:package:: sensv

   |downloads_sensv| |docker_sensv|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``v1.0.1-0``

      

   
   :depends grabix: ``0.1.8.*``
   :depends htslib: ``1.10.2.*``
   :depends intervaltree: ``3.0.2.*``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends minimap2: ``2.17.*``
   :depends pandas: ``1.0.1.*``
   :depends pigz: ``2.3.4.*``
   :depends pyfaidx: ``0.5.8.*``
   :depends pypy3.6: ``7.3.0.*``
   :depends pysam: ``0.15.3.*``
   :depends samtools: ``1.7.*``
   :depends scipy: ``1.4.1.*``
   :depends survivor: ``1.0.6.*``
   :depends vcflib: ``1.0.0.*``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sensv

   and update with::

      conda update sensv

   or use the docker container::

      docker pull quay.io/biocontainers/sensv:<tag>

   (see `sensv/tags`_ for valid values for ``<tag>``)


.. |downloads_sensv| image:: https://img.shields.io/conda/dn/bioconda/sensv.svg?style=flat
   :target: https://anaconda.org/bioconda/sensv
   :alt:   (downloads)
.. |docker_sensv| image:: https://quay.io/repository/biocontainers/sensv/status
   :target: https://quay.io/repository/biocontainers/sensv
.. _`sensv/tags`: https://quay.io/repository/biocontainers/sensv?tab=tags


.. raw:: html

    <script>
        var package = "sensv";
        var versions = ["1.0.4","1.0.4","1.0.2","1.0.2","v1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sensv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sensv/README.html