:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationhub'
.. highlight: bash

bioconductor-annotationhub
==========================

.. conda:recipe:: bioconductor-annotationhub
   :replaces_section_title:
   :noindex:

   Client to access AnnotationHub resources

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnnotationHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhub/meta.yaml>`_
   :links: biotools: :biotools:`annotationhub`, doi: :doi:`10.1038/nmeth.3252`

   This package provides a client for the Bioconductor AnnotationHub web resource. The AnnotationHub web resource provides a central location where genomic files \(e.g.\, VCF\, bed\, wig\) and other resources from standard locations \(e.g.\, UCSC\, Ensembl\) can be discovered. The resource includes metadata about each resource\, e.g.\, a textual description\, tags\, and date of modification. The client creates and manages a local cache of files retrieved by the user\, helping with quick and reproducible access.


.. conda:package:: bioconductor-annotationhub

   |downloads_bioconductor-annotationhub| |docker_bioconductor-annotationhub|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.14.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.6.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``3.14.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.5-0``,  ``2.14.2-0``,  ``2.12.1-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.8.2-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocversion: ``>=3.20.0,<3.21.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-curl: 
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-rappdirs: 
   :depends r-rsqlite: 
   :depends r-yaml: 
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

      mamba install bioconductor-annotationhub

   and update with::

      mamba update bioconductor-annotationhub

  To create a new environment, run::

      mamba create --name myenvname bioconductor-annotationhub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationhub:<tag>

   (see `bioconductor-annotationhub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationhub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationhub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationhub
   :alt:   (downloads)
.. |docker_bioconductor-annotationhub| image:: https://quay.io/repository/biocontainers/bioconductor-annotationhub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationhub
.. _`bioconductor-annotationhub/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationhub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotationhub";
        var versions = ["3.14.0","3.10.0","3.8.0","3.6.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationhub/README.html