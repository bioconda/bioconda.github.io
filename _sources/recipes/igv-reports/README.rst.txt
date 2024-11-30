:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igv-reports'
.. highlight: bash

igv-reports
===========

.. conda:recipe:: igv-reports
   :replaces_section_title:
   :noindex:

   Creates self\-contained html pages for visual variant review with IGV \(igv.js\).

   :homepage: https://github.com/igvteam/igv-reports
   :license: MIT / MIT
   :recipe: /`igv-reports <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv-reports>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv-reports/meta.yaml>`_

   


.. conda:package:: igv-reports

   |downloads_igv-reports| |docker_igv-reports|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-0</code>,  <code>1.9.1-0</code>,  <code>1.9.0-0</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.14.1-0``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.8-1``,  ``0.9.8-0``,  ``0.9.7-1``,  ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends intervaltree: 
   :depends pysam: ``>=0.19.1``
   :depends python: 
   :depends requests: 
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

      mamba install igv-reports

   and update with::

      mamba update igv-reports

  To create a new environment, run::

      mamba create --name myenvname igv-reports

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igv-reports:<tag>

   (see `igv-reports/tags`_ for valid values for ``<tag>``)


.. |downloads_igv-reports| image:: https://img.shields.io/conda/dn/bioconda/igv-reports.svg?style=flat
   :target: https://anaconda.org/bioconda/igv-reports
   :alt:   (downloads)
.. |docker_igv-reports| image:: https://quay.io/repository/biocontainers/igv-reports/status
   :target: https://quay.io/repository/biocontainers/igv-reports
.. _`igv-reports/tags`: https://quay.io/repository/biocontainers/igv-reports?tab=tags


.. raw:: html

    <script>
        var package = "igv-reports";
        var versions = ["1.14.1","1.14.0","1.13.0","1.12.0","1.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igv-reports/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igv-reports/README.html