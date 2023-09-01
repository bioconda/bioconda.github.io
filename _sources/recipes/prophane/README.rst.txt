:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophane'
.. highlight: bash

prophane
========

.. conda:recipe:: prophane
   :replaces_section_title:
   :noindex:

   Annotate your metaproteomic search results

   :homepage: https://gitlab.com/s.fuchs/prophane/
   :license: MIT / MIT
   :recipe: /`prophane <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophane>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophane/meta.yaml>`_

   


.. conda:package:: prophane

   |downloads_prophane| |docker_prophane|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.2.6-0</code>,  <code>6.2.5-0</code>,  <code>6.2.4-0</code>,  <code>6.2.1-0</code>,  <code>6.1-0</code>,  <code>6.0.5-0</code>,  <code>6.0.1-0</code>,  <code>4.0.5-1</code>,  <code>4.0.5-0</code>,  </span></summary>
      

      ``6.2.6-0``,  ``6.2.5-0``,  ``6.2.4-0``,  ``6.2.1-0``,  ``6.1-0``,  ``6.0.5-0``,  ``6.0.1-0``,  ``4.0.5-1``,  ``4.0.5-0``,  ``4.0.3-0``,  ``4.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.79``
   :depends click: ``>=8.0.1``
   :depends gitpython: ``>=3.1.18``
   :depends mamba: ``>=0.14.1``
   :depends openpyxl: ``>=3.0.7``
   :depends pandas: ``>=1.3.0``
   :depends pyteomics: ``>=4.4.2``
   :depends pytools: ``>=2021.2.7``
   :depends snakemake-minimal: ``>=6.5.3``
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

      mamba install prophane

   and update with::

      mamba update prophane

  To create a new environment, run::

      mamba create --name myenvname prophane

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prophane:<tag>

   (see `prophane/tags`_ for valid values for ``<tag>``)


.. |downloads_prophane| image:: https://img.shields.io/conda/dn/bioconda/prophane.svg?style=flat
   :target: https://anaconda.org/bioconda/prophane
   :alt:   (downloads)
.. |docker_prophane| image:: https://quay.io/repository/biocontainers/prophane/status
   :target: https://quay.io/repository/biocontainers/prophane
.. _`prophane/tags`: https://quay.io/repository/biocontainers/prophane?tab=tags


.. raw:: html

    <script>
        var package = "prophane";
        var versions = ["6.2.6","6.2.5","6.2.4","6.2.1","6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophane/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophane/README.html