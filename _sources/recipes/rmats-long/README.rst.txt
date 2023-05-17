:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats-long'
.. highlight: bash

rmats-long
==========

.. conda:recipe:: rmats-long
   :replaces_section_title:
   :noindex:

   rMATS\-long is an integrated computational workflow for long\-read RNA\-seq data

   :homepage: https://github.com/Xinglab/rMATS-long
   :license: Free for non-commercial use, see LICENSE file
   :recipe: /`rmats-long <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats-long>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats-long/meta.yaml>`_

   


.. conda:package:: rmats-long

   |downloads_rmats-long| |docker_rmats-long|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: 
   :depends bioconductor-drimseq: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends r-base: 
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-stringi: ``>=1.7.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmats-long

   and update with::

      conda update rmats-long

   or use the docker container::

      docker pull quay.io/biocontainers/rmats-long:<tag>

   (see `rmats-long/tags`_ for valid values for ``<tag>``)


.. |downloads_rmats-long| image:: https://img.shields.io/conda/dn/bioconda/rmats-long.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats-long
   :alt:   (downloads)
.. |docker_rmats-long| image:: https://quay.io/repository/biocontainers/rmats-long/status
   :target: https://quay.io/repository/biocontainers/rmats-long
.. _`rmats-long/tags`: https://quay.io/repository/biocontainers/rmats-long?tab=tags


.. raw:: html

    <script>
        var package = "rmats-long";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats-long/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats-long/README.html