:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afplot'
.. highlight: bash

afplot
======

.. conda:recipe:: afplot
   :replaces_section_title:
   :noindex:

   Plot allele frequencies in VCF files

   :homepage: https://github.com/sndrtj/afplot
   :license: MIT / MIT
   :recipe: /`afplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afplot/meta.yaml>`_

   


.. conda:package:: afplot

   |downloads_afplot| |docker_afplot|

   :versions:
      
      

      ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends click: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends progressbar2: 
   :depends pysam: 
   :depends python: ``>=3.4``
   :depends pyvcf: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install afplot

   and update with::

      conda update afplot

   or use the docker container::

      docker pull quay.io/biocontainers/afplot:<tag>

   (see `afplot/tags`_ for valid values for ``<tag>``)


.. |downloads_afplot| image:: https://img.shields.io/conda/dn/bioconda/afplot.svg?style=flat
   :target: https://anaconda.org/bioconda/afplot
   :alt:   (downloads)
.. |docker_afplot| image:: https://quay.io/repository/biocontainers/afplot/status
   :target: https://quay.io/repository/biocontainers/afplot
.. _`afplot/tags`: https://quay.io/repository/biocontainers/afplot?tab=tags


.. raw:: html

    <script>
        var package = "afplot";
        var versions = ["0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afplot/README.html