:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgabiolinksgui.data'
.. highlight: bash

bioconductor-tcgabiolinksgui.data
=================================

.. conda:recipe:: bioconductor-tcgabiolinksgui.data
   :replaces_section_title:
   :noindex:

   Data for the TCGAbiolinksGUI package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/TCGAbiolinksGUI.data.html
   :license: GPL-3
   :recipe: /`bioconductor-tcgabiolinksgui.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinksgui.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinksgui.data/meta.yaml>`_

   Supporting data for the TCGAbiolinksGUI package.


.. conda:package:: bioconductor-tcgabiolinksgui.data

   |downloads_bioconductor-tcgabiolinksgui.data| |docker_bioconductor-tcgabiolinksgui.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-tcgabiolinksgui.data

   and update with::

      mamba update bioconductor-tcgabiolinksgui.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tcgabiolinksgui.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgabiolinksgui.data:<tag>

   (see `bioconductor-tcgabiolinksgui.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgabiolinksgui.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgabiolinksgui.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgabiolinksgui.data
   :alt:   (downloads)
.. |docker_bioconductor-tcgabiolinksgui.data| image:: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui.data
.. _`bioconductor-tcgabiolinksgui.data/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcgabiolinksgui.data";
        var versions = ["1.22.0","1.20.0","1.18.0","1.17.0","1.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgabiolinksgui.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgabiolinksgui.data/README.html