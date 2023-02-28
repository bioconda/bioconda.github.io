:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phertilizer'
.. highlight: bash

phertilizer
===========

.. conda:recipe:: phertilizer
   :replaces_section_title:
   :noindex:

   Phertilizer is a method to grow a clonal tree from ultra\-low coverage single\-cell DNA sequenced data

   :homepage: https://github.com/elkebir-group/phertilizer
   :license: BSD-3
   :recipe: /`phertilizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phertilizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phertilizer/meta.yaml>`_

   


.. conda:package:: phertilizer

   |downloads_phertilizer| |docker_phertilizer|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends networkx: 
   :depends numba: ``>=0.54,<0.55``
   :depends numpy: 
   :depends pandas: 
   :depends pygraphviz: 
   :depends python: ``>=3.7``
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phertilizer

   and update with::

      conda update phertilizer

   or use the docker container::

      docker pull quay.io/biocontainers/phertilizer:<tag>

   (see `phertilizer/tags`_ for valid values for ``<tag>``)


.. |downloads_phertilizer| image:: https://img.shields.io/conda/dn/bioconda/phertilizer.svg?style=flat
   :target: https://anaconda.org/bioconda/phertilizer
   :alt:   (downloads)
.. |docker_phertilizer| image:: https://quay.io/repository/biocontainers/phertilizer/status
   :target: https://quay.io/repository/biocontainers/phertilizer
.. _`phertilizer/tags`: https://quay.io/repository/biocontainers/phertilizer?tab=tags


.. raw:: html

    <script>
        var package = "phertilizer";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phertilizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phertilizer/README.html