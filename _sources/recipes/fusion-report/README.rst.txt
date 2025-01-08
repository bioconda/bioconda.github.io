:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-report'
.. highlight: bash

fusion-report
=============

.. conda:recipe:: fusion-report
   :replaces_section_title:
   :noindex:

   Tool for parsing outputs from fusion detection tools. Part of a nf\-core\/rnafusion pipeline

   :homepage: https://github.com/Clinical-Genomics/fusion-report/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fusion-report <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-report>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-report/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.2609024`

   


.. conda:package:: fusion-report

   |downloads_fusion-report| |docker_fusion-report|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.1-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``3.1.1-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends colorlog: ``4.0.2``
   :depends jinja2: ``2.10.1``
   :depends markupsafe: ``<2.1``
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends python-rapidjson: 
   :depends pyyaml: ``>=4.2b1``
   :depends requests: 
   :depends tqdm: ``4.33.0``
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
        var versions = ["3.1.1","2.1.5","2.1.4","2.1.3","2.1.2"];
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