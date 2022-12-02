:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smncopynumbercaller'
.. highlight: bash

smncopynumbercaller
===================

.. conda:recipe:: smncopynumbercaller
   :replaces_section_title:
   :noindex:

   Call copy number of SMN1\, SMN2\, and SMN2Δ7–8 from a BAM file.

   :homepage: https://github.com/Illumina/SMNCopyNumberCaller
   :license: Apache License 2.0
   :recipe: /`smncopynumbercaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smncopynumbercaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smncopynumbercaller/meta.yaml>`_

   


.. conda:package:: smncopynumbercaller

   |downloads_smncopynumbercaller| |docker_smncopynumbercaller|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends numpy: ``>=1.16``
   :depends pysam: ``>=0.15.3``
   :depends python: 
   :depends reportlab: 
   :depends scipy: ``>=1.2``
   :depends statsmodels: ``>=0.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smncopynumbercaller

   and update with::

      conda update smncopynumbercaller

   or use the docker container::

      docker pull quay.io/biocontainers/smncopynumbercaller:<tag>

   (see `smncopynumbercaller/tags`_ for valid values for ``<tag>``)


.. |downloads_smncopynumbercaller| image:: https://img.shields.io/conda/dn/bioconda/smncopynumbercaller.svg?style=flat
   :target: https://anaconda.org/bioconda/smncopynumbercaller
   :alt:   (downloads)
.. |docker_smncopynumbercaller| image:: https://quay.io/repository/biocontainers/smncopynumbercaller/status
   :target: https://quay.io/repository/biocontainers/smncopynumbercaller
.. _`smncopynumbercaller/tags`: https://quay.io/repository/biocontainers/smncopynumbercaller?tab=tags


.. raw:: html

    <script>
        var package = "smncopynumbercaller";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smncopynumbercaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smncopynumbercaller/README.html