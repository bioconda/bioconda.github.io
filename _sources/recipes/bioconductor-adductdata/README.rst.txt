:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adductdata'
.. highlight: bash

bioconductor-adductdata
=======================

.. conda:recipe:: bioconductor-adductdata
   :replaces_section_title:
   :noindex:

   Data from untargeted MS of modifications to Cys34 of serum albumin

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/adductData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-adductdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductdata/meta.yaml>`_

   mzXML files from Grigoryan et al 2016 \(Anal Chem\).


.. conda:package:: bioconductor-adductdata

   |downloads_bioconductor-adductdata| |docker_bioconductor-adductdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
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

      mamba install bioconductor-adductdata

   and update with::

      mamba update bioconductor-adductdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adductdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adductdata:<tag>

   (see `bioconductor-adductdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adductdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adductdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adductdata
   :alt:   (downloads)
.. |docker_bioconductor-adductdata| image:: https://quay.io/repository/biocontainers/bioconductor-adductdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adductdata
.. _`bioconductor-adductdata/tags`: https://quay.io/repository/biocontainers/bioconductor-adductdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adductdata";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adductdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adductdata/README.html