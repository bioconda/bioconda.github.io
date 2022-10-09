:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogent3'
.. highlight: bash

cogent3
=======

.. conda:recipe:: cogent3
   :replaces_section_title:
   :noindex:

   COmparative GENomics Toolkit 3\: genomic sequence analysis within notebooks or on compute systems with 1000s of CPUs.

   :homepage: https://pypi.org/project/cogent3/
   :license: BSD-3-Clause
   :recipe: /`cogent3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent3/meta.yaml>`_

   


.. conda:package:: cogent3

   |downloads_cogent3| |docker_cogent3|

   :versions:
      
      

      ``2022.8.24a1-0``

      

   
   :depends chardet: 
   :depends numba: ``>0.48.0``
   :depends numpy: 
   :depends python: ``>=3``
   :depends scitrack: 
   :depends tinydb: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cogent3

   and update with::

      conda update cogent3

   or use the docker container::

      docker pull quay.io/biocontainers/cogent3:<tag>

   (see `cogent3/tags`_ for valid values for ``<tag>``)


.. |downloads_cogent3| image:: https://img.shields.io/conda/dn/bioconda/cogent3.svg?style=flat
   :target: https://anaconda.org/bioconda/cogent3
   :alt:   (downloads)
.. |docker_cogent3| image:: https://quay.io/repository/biocontainers/cogent3/status
   :target: https://quay.io/repository/biocontainers/cogent3
.. _`cogent3/tags`: https://quay.io/repository/biocontainers/cogent3?tab=tags


.. raw:: html

    <script>
        var package = "cogent3";
        var versions = ["2022.8.24a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogent3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogent3/README.html