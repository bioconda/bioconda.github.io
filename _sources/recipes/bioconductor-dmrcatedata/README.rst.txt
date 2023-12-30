:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrcatedata'
.. highlight: bash

bioconductor-dmrcatedata
========================

.. conda:recipe:: bioconductor-dmrcatedata
   :replaces_section_title:
   :noindex:

   Data Package for DMRcate

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/DMRcatedata.html
   :license: GPL-3
   :recipe: /`bioconductor-dmrcatedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcatedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcatedata/meta.yaml>`_

   This package contains 9 data objects supporting functionality and examples of the Bioconductor package DMRcate.


.. conda:package:: bioconductor-dmrcatedata

   |downloads_bioconductor-dmrcatedata| |docker_bioconductor-dmrcatedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.2-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.2-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-plyr: 
   :depends r-readxl: 
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

      mamba install bioconductor-dmrcatedata

   and update with::

      mamba update bioconductor-dmrcatedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dmrcatedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmrcatedata:<tag>

   (see `bioconductor-dmrcatedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmrcatedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrcatedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmrcatedata
   :alt:   (downloads)
.. |docker_bioconductor-dmrcatedata| image:: https://quay.io/repository/biocontainers/bioconductor-dmrcatedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrcatedata
.. _`bioconductor-dmrcatedata/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrcatedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmrcatedata";
        var versions = ["2.20.0","2.18.0","2.16.0","2.12.0","2.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrcatedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrcatedata/README.html