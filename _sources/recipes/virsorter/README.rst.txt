:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virsorter'
.. highlight: bash

virsorter
=========

.. conda:recipe:: virsorter
   :replaces_section_title:
   :noindex:

   VirSorter2 \-\-  A multi\-classifier\, expert\-guided approach to detect diverse DNA and RNA virus genomes

   :homepage: https://github.com/jiarong/VirSorter2
   :developer docs: https://github.com/jiarong/VirSorter2/virsorter
   :license: GPL / GPL-2.0
   :recipe: /`virsorter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virsorter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virsorter/meta.yaml>`_

   


.. conda:package:: virsorter

   |downloads_virsorter| |docker_virsorter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.4-2</code>,  <code>2.2.4-1</code>,  <code>2.2.4-0</code>,  <code>2.2.3-1</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  </span></summary>
      

      ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``2.0.beta-1``,  ``2.0.beta-0``,  ``2.0.alpha-2``,  ``2.0.alpha-1``,  ``2.0.alpha-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-4``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=7``
   :depends conda-package-handling: ``<=1.9``
   :depends cookiecutter: 
   :depends git: 
   :depends mamba: ``<2``
   :depends python: ``>=3.6,<=3.10``
   :depends ruamel.yaml: ``0.16.*``
   :depends snakemake-minimal: ``>=5.18,<=5.26``
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

      mamba install virsorter

   and update with::

      mamba update virsorter

  To create a new environment, run::

      mamba create --name myenvname virsorter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virsorter:<tag>

   (see `virsorter/tags`_ for valid values for ``<tag>``)


.. |downloads_virsorter| image:: https://img.shields.io/conda/dn/bioconda/virsorter.svg?style=flat
   :target: https://anaconda.org/bioconda/virsorter
   :alt:   (downloads)
.. |docker_virsorter| image:: https://quay.io/repository/biocontainers/virsorter/status
   :target: https://quay.io/repository/biocontainers/virsorter
.. _`virsorter/tags`: https://quay.io/repository/biocontainers/virsorter?tab=tags


.. raw:: html

    <script>
        var package = "virsorter";
        var versions = ["2.2.4","2.2.4","2.2.4","2.2.3","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virsorter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virsorter/README.html