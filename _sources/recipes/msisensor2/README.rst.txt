:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor2'
.. highlight: bash

msisensor2
==========

.. conda:recipe:: msisensor2
   :replaces_section_title:
   :noindex:

   MSIsensor2 is a novel algorithm based machine learning\, featuring a large upgrade in the microsatellite instability \(MSI\) detection for tumor only sequencing data\, including Cell\-Free DNA \(cfDNA\)\, Formalin\-Fixed Paraffin\-Embedded\(FFPE\) and other sample types.

   :homepage: https://github.com/niu-lab/msisensor2
   :license: GPL / GPL3
   :recipe: /`msisensor2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor2/meta.yaml>`_

   


.. conda:package:: msisensor2

   |downloads_msisensor2| |docker_msisensor2|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libgomp: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msisensor2

   and update with::

      conda update msisensor2

   or use the docker container::

      docker pull quay.io/biocontainers/msisensor2:<tag>

   (see `msisensor2/tags`_ for valid values for ``<tag>``)


.. |downloads_msisensor2| image:: https://img.shields.io/conda/dn/bioconda/msisensor2.svg?style=flat
   :target: https://anaconda.org/bioconda/msisensor2
   :alt:   (downloads)
.. |docker_msisensor2| image:: https://quay.io/repository/biocontainers/msisensor2/status
   :target: https://quay.io/repository/biocontainers/msisensor2
.. _`msisensor2/tags`: https://quay.io/repository/biocontainers/msisensor2?tab=tags


.. raw:: html

    <script>
        var package = "msisensor2";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor2/README.html