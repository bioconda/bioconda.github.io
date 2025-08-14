:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmultiqc'
.. highlight: bash

pmultiqc
========

.. conda:recipe:: pmultiqc
   :replaces_section_title:
   :noindex:

   Python package for quality control of proteomics datasets\, based on multiqc package

   :homepage: https://github.com/bigbio/pmultiqc/
   :license: MIT / MIT
   :recipe: /`pmultiqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmultiqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmultiqc/meta.yaml>`_

   


.. conda:package:: pmultiqc

   |downloads_pmultiqc| |docker_pmultiqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.33-0</code>,  <code>0.0.32-0</code>,  <code>0.0.31-0</code>,  <code>0.0.30-0</code>,  <code>0.0.29-0</code>,  <code>0.0.28-0</code>,  <code>0.0.27-0</code>,  <code>0.0.26-0</code>,  <code>0.0.25-0</code>,  </span></summary>
      

      ``0.0.33-0``,  ``0.0.32-0``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.27-0``,  ``0.0.26-0``,  ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends lxml: 
   :depends multiqc: ``>=1.29``
   :depends numpy: ``>=1.23``
   :depends pandas: 
   :depends pyarrow: 
   :depends pyopenms: 
   :depends pyteomics: 
   :depends pytest: 
   :depends python: ``>=3.10,<3.13``
   :depends scikit-learn: ``>=1.2``
   :depends sdrf-pipelines: ``>=0.0.32``
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

      mamba install pmultiqc

   and update with::

      mamba update pmultiqc

  To create a new environment, run::

      mamba create --name myenvname pmultiqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pmultiqc:<tag>

   (see `pmultiqc/tags`_ for valid values for ``<tag>``)


.. |downloads_pmultiqc| image:: https://img.shields.io/conda/dn/bioconda/pmultiqc.svg?style=flat
   :target: https://anaconda.org/bioconda/pmultiqc
   :alt:   (downloads)
.. |docker_pmultiqc| image:: https://quay.io/repository/biocontainers/pmultiqc/status
   :target: https://quay.io/repository/biocontainers/pmultiqc
.. _`pmultiqc/tags`: https://quay.io/repository/biocontainers/pmultiqc?tab=tags


.. raw:: html

    <script>
        var package = "pmultiqc";
        var versions = ["0.0.33","0.0.32","0.0.31","0.0.30","0.0.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmultiqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmultiqc/README.html