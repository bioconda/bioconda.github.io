:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spikeli'
.. highlight: bash

bioconductor-spikeli
====================

.. conda:recipe:: bioconductor-spikeli
   :replaces_section_title:
   :noindex:

   Affymetrix Spike\-in Langmuir Isotherm Data Analysis Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spikeLI.html
   :license: GPL-2
   :recipe: /`bioconductor-spikeli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikeli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikeli/meta.yaml>`_
   :links: biotools: :biotools:`spikeli`, doi: :doi:`10.1038/nmeth.3252`

   SpikeLI is a package that performs the analysis of the Affymetrix spike\-in data using the Langmuir Isotherm. The aim of this package is to show the advantages of a physical\-chemistry based analysis of the Affymetrix microarray data compared to the traditional methods. The spike\-in \(or Latin square\) data for the HGU95 and HGU133 chipsets have been downloaded from the Affymetrix web site. The model used in the spikeLI package is described in details in E. Carlon and T. Heim\, Physica A 362\, 433 \(2006\).


.. conda:package:: bioconductor-spikeli

   |downloads_bioconductor-spikeli| |docker_bioconductor-spikeli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.66.0-0</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  </span></summary>
      

      ``2.66.0-0``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-spikeli

   and update with::

      mamba update bioconductor-spikeli

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spikeli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spikeli:<tag>

   (see `bioconductor-spikeli/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spikeli| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spikeli.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spikeli
   :alt:   (downloads)
.. |docker_bioconductor-spikeli| image:: https://quay.io/repository/biocontainers/bioconductor-spikeli/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spikeli
.. _`bioconductor-spikeli/tags`: https://quay.io/repository/biocontainers/bioconductor-spikeli?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spikeli";
        var versions = ["2.66.0","2.62.0","2.60.0","2.58.0","2.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spikeli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spikeli/README.html