:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomonsv'
.. highlight: bash

nanomonsv
=========

.. conda:recipe:: nanomonsv
   :replaces_section_title:
   :noindex:

   Python tools for detecting structural variation from nanopore sequence data

   :homepage: https://github.com/friend1ws/nanomonsv
   :license: GPL-3.0
   :recipe: /`nanomonsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomonsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomonsv/meta.yaml>`_

   


.. conda:package:: nanomonsv

   |downloads_nanomonsv| |docker_nanomonsv|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends bedtools: ``2.30.0.*``
   :depends bwa: ``0.7.17.*``
   :depends htslib: ``1.15.*``
   :depends mafft: ``7.407.*``
   :depends minimap2: ``2.24.*``
   :depends numpy: ``1.23.0.*``
   :depends parasail-python: ``1.2.4.*``
   :depends pysam: ``0.19.1.*``
   :depends python: ``>=3.6``
   :depends racon: ``1.4.3.*``
   :depends repeatmasker: ``4.1.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanomonsv

   and update with::

      conda update nanomonsv

   or use the docker container::

      docker pull quay.io/biocontainers/nanomonsv:<tag>

   (see `nanomonsv/tags`_ for valid values for ``<tag>``)


.. |downloads_nanomonsv| image:: https://img.shields.io/conda/dn/bioconda/nanomonsv.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomonsv
   :alt:   (downloads)
.. |docker_nanomonsv| image:: https://quay.io/repository/biocontainers/nanomonsv/status
   :target: https://quay.io/repository/biocontainers/nanomonsv
.. _`nanomonsv/tags`: https://quay.io/repository/biocontainers/nanomonsv?tab=tags


.. raw:: html

    <script>
        var package = "nanomonsv";
        var versions = ["0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomonsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomonsv/README.html