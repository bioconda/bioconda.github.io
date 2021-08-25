:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phate'
.. highlight: bash

phate
=====

.. conda:recipe:: phate
   :replaces_section_title:
   :noindex:

   PHATE \(Potential of Heat\-diffusion for Affinity\-based Transition Embedding\) is a tool for visualizing high dimensional data.

   :homepage: https://github.com/KrishnaswamyLab/PHATE
   :documentation: https://phate.readthedocs.io
   
   :license: GPL / GPL-2.0
   :recipe: /`phate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phate/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-019-0336-3`

   


.. conda:package:: phate

   |downloads_phate| |docker_phate|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``0.4.5-0``

      

   
   :depends deprecated: 
   :depends future: 
   :depends graphtools: ``>=1.3.1``
   :depends matplotlib-base: ``>=3.0``
   :depends numpy: ``>=1.16.0``
   :depends python: ``>=3.5``
   :depends s_gd2: ``>=1.5``
   :depends scikit-learn: ``>=0.20.0``
   :depends scipy: ``>=1.1.0``
   :depends scprep: ``>=0.11.1``
   :depends tasklogger: ``>=1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phate

   and update with::

      conda update phate

   or use the docker container::

      docker pull quay.io/biocontainers/phate:<tag>

   (see `phate/tags`_ for valid values for ``<tag>``)


.. |downloads_phate| image:: https://img.shields.io/conda/dn/bioconda/phate.svg?style=flat
   :target: https://anaconda.org/bioconda/phate
   :alt:   (downloads)
.. |docker_phate| image:: https://quay.io/repository/biocontainers/phate/status
   :target: https://quay.io/repository/biocontainers/phate
.. _`phate/tags`: https://quay.io/repository/biocontainers/phate?tab=tags


.. raw:: html

    <script>
        var package = "phate";
        var versions = ["1.0.7","1.0.4","1.0.3","1.0.2","0.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phate/README.html