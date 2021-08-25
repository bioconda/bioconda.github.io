:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quasildr'
.. highlight: bash

quasildr
========

.. conda:recipe:: quasildr
   :replaces_section_title:
   :noindex:

   Quasilinear data representations for single\-cell omics data analysis.

   :homepage: https://github.com/jzthree/quasildr
   :license: BSD 3-clause clear
   :recipe: /`quasildr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quasildr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quasildr/meta.yaml>`_

   


.. conda:package:: quasildr

   |downloads_quasildr| |docker_quasildr|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends docopt: 
   :depends multiprocess: 
   :depends nmslib: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends plotnine: 
   :depends pynndescent: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quasildr

   and update with::

      conda update quasildr

   or use the docker container::

      docker pull quay.io/biocontainers/quasildr:<tag>

   (see `quasildr/tags`_ for valid values for ``<tag>``)


.. |downloads_quasildr| image:: https://img.shields.io/conda/dn/bioconda/quasildr.svg?style=flat
   :target: https://anaconda.org/bioconda/quasildr
   :alt:   (downloads)
.. |docker_quasildr| image:: https://quay.io/repository/biocontainers/quasildr/status
   :target: https://quay.io/repository/biocontainers/quasildr
.. _`quasildr/tags`: https://quay.io/repository/biocontainers/quasildr?tab=tags


.. raw:: html

    <script>
        var package = "quasildr";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quasildr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quasildr/README.html