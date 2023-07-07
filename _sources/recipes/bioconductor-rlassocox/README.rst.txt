:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlassocox'
.. highlight: bash

bioconductor-rlassocox
======================

.. conda:recipe:: bioconductor-rlassocox
   :replaces_section_title:
   :noindex:

   A reweighted Lasso\-Cox by integrating gene interaction information

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RLassoCox.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rlassocox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlassocox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlassocox/meta.yaml>`_

   RLassoCox is a package that implements the RLasso\-Cox model proposed by Wei Liu. The RLasso\-Cox model integrates gene interaction information into the Lasso\-Cox model for accurate survival prediction and survival biomarker discovery. It is based on the hypothesis that topologically important genes in the gene interaction network tend to have stable expression changes. The RLasso\-Cox model uses random walk to evaluate the topological weight of genes\, and then highlights topologically important genes to improve the generalization ability of the Lasso\-Cox model. The RLasso\-Cox model has the advantage of identifying small gene sets with high prognostic performance on independent datasets\, which may play an important role in identifying robust survival biomarkers for various cancer types.


.. conda:package:: bioconductor-rlassocox

   |downloads_bioconductor-rlassocox| |docker_bioconductor-rlassocox|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-glmnet: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rlassocox

   and update with::

      conda update bioconductor-rlassocox

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rlassocox:<tag>

   (see `bioconductor-rlassocox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rlassocox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlassocox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlassocox
   :alt:   (downloads)
.. |docker_bioconductor-rlassocox| image:: https://quay.io/repository/biocontainers/bioconductor-rlassocox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlassocox
.. _`bioconductor-rlassocox/tags`: https://quay.io/repository/biocontainers/bioconductor-rlassocox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rlassocox";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlassocox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlassocox/README.html