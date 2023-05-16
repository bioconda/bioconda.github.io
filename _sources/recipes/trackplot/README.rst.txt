:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trackplot'
.. highlight: bash

trackplot
=========

.. conda:recipe:: trackplot
   :replaces_section_title:
   :noindex:

   The trackplot is a tool for visualizing various next\-generation sequencing \(NGS\) data\, including DNA\-seq\, RNA\-seq\, single\-cell RNA\-seq and full\-length sequencing datasets.

   :homepage: https://github.com/ygidtu/trackplot
   :documentation: https://trackplot.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`trackplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackplot/meta.yaml>`_

   


.. conda:package:: trackplot

   |downloads_trackplot| |docker_trackplot|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.1-0``

      

   
   :depends adjusttext: ``>=0.7.3``
   :depends cairocffi: ``>=1.4.0``
   :depends click: 
   :depends click-option-group: 
   :depends filetype: ``>=1.2.0``
   :depends hicmatrix: 
   :depends loguru: 
   :depends matplotlib-base: ``>=3.6.3``
   :depends numpy: ``>=1.24.1``
   :depends pandas: ``>=1.5.3``
   :depends pybigwig: ``>=0.3.18``
   :depends pysam: ``>=0.20.0``
   :depends python: 
   :depends requests: 
   :depends scipy: ``>=1.10.0``
   :depends seaborn-base: ``>=0.12.2``
   :depends wheel: 
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trackplot

   and update with::

      conda update trackplot

   or use the docker container::

      docker pull quay.io/biocontainers/trackplot:<tag>

   (see `trackplot/tags`_ for valid values for ``<tag>``)


.. |downloads_trackplot| image:: https://img.shields.io/conda/dn/bioconda/trackplot.svg?style=flat
   :target: https://anaconda.org/bioconda/trackplot
   :alt:   (downloads)
.. |docker_trackplot| image:: https://quay.io/repository/biocontainers/trackplot/status
   :target: https://quay.io/repository/biocontainers/trackplot
.. _`trackplot/tags`: https://quay.io/repository/biocontainers/trackplot?tab=tags


.. raw:: html

    <script>
        var package = "trackplot";
        var versions = ["0.2.4","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trackplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trackplot/README.html