:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-amber'
.. highlight: bash

hmftools-amber
==============

.. conda:recipe:: hmftools-amber
   :replaces_section_title:
   :noindex:

   Generates a tumor BAF file for use in PURPLE

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/amber/README.md
   :license: MIT / MIT
   :recipe: /`hmftools-amber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-amber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-amber/meta.yaml>`_

   


.. conda:package:: hmftools-amber

   |downloads_hmftools-amber| |docker_hmftools-amber|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.9.1-0</code>,  <code>3.9-1</code>,  <code>3.9-0</code>,  <code>3.5-1</code>,  <code>3.5-0</code>,  <code>3.4-0</code>,  <code>3.3-0</code>,  <code>3.2-0</code>,  <code>2.5-0</code>,  </span></summary>
      

      ``3.9.1-0``,  ``3.9-1``,  ``3.9-0``,  ``3.5-1``,  ``3.5-0``,  ``3.4-0``,  ``3.3-0``,  ``3.2-0``,  ``2.5-0``,  ``2.3-0``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-copynumber: 
   :depends openjdk: ``>=8``
   :depends r-dplyr: 
   :depends zlib: 
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

      mamba install hmftools-amber

   and update with::

      mamba update hmftools-amber

  To create a new environment, run::

      mamba create --name myenvname hmftools-amber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-amber:<tag>

   (see `hmftools-amber/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-amber| image:: https://img.shields.io/conda/dn/bioconda/hmftools-amber.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-amber
   :alt:   (downloads)
.. |docker_hmftools-amber| image:: https://quay.io/repository/biocontainers/hmftools-amber/status
   :target: https://quay.io/repository/biocontainers/hmftools-amber
.. _`hmftools-amber/tags`: https://quay.io/repository/biocontainers/hmftools-amber?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-amber";
        var versions = ["3.9.1","3.9","3.9","3.5","3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-amber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-amber/README.html