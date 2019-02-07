.. title:: Package Recipe 'bioconductor-pcxn'
.. highlight: bash


bioconductor-pcxn
=================

.. conda:recipe:: bioconductor-pcxn
   :replaces_section_title:

   Discover the correlated pathways\/gene sets of a single pathway\/gene set or discover correlation relationships among multiple pathways\/gene sets. Draw a heatmap or create a network of your query and extract members of each pathway\/gene set found in the available collections \(MSigDB H hallmark\, MSigDB C2 Canonical pathways\, MSigDB C5 GO BP and Pathprint\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pcxn.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pcxn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxn/meta.yaml>`_

   


.. conda:package:: bioconductor-pcxn

   |downloads_bioconductor-pcxn| |docker_bioconductor-pcxn|

   :versions: 2.4.0

   :depends: :conda:package:`bioconductor-pcxndata` >=2.4.0,<2.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-pheatmap`  

   :required~by: |required_by_bioconductor-pcxn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcxn

   and update with::

      conda update bioconductor-pcxn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pcxn


.. |required_by_bioconductor-pcxn| conda:required_by:: bioconductor-pcxn
.. |downloads_bioconductor-pcxn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcxn.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pcxn| image:: https://quay.io/repository/biocontainers/bioconductor-pcxn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcxn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcxn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcxn/README.html

