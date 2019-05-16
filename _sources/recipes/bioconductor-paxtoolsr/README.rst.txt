:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-paxtoolsr'
.. highlight: bash

bioconductor-paxtoolsr
======================

.. conda:recipe:: bioconductor-paxtoolsr
   :replaces_section_title:

   The package provides a set of R functions for interacting with BioPAX OWL files using Paxtools and the querying Pathway Commons \(PC\) molecular interaction database that are hosted by the Computational Biology Center at Memorial Sloan\-Kettering Cancer Center \(MSKCC\). Pathway Commons databases include\: BIND\, BioGRID\, CORUM\, CTD\, DIP\, DrugBank\, HPRD\, HumanCyc\, IntAct\, KEGG\, MirTarBase\, Panther\, PhosphoSitePlus\, Reactome\, RECON\, TRANSFAC.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/paxtoolsr.html
   :license: LGPL-3
   :recipe: /`bioconductor-paxtoolsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paxtoolsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paxtoolsr/meta.yaml>`_

   


.. conda:package:: bioconductor-paxtoolsr

   |downloads_bioconductor-paxtoolsr| |docker_bioconductor-paxtoolsr|

   :versions: 1.18.0-0, 1.16.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-readr: 
   :depends r-rjava: >=0.9-8
   :depends r-rjson: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-paxtoolsr

   and update with::

      conda update bioconductor-paxtoolsr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-paxtoolsr:<tag>

   (see `bioconductor-paxtoolsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-paxtoolsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paxtoolsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-paxtoolsr
   :alt:   (downloads)
.. |docker_bioconductor-paxtoolsr| image:: https://quay.io/repository/biocontainers/bioconductor-paxtoolsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paxtoolsr
.. _`bioconductor-paxtoolsr/tags`: https://quay.io/repository/biocontainers/bioconductor-paxtoolsr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paxtoolsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paxtoolsr/README.html