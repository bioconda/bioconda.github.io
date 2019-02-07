.. title:: Package Recipe 'export2graphlan'
.. highlight: bash


export2graphlan
===============

.. conda:recipe:: export2graphlan
   :replaces_section_title:

   export2graphlan is a conversion software tool for producing both annotation and tree file for GraPhlAn. It automatically generate the input tree and the annotation file for GraPhlAn\, starting from the input\/output of MetaPhlAn\, LEfSe\, and HUMAnN. It supports also the biom file format. The annotation file will highlight specific sub\-trees\/clades automatically inferred from input file\(s\) provided. The two output file of export2graphlan should then be used with GraPhlAn.

   :homepage: https://bitbucket.org/CibioCM/export2graphlan/overview
   :license: MIT / MIT License
   :recipe: /`export2graphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/export2graphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/export2graphlan/meta.yaml>`_

   


.. conda:package:: export2graphlan

   |downloads_export2graphlan| |docker_export2graphlan|

   :versions: 0.20, 0.19

   :depends: :conda:package:`hclust2`  :conda:package:`libgcc`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`scipy`  

   :required~by: |required_by_export2graphlan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install export2graphlan

   and update with::

      conda update export2graphlan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/export2graphlan


.. |required_by_export2graphlan| conda:required_by:: export2graphlan
.. |downloads_export2graphlan| image:: https://img.shields.io/conda/dn/bioconda/export2graphlan.svg?style=flat
   :alt:   (downloads)
.. |docker_export2graphlan| image:: https://quay.io/repository/biocontainers/export2graphlan/status
   :target: https://quay.io/repository/biocontainers/export2graphlan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/export2graphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/export2graphlan/README.html

