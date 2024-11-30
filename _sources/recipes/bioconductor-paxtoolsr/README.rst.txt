:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-paxtoolsr'
.. highlight: bash

bioconductor-paxtoolsr
======================

.. conda:recipe:: bioconductor-paxtoolsr
   :replaces_section_title:
   :noindex:

   Access Pathways from Multiple Databases Through BioPAX and Pathway Commons

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/paxtoolsr.html
   :license: LGPL-3
   :recipe: /`bioconductor-paxtoolsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paxtoolsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paxtoolsr/meta.yaml>`_

   The package provides a set of R functions for interacting with BioPAX OWL files using Paxtools and the querying Pathway Commons \(PC\) molecular interaction database. Pathway Commons is a project by the Memorial Sloan\-Kettering Cancer Center \(MSKCC\)\, Dana\-Farber Cancer Institute \(DFCI\)\, and the University of Toronto. Pathway Commons databases include\: BIND\, BioGRID\, CORUM\, CTD\, DIP\, DrugBank\, HPRD\, HumanCyc\, IntAct\, KEGG\, MirTarBase\, Panther\, PhosphoSitePlus\, Reactome\, RECON\, TRANSFAC.


.. conda:package:: bioconductor-paxtoolsr

   |downloads_bioconductor-paxtoolsr| |docker_bioconductor-paxtoolsr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-rappdirs: 
   :depends r-readr: 
   :depends r-rjava: ``>=0.9-8``
   :depends r-rjson: 
   :depends r-xml: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-paxtoolsr

   and update with::

      mamba update bioconductor-paxtoolsr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-paxtoolsr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-paxtoolsr:<tag>

   (see `bioconductor-paxtoolsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-paxtoolsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paxtoolsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-paxtoolsr
   :alt:   (downloads)
.. |docker_bioconductor-paxtoolsr| image:: https://quay.io/repository/biocontainers/bioconductor-paxtoolsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paxtoolsr
.. _`bioconductor-paxtoolsr/tags`: https://quay.io/repository/biocontainers/bioconductor-paxtoolsr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-paxtoolsr";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paxtoolsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paxtoolsr/README.html