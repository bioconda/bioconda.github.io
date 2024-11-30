:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minfidata'
.. highlight: bash

bioconductor-minfidata
======================

.. conda:recipe:: bioconductor-minfidata
   :replaces_section_title:
   :noindex:

   Example data for the Illumina Methylation 450k array

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/minfiData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfidata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidata/meta.yaml>`_

   Data from 6 samples across 2 groups from 450k methylation arrays.


.. conda:package:: bioconductor-minfidata

   |downloads_bioconductor-minfidata| |docker_bioconductor-minfidata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.48.0-0</code>,  <code>0.46.0-0</code>,  <code>0.44.0-0</code>,  <code>0.40.0-1</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.36.0-1</code>,  <code>0.36.0-0</code>,  <code>0.34.0-0</code>,  </span></summary>
      

      ``0.48.0-0``,  ``0.46.0-0``,  ``0.44.0-0``,  ``0.40.0-1``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.36.0-1``,  ``0.36.0-0``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.28.0-1``,  ``0.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-minfidata

   and update with::

      mamba update bioconductor-minfidata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-minfidata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minfidata:<tag>

   (see `bioconductor-minfidata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minfidata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfidata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minfidata
   :alt:   (downloads)
.. |docker_bioconductor-minfidata| image:: https://quay.io/repository/biocontainers/bioconductor-minfidata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfidata
.. _`bioconductor-minfidata/tags`: https://quay.io/repository/biocontainers/bioconductor-minfidata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-minfidata";
        var versions = ["0.48.0","0.46.0","0.44.0","0.40.0","0.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfidata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfidata/README.html