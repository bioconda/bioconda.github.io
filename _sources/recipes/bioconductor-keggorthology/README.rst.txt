:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggorthology'
.. highlight: bash

bioconductor-keggorthology
==========================

.. conda:recipe:: bioconductor-keggorthology
   :replaces_section_title:
   :noindex:

   graph support for KO\, KEGG Orthology

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/keggorthology.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-keggorthology <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggorthology>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggorthology/meta.yaml>`_
   :links: biotools: :biotools:`keggorthology`, doi: :doi:`10.1038/nmeth.3252`

   graphical representation of the Feb 2010 KEGG Orthology. The KEGG orthology is a set of pathway IDs that are not to be confused with the KEGG ortholog IDs.


.. conda:package:: bioconductor-keggorthology

   |downloads_bioconductor-keggorthology| |docker_bioconductor-keggorthology|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  </span></summary>
      

      ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-hgu95av2.db: ``>=3.13.0,<3.14.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
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

      mamba install bioconductor-keggorthology

   and update with::

      mamba update bioconductor-keggorthology

  To create a new environment, run::

      mamba create --name myenvname bioconductor-keggorthology

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-keggorthology:<tag>

   (see `bioconductor-keggorthology/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggorthology| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggorthology.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggorthology
   :alt:   (downloads)
.. |docker_bioconductor-keggorthology| image:: https://quay.io/repository/biocontainers/bioconductor-keggorthology/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggorthology
.. _`bioconductor-keggorthology/tags`: https://quay.io/repository/biocontainers/bioconductor-keggorthology?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-keggorthology";
        var versions = ["2.54.0","2.52.0","2.50.0","2.46.0","2.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggorthology/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggorthology/README.html