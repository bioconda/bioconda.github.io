:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probamconvert'
.. highlight: bash

probamconvert
=============

.. conda:recipe:: probamconvert
   :replaces_section_title:
   :noindex:

   proBAMconvert is a conversion tool to convert common peptide identification files \(mzIdentML\, pepXML\, mzTAB\) to the proBAM or proBED format

   :homepage: https://github.com/Biobix/proBAMconvert
   :license: Apache License
   :recipe: /`probamconvert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probamconvert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probamconvert/meta.yaml>`_

   


.. conda:package:: probamconvert

   |downloads_probamconvert| |docker_probamconvert|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.1-1``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioservices: 
   :depends cogent: 
   :depends icu: ``58.*``
   :depends lxml: 
   :depends matplotlib: 
   :depends mysql-python: 
   :depends numpy: 
   :depends pysam: ``>=0.9``
   :depends pyteomics: 
   :depends python: ``<3``
   :depends xz: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install probamconvert

   and update with::

      conda update probamconvert

   or use the docker container::

      docker pull quay.io/biocontainers/probamconvert:<tag>

   (see `probamconvert/tags`_ for valid values for ``<tag>``)


.. |downloads_probamconvert| image:: https://img.shields.io/conda/dn/bioconda/probamconvert.svg?style=flat
   :target: https://anaconda.org/bioconda/probamconvert
   :alt:   (downloads)
.. |docker_probamconvert| image:: https://quay.io/repository/biocontainers/probamconvert/status
   :target: https://quay.io/repository/biocontainers/probamconvert
.. _`probamconvert/tags`: https://quay.io/repository/biocontainers/probamconvert?tab=tags


.. raw:: html

    <script>
        var package = "probamconvert";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probamconvert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probamconvert/README.html