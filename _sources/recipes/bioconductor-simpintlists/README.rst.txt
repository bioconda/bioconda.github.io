:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simpintlists'
.. highlight: bash

bioconductor-simpintlists
=========================

.. conda:recipe:: bioconductor-simpintlists
   :replaces_section_title:
   :noindex:

   The package contains BioGRID interactions for various organisms in a simple format

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/simpIntLists.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-simpintlists <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpintlists>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpintlists/meta.yaml>`_

   The package contains BioGRID interactions for arabidopsis\(thale cress\)\, c.elegans\, fruit fly\, human\, mouse\, yeast\( budding yeast \) and S.pombe \(fission yeast\) . Entrez ids\, official names and unique ids can be used to find proteins. The format of interactions are lists. For each gene\/protein\, there is an entry in the list with \"name\" containing name of the gene\/protein and \"interactors\" containing the list of genes\/proteins interacting with it.


.. conda:package:: bioconductor-simpintlists

   |downloads_bioconductor-simpintlists| |docker_bioconductor-simpintlists|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-simpintlists

   and update with::

      mamba update bioconductor-simpintlists

  To create a new environment, run::

      mamba create --name myenvname bioconductor-simpintlists

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simpintlists:<tag>

   (see `bioconductor-simpintlists/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simpintlists| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simpintlists.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simpintlists
   :alt:   (downloads)
.. |docker_bioconductor-simpintlists| image:: https://quay.io/repository/biocontainers/bioconductor-simpintlists/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simpintlists
.. _`bioconductor-simpintlists/tags`: https://quay.io/repository/biocontainers/bioconductor-simpintlists?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simpintlists";
        var versions = ["1.36.0","1.33.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simpintlists/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simpintlists/README.html