:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowvs'
.. highlight: bash

bioconductor-flowvs
===================

.. conda:recipe:: bioconductor-flowvs
   :replaces_section_title:
   :noindex:

   Variance stabilization in flow cytometry \(and microarrays\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/flowVS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowvs/meta.yaml>`_

   Per\-channel variance stabilization from a collection of flow cytometry samples by Bertlett test for homogeneity of variances. The approach is applicable to microarrays data as well.


.. conda:package:: bioconductor-flowvs

   |downloads_bioconductor-flowvs| |docker_bioconductor-flowvs|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``

      

   
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends bioconductor-flowstats: ``>=4.12.0,<4.13.0``
   :depends bioconductor-flowviz: ``>=1.64.0,<1.65.0``
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

      mamba install bioconductor-flowvs

   and update with::

      mamba update bioconductor-flowvs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowvs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowvs:<tag>

   (see `bioconductor-flowvs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowvs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowvs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowvs
   :alt:   (downloads)
.. |docker_bioconductor-flowvs| image:: https://quay.io/repository/biocontainers/bioconductor-flowvs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowvs
.. _`bioconductor-flowvs/tags`: https://quay.io/repository/biocontainers/bioconductor-flowvs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowvs";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.19.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowvs/README.html