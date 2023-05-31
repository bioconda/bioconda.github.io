:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haproh'
.. highlight: bash

haproh
======

.. conda:recipe:: haproh
   :replaces_section_title:
   :noindex:

   Identify runs of homozygosity \(hapROH\) and contamination \(hapCon\) in low coverage ancient human DNA data \(1240K SNPs\) using modern reference panel

   :homepage: https://github.com/hringbauer/hapROH
   :license: GPL-3.0
   :recipe: /`haproh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haproh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haproh/meta.yaml>`_

   


.. conda:package:: haproh

   |downloads_haproh| |docker_haproh|

   :versions:
      
      

      ``0.64-1``,  ``0.64-0``,  ``0.63-0``,  ``0.62-0``,  ``0.61-0``,  ``0.60-0``,  ``0.53-0``

      

   
   :depends cython: 
   :depends h5py: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numdifftools: 
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haproh

   and update with::

      conda update haproh

   or use the docker container::

      docker pull quay.io/biocontainers/haproh:<tag>

   (see `haproh/tags`_ for valid values for ``<tag>``)


.. |downloads_haproh| image:: https://img.shields.io/conda/dn/bioconda/haproh.svg?style=flat
   :target: https://anaconda.org/bioconda/haproh
   :alt:   (downloads)
.. |docker_haproh| image:: https://quay.io/repository/biocontainers/haproh/status
   :target: https://quay.io/repository/biocontainers/haproh
.. _`haproh/tags`: https://quay.io/repository/biocontainers/haproh?tab=tags


.. raw:: html

    <script>
        var package = "haproh";
        var versions = ["0.64","0.64","0.63","0.62","0.61"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haproh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haproh/README.html