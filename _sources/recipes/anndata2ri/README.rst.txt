:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anndata2ri'
.. highlight: bash

anndata2ri
==========

.. conda:recipe:: anndata2ri
   :replaces_section_title:
   :noindex:

   Convert between AnnData and SingleCellExperiment

   :homepage: https://github.com/theislab/anndata2ri
   :license: GPL-3
   :recipe: /`anndata2ri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anndata2ri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anndata2ri/meta.yaml>`_

   


.. conda:package:: anndata2ri

   |downloads_anndata2ri| |docker_anndata2ri|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends anndata: 
   :depends get_version: 
   :depends python: ``>=3.6``
   :depends rpy2: ``>=3.0.1``
   :depends tzlocal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anndata2ri

   and update with::

      conda update anndata2ri

   or use the docker container::

      docker pull quay.io/biocontainers/anndata2ri:<tag>

   (see `anndata2ri/tags`_ for valid values for ``<tag>``)


.. |downloads_anndata2ri| image:: https://img.shields.io/conda/dn/bioconda/anndata2ri.svg?style=flat
   :target: https://anaconda.org/bioconda/anndata2ri
   :alt:   (downloads)
.. |docker_anndata2ri| image:: https://quay.io/repository/biocontainers/anndata2ri/status
   :target: https://quay.io/repository/biocontainers/anndata2ri
.. _`anndata2ri/tags`: https://quay.io/repository/biocontainers/anndata2ri?tab=tags


.. raw:: html

    <script>
        var package = "anndata2ri";
        var versions = ["1.0.6","1.0.5","1.0.4","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anndata2ri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anndata2ri/README.html