:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydeseq2'
.. highlight: bash

pydeseq2
========

.. conda:recipe:: pydeseq2
   :replaces_section_title:
   :noindex:

   A python implementation of DESeq2.

   :homepage: https://github.com/owkin/PyDESeq2
   :license: MIT
   :recipe: /`pydeseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydeseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydeseq2/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.12.14.520412`

   


.. conda:package:: pydeseq2

   |downloads_pydeseq2| |docker_pydeseq2|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``

      

   
   :depends anndata: ``>=0.8.0``
   :depends ipython: 
   :depends jupyter: 
   :depends matplotlib-base: ``>=3.6.2``
   :depends numpy: ``>=1.23.0``
   :depends pandas: ``>=1.4.0``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=1.1.0``
   :depends scipy: ``>=1.8.0``
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydeseq2

   and update with::

      conda update pydeseq2

   or use the docker container::

      docker pull quay.io/biocontainers/pydeseq2:<tag>

   (see `pydeseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_pydeseq2| image:: https://img.shields.io/conda/dn/bioconda/pydeseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/pydeseq2
   :alt:   (downloads)
.. |docker_pydeseq2| image:: https://quay.io/repository/biocontainers/pydeseq2/status
   :target: https://quay.io/repository/biocontainers/pydeseq2
.. _`pydeseq2/tags`: https://quay.io/repository/biocontainers/pydeseq2?tab=tags


.. raw:: html

    <script>
        var package = "pydeseq2";
        var versions = ["0.4.0","0.3.6","0.3.5","0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydeseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydeseq2/README.html