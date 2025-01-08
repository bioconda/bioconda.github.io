:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yeastnagalakshmi'
.. highlight: bash

bioconductor-yeastnagalakshmi
=============================

.. conda:recipe:: bioconductor-yeastnagalakshmi
   :replaces_section_title:
   :noindex:

   Yeast genome RNA sequencing data based on Nagalakshmi et. al.

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/yeastNagalakshmi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yeastnagalakshmi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastnagalakshmi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastnagalakshmi/meta.yaml>`_

   The yeast genome data was retrieved from the sequence read archive\, aligned with bwa\, and converted to BAM format with samtools.


.. conda:package:: bioconductor-yeastnagalakshmi

   |downloads_bioconductor-yeastnagalakshmi| |docker_bioconductor-yeastnagalakshmi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
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

      mamba install bioconductor-yeastnagalakshmi

   and update with::

      mamba update bioconductor-yeastnagalakshmi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-yeastnagalakshmi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yeastnagalakshmi:<tag>

   (see `bioconductor-yeastnagalakshmi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yeastnagalakshmi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeastnagalakshmi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yeastnagalakshmi
   :alt:   (downloads)
.. |docker_bioconductor-yeastnagalakshmi| image:: https://quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi
.. _`bioconductor-yeastnagalakshmi/tags`: https://quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-yeastnagalakshmi";
        var versions = ["1.42.0","1.38.0","1.36.0","1.33.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeastnagalakshmi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeastnagalakshmi/README.html