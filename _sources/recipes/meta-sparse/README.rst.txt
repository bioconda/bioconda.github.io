:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meta-sparse'
.. highlight: bash

meta-sparse
===========

.. conda:recipe:: meta-sparse
   :replaces_section_title:
   :noindex:

   SPARSE indexes reference genomes in public databases into hierarchical clusters and uses it to predict origins of metagenomic reads.

   :homepage: https://github.com/zheminzhou/SPARSE/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`meta-sparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-sparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-sparse/meta.yaml>`_

   


.. conda:package:: meta-sparse

   |downloads_meta-sparse| |docker_meta-sparse|

   :versions:
      
      

      ``0.1.12-4``,  ``0.1.12-3``,  ``0.1.12-2``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends bowtie2: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends mash: 
   :depends msgpack-python: 
   :depends numpy: 
   :depends pandas: 
   :depends pycapnp: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meta-sparse

   and update with::

      conda update meta-sparse

   or use the docker container::

      docker pull quay.io/biocontainers/meta-sparse:<tag>

   (see `meta-sparse/tags`_ for valid values for ``<tag>``)


.. |downloads_meta-sparse| image:: https://img.shields.io/conda/dn/bioconda/meta-sparse.svg?style=flat
   :target: https://anaconda.org/bioconda/meta-sparse
   :alt:   (downloads)
.. |docker_meta-sparse| image:: https://quay.io/repository/biocontainers/meta-sparse/status
   :target: https://quay.io/repository/biocontainers/meta-sparse
.. _`meta-sparse/tags`: https://quay.io/repository/biocontainers/meta-sparse?tab=tags


.. raw:: html

    <script>
        var package = "meta-sparse";
        var versions = ["0.1.12","0.1.12","0.1.12","0.1.12","0.1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta-sparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta-sparse/README.html