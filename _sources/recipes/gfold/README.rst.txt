:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfold'
.. highlight: bash

gfold
=====

.. conda:recipe:: gfold
   :replaces_section_title:
   :noindex:

   Find differentially expressed genes from RNA\-seq data with few replicates using generalized fold changes.

   :homepage: http://compbio.tongji.edu.cn/~fengjx/GFOLD/gfold.html
   :license: MIT
   :recipe: /`gfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfold/meta.yaml>`_

   


.. conda:package:: gfold

   |downloads_gfold| |docker_gfold|

   :versions:
      
      

      ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends gsl: ``2.2*``
   :depends libgcc: 
   :depends openblas: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gfold

   and update with::

      conda update gfold

   or use the docker container::

      docker pull quay.io/biocontainers/gfold:<tag>

   (see `gfold/tags`_ for valid values for ``<tag>``)


.. |downloads_gfold| image:: https://img.shields.io/conda/dn/bioconda/gfold.svg?style=flat
   :target: https://anaconda.org/bioconda/gfold
   :alt:   (downloads)
.. |docker_gfold| image:: https://quay.io/repository/biocontainers/gfold/status
   :target: https://quay.io/repository/biocontainers/gfold
.. _`gfold/tags`: https://quay.io/repository/biocontainers/gfold?tab=tags


.. raw:: html

    <script>
        var package = "gfold";
        var versions = ["1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfold/README.html