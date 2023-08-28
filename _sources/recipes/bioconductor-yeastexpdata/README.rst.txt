:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yeastexpdata'
.. highlight: bash

bioconductor-yeastexpdata
=========================

.. conda:recipe:: bioconductor-yeastexpdata
   :replaces_section_title:
   :noindex:

   Yeast Experimental Data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/yeastExpData.html
   :license: GPL
   :recipe: /`bioconductor-yeastexpdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastexpdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastexpdata/meta.yaml>`_

   A collection of different sets of experimental data from yeast.


.. conda:package:: bioconductor-yeastexpdata

   |downloads_bioconductor-yeastexpdata| |docker_bioconductor-yeastexpdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.46.0-0</code>,  <code>0.44.0-0</code>,  <code>0.40.0-1</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.36.0-1</code>,  <code>0.36.0-0</code>,  <code>0.34.0-0</code>,  <code>0.32.0-0</code>,  </span></summary>
      

      ``0.46.0-0``,  ``0.44.0-0``,  ``0.40.0-1``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.36.0-1``,  ``0.36.0-0``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-yeastexpdata

   and update with::

      mamba update bioconductor-yeastexpdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-yeastexpdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yeastexpdata:<tag>

   (see `bioconductor-yeastexpdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yeastexpdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeastexpdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yeastexpdata
   :alt:   (downloads)
.. |docker_bioconductor-yeastexpdata| image:: https://quay.io/repository/biocontainers/bioconductor-yeastexpdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeastexpdata
.. _`bioconductor-yeastexpdata/tags`: https://quay.io/repository/biocontainers/bioconductor-yeastexpdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-yeastexpdata";
        var versions = ["0.46.0","0.44.0","0.40.0","0.40.0","0.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeastexpdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeastexpdata/README.html