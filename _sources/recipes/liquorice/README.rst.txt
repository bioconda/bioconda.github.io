:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liquorice'
.. highlight: bash

liquorice
=========

.. conda:recipe:: liquorice
   :replaces_section_title:
   :noindex:

   A tool for bias correction and quantification of changes in coverage around regions of interest in cfDNA WGS datasets

   :homepage: https://github.com/epigen/LIQUORICE
   :license: GPL / GPL-3.0
   :recipe: /`liquorice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liquorice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liquorice/meta.yaml>`_

   See https\:\/\/liquorice.readthedocs.io for more information.


.. conda:package:: liquorice

   |downloads_liquorice| |docker_liquorice|

   :versions:
      
      

      ``0.5.6-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``

      

   
   :depends biopython: ``1.79``
   :depends deeptools: ``3.5.1``
   :depends joblib: ``1.0.1``
   :depends lmfit: ``1.0.2``
   :depends matplotlib-base: ``3.1.1``
   :depends modin: ``0.8.2``
   :depends numpy: ``1.21.2``
   :depends pandas: ``1.1.4``
   :depends parallel: 
   :depends pybedtools: ``0.8.2``
   :depends pybigwig: ``0.3.18``
   :depends pysam: ``0.16.0.1``
   :depends python: ``>=3.7.9``
   :depends scikit-learn: ``0.24.2``
   :depends scipy: ``1.7.1``
   :depends seaborn: ``0.11.2``
   :depends swifter: ``1.0.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install liquorice

   and update with::

      conda update liquorice

   or use the docker container::

      docker pull quay.io/biocontainers/liquorice:<tag>

   (see `liquorice/tags`_ for valid values for ``<tag>``)


.. |downloads_liquorice| image:: https://img.shields.io/conda/dn/bioconda/liquorice.svg?style=flat
   :target: https://anaconda.org/bioconda/liquorice
   :alt:   (downloads)
.. |docker_liquorice| image:: https://quay.io/repository/biocontainers/liquorice/status
   :target: https://quay.io/repository/biocontainers/liquorice
.. _`liquorice/tags`: https://quay.io/repository/biocontainers/liquorice?tab=tags


.. raw:: html

    <script>
        var package = "liquorice";
        var versions = ["0.5.6","0.5.5","0.5.5","0.5.4","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liquorice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liquorice/README.html