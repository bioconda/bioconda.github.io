:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainflye'
.. highlight: bash

strainflye
==========

.. conda:recipe:: strainflye
   :replaces_section_title:
   :noindex:

   Pipeline for analyzing rare mutations in metagenomes assembled using long and accurate reads

   :homepage: https://github.com/fedarko/strainFlye
   :license: BSD / BSD-3-Clause
   :recipe: /`strainflye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainflye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainflye/meta.yaml>`_

   


.. conda:package:: strainflye

   |downloads_strainflye| |docker_strainflye|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends bcftools: ``>=1.7,<1.10``
   :depends click: ``>=8.0``
   :depends htslib: ``>=1.9,<1.10.0a0``
   :depends minimap2: ``>=2.10``
   :depends networkx: 
   :depends numpy: 
   :depends pandas: ``>=1.0``
   :depends prodigal: 
   :depends pysam: ``<0.16``
   :depends pysamstats: 
   :depends python: ``>=3.6,<3.8``
   :depends samtools: ``>=1.7,<1.10``
   :depends scikit-bio: 
   :depends scipy: ``>=1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strainflye

   and update with::

      conda update strainflye

   or use the docker container::

      docker pull quay.io/biocontainers/strainflye:<tag>

   (see `strainflye/tags`_ for valid values for ``<tag>``)


.. |downloads_strainflye| image:: https://img.shields.io/conda/dn/bioconda/strainflye.svg?style=flat
   :target: https://anaconda.org/bioconda/strainflye
   :alt:   (downloads)
.. |docker_strainflye| image:: https://quay.io/repository/biocontainers/strainflye/status
   :target: https://quay.io/repository/biocontainers/strainflye
.. _`strainflye/tags`: https://quay.io/repository/biocontainers/strainflye?tab=tags


.. raw:: html

    <script>
        var package = "strainflye";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainflye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainflye/README.html