:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transomics2cytoscape'
.. highlight: bash

bioconductor-transomics2cytoscape
=================================

.. conda:recipe:: bioconductor-transomics2cytoscape
   :replaces_section_title:
   :noindex:

   A tool set for 3D Trans\-Omic network visualization with Cytoscape

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/transomics2cytoscape.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-transomics2cytoscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transomics2cytoscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transomics2cytoscape/meta.yaml>`_

   transomics2cytoscape generates a file for 3D transomics visualization by providing input that specifies the IDs of multiple KEGG pathway layers\, their corresponding Z\-axis heights\, and an input that represents the edges between the pathway layers. The edges are used\, for example\, to describe the relationships between kinase on a pathway and enzyme on another pathway. This package automates creation of a transomics network as shown in the figure in Yugi.2014 \(https\:\/\/doi.org\/10.1016\/j.celrep.2014.07.021\) using Cytoscape automation \(https\:\/\/doi.org\/10.1186\/s13059\-019\-1758\-4\).


.. conda:package:: bioconductor-transomics2cytoscape

   |downloads_bioconductor-transomics2cytoscape| |docker_bioconductor-transomics2cytoscape|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-keggrest: ``>=1.30.0,<1.31.0``
   :depends bioconductor-rcy3: ``>=2.10.0,<2.11.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transomics2cytoscape

   and update with::

      conda update bioconductor-transomics2cytoscape

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transomics2cytoscape:<tag>

   (see `bioconductor-transomics2cytoscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transomics2cytoscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transomics2cytoscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transomics2cytoscape
   :alt:   (downloads)
.. |docker_bioconductor-transomics2cytoscape| image:: https://quay.io/repository/biocontainers/bioconductor-transomics2cytoscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transomics2cytoscape
.. _`bioconductor-transomics2cytoscape/tags`: https://quay.io/repository/biocontainers/bioconductor-transomics2cytoscape?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transomics2cytoscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transomics2cytoscape/README.html