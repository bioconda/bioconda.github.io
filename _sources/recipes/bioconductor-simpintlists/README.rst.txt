:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simpintlists'
.. highlight: bash

bioconductor-simpintlists
=========================

.. conda:recipe:: bioconductor-simpintlists
   :replaces_section_title:

   The package contains BioGRID interactions for arabidopsis\(thale cress\)\, c.elegans\, fruit fly\, human\, mouse\, yeast\( budding yeast \) and S.pombe \(fission yeast\) . Entrez ids\, official names and unique ids can be used to find proteins. The format of interactions are lists. For each gene\/protein\, there is an entry in the list with \"name\" containing name of the gene\/protein and \"interactors\" containing the list of genes\/proteins interacting with it.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/simpIntLists.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-simpintlists <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpintlists>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpintlists/meta.yaml>`_

   


.. conda:package:: bioconductor-simpintlists

   |downloads_bioconductor-simpintlists| |docker_bioconductor-simpintlists|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simpintlists

   and update with::

      conda update bioconductor-simpintlists

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-simpintlists:<tag>

   (see `bioconductor-simpintlists/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simpintlists| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simpintlists.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-simpintlists| image:: https://quay.io/repository/biocontainers/bioconductor-simpintlists/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simpintlists
.. _`bioconductor-simpintlists/tags`: https://quay.io/repository/biocontainers/bioconductor-simpintlists?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simpintlists/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simpintlists/README.html