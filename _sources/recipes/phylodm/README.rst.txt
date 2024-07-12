:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylodm'
.. highlight: bash

phylodm
=======

.. conda:recipe:: phylodm
   :replaces_section_title:
   :noindex:

   Efficient calculation of phylogenetic distance matrices.

   :homepage: https://github.com/aaronmussig/PhyloDM
   :license: GPL / GPL-3.0-only
   :recipe: /`phylodm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodm/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3998716`

   


.. conda:package:: phylodm

   |downloads_phylodm| |docker_phylodm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-2</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.3-1</code>,  <code>2.1.3-0</code>,  <code>2.1.2-1</code>,  </span></summary>
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.0.5-0``,  ``2.0.3-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends dendropy: 
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install phylodm

   and update with::

      mamba update phylodm

  To create a new environment, run::

      mamba create --name myenvname phylodm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylodm:<tag>

   (see `phylodm/tags`_ for valid values for ``<tag>``)


.. |downloads_phylodm| image:: https://img.shields.io/conda/dn/bioconda/phylodm.svg?style=flat
   :target: https://anaconda.org/bioconda/phylodm
   :alt:   (downloads)
.. |docker_phylodm| image:: https://quay.io/repository/biocontainers/phylodm/status
   :target: https://quay.io/repository/biocontainers/phylodm
.. _`phylodm/tags`: https://quay.io/repository/biocontainers/phylodm?tab=tags


.. raw:: html

    <script>
        var package = "phylodm";
        var versions = ["3.0.0","3.0.0","3.0.0","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylodm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylodm/README.html