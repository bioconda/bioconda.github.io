:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-report'
.. highlight: bash

fusion-report
=============

.. conda:recipe:: fusion-report
   :replaces_section_title:
   :noindex:

   Tool for parsing outputs from fusion detection tools. Part of the nf\-core\/rnafusion pipeline.

   :homepage: https://github.com/Clinical-Genomics/fusion-report
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fusion-report <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-report>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-report/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.2609024`

   


.. conda:package:: fusion-report

   |downloads_fusion-report| |docker_fusion-report|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.1-0</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  </span></summary>
      

      ``4.0.1-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends beautifulsoup4: ``>=4.12.0``
   :depends click: ``>=8.1.0``
   :depends colorlog: 
   :depends jinja2: ``>=3.1.0``
   :depends markupsafe: ``>=2.1.1``
   :depends numpy: ``>=1.26.0``
   :depends openpyxl: 
   :depends pandas: ``>=2.2.0``
   :depends python: ``>=3.12``
   :depends pyyaml: ``>=4.2b1``
   :depends requests: ``>=2.31.0``
   :depends sqlite: ``>=3.39``
   :depends tabulate: ``>=0.9.0``
   :depends tqdm: ``>=4.66.0``
   :depends xlrd: ``>=2.0.0``
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

      mamba install fusion-report

   and update with::

      mamba update fusion-report

  To create a new environment, run::

      mamba create --name myenvname fusion-report

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fusion-report:<tag>

   (see `fusion-report/tags`_ for valid values for ``<tag>``)


.. |downloads_fusion-report| image:: https://img.shields.io/conda/dn/bioconda/fusion-report.svg?style=flat
   :target: https://anaconda.org/bioconda/fusion-report
   :alt:   (downloads)
.. |docker_fusion-report| image:: https://quay.io/repository/biocontainers/fusion-report/status
   :target: https://quay.io/repository/biocontainers/fusion-report
.. _`fusion-report/tags`: https://quay.io/repository/biocontainers/fusion-report?tab=tags


.. raw:: html

    <script>
        var package = "fusion-report";
        var versions = ["4.0.1","4.0.0","4.0.0","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-report/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-report/README.html