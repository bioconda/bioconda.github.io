:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timecoursedata'
.. highlight: bash

bioconductor-timecoursedata
===========================

.. conda:recipe:: bioconductor-timecoursedata
   :replaces_section_title:
   :noindex:

   A data package for timecourse RNA\-seq and microarray gene expression data sets

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/timecoursedata.html
   :license: BSD 3-clause License + file LICENSE
   :recipe: /`bioconductor-timecoursedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecoursedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecoursedata/meta.yaml>`_

   This data package contains timecourse gene expression data sets. The first dataset\, from Shoemaker et al\, consists of microarray samples from lung tissue of mice exposed to different influenzy strains from 14 timepoints. The two other datasets are leaf and root samples from sorghum crops exposed to pre\- and post\-flowering drought stress and a control condition\, sampled across the plants lifetime.


.. conda:package:: bioconductor-timecoursedata

   |downloads_bioconductor-timecoursedata| |docker_bioconductor-timecoursedata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-timecoursedata

   and update with::

      conda update bioconductor-timecoursedata

   or use the docker container::

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
        var versions = ["1.2.0","1.0.0","1.0.0"];
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