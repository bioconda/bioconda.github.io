:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'truvari'
.. highlight: bash

truvari
=======

.. conda:recipe:: truvari
   :replaces_section_title:
   :noindex:

   Structural variant comparison tool for VCFs

   :homepage: https://github.com/ACEnglish/truvari
   :license: MIT
   :recipe: /`truvari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari/meta.yaml>`_

   


.. conda:package:: truvari

   |downloads_truvari| |docker_truvari|

   :versions:
      
      

      ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``0.1.2018.08.10-2``,  ``0.1.2018.08.10-1``,  ``0.1.2018.08.10-0``

      

   
   :depends bwapy: ``>=0.1.4``
   :depends intervaltree: ``>=3.0.2``
   :depends joblib: ``>=1.0.1``
   :depends numpy: ``>=1.21.2``
   :depends pandas: ``>=1.3.3``
   :depends progressbar2: ``>=3.41.0``
   :depends pysam: ``>=0.15.2``
   :depends pytabix: ``>=0.1``
   :depends python: ``>=3.6``
   :depends python-edlib: ``>=1.3.8.post2``
   :depends python-levenshtein: ``0.12.2``
   :depends rich: ``12.5.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install truvari

   and update with::

      conda update truvari

   or use the docker container::

      docker pull quay.io/biocontainers/truvari:<tag>

   (see `truvari/tags`_ for valid values for ``<tag>``)


.. |downloads_truvari| image:: https://img.shields.io/conda/dn/bioconda/truvari.svg?style=flat
   :target: https://anaconda.org/bioconda/truvari
   :alt:   (downloads)
.. |docker_truvari| image:: https://quay.io/repository/biocontainers/truvari/status
   :target: https://quay.io/repository/biocontainers/truvari
.. _`truvari/tags`: https://quay.io/repository/biocontainers/truvari?tab=tags


.. raw:: html

    <script>
        var package = "truvari";
        var versions = ["3.5.0","3.4.0","3.3.0","3.2.0","0.1.2018.08.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/truvari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/truvari/README.html