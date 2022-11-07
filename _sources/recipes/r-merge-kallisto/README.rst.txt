:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-merge-kallisto'
.. highlight: bash

r-merge-kallisto
================

.. conda:recipe:: r-merge-kallisto
   :replaces_section_title:
   :noindex:

   merge\_kallisto

   :homepage: https://github.com/zavolanlab/merge_kallisto
   :license: APACHE / Apache License 2.0
   :recipe: /`r-merge-kallisto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-merge-kallisto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-merge-kallisto/meta.yaml>`_

   


.. conda:package:: r-merge-kallisto

   |downloads_r-merge-kallisto| |docker_r-merge-kallisto|

   :versions:
      
      

      ``0.6-2``,  ``0.6-1``,  ``0.6-0``

      

   
   :depends bioconductor-rhdf5: 
   :depends bioconductor-rtracklayer: 
   :depends bioconductor-tximport: 
   :depends coreutils: 
   :depends r-base: 
   :depends r-optparse: 
   :depends r-rcpp: 
   :depends rsync: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-merge-kallisto

   and update with::

      conda update r-merge-kallisto

   or use the docker container::

      docker pull quay.io/biocontainers/r-merge-kallisto:<tag>

   (see `r-merge-kallisto/tags`_ for valid values for ``<tag>``)


.. |downloads_r-merge-kallisto| image:: https://img.shields.io/conda/dn/bioconda/r-merge-kallisto.svg?style=flat
   :target: https://anaconda.org/bioconda/r-merge-kallisto
   :alt:   (downloads)
.. |docker_r-merge-kallisto| image:: https://quay.io/repository/biocontainers/r-merge-kallisto/status
   :target: https://quay.io/repository/biocontainers/r-merge-kallisto
.. _`r-merge-kallisto/tags`: https://quay.io/repository/biocontainers/r-merge-kallisto?tab=tags


.. raw:: html

    <script>
        var package = "r-merge-kallisto";
        var versions = ["0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-merge-kallisto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-merge-kallisto/README.html