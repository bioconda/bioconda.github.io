:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timecoursedata'
.. highlight: bash

bioconductor-timecoursedata
===========================

.. conda:recipe:: bioconductor-timecoursedata
   :replaces_section_title:
   :noindex:

   A data package for timecourse RNA\-seq and microarray gene expression data sets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/timecoursedata.html
   :license: BSD 3-clause License + file LICENSE
   :recipe: /`bioconductor-timecoursedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecoursedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecoursedata/meta.yaml>`_

   This data package contains timecourse gene expression data sets. The first dataset\, from Shoemaker et al\, consists of microarray samples from lung tissue of mice exposed to different influenzy strains from 14 timepoints. The two other datasets are leaf and root samples from sorghum crops exposed to pre\- and post\-flowering drought stress and a control condition\, sampled across the plants lifetime.


.. conda:package:: bioconductor-timecoursedata

   |downloads_bioconductor-timecoursedata| |docker_bioconductor-timecoursedata|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-timecoursedata

   and update with::

      mamba update bioconductor-timecoursedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-timecoursedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timecoursedata:<tag>

   (see `bioconductor-timecoursedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timecoursedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timecoursedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timecoursedata
   :alt:   (downloads)
.. |docker_bioconductor-timecoursedata| image:: https://quay.io/repository/biocontainers/bioconductor-timecoursedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timecoursedata
.. _`bioconductor-timecoursedata/tags`: https://quay.io/repository/biocontainers/bioconductor-timecoursedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-timecoursedata";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timecoursedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timecoursedata/README.html