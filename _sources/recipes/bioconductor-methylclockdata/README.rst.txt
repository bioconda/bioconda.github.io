:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylclockdata'
.. highlight: bash

bioconductor-methylclockdata
============================

.. conda:recipe:: bioconductor-methylclockdata
   :replaces_section_title:
   :noindex:

   Data for methylclock package

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/methylclockData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-methylclockdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclockdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclockdata/meta.yaml>`_

   Collection of 9 datasets\, andrews and bakulski cord blood\, blood gse35069\, blood gse35069 chen\, blood gse35069 complete\, combined cord blood\, cord bloo d gse68456\, gervin and lyle cord blood\, guintivano dlpfc and saliva gse48472\". Data downloaded from \[meffil\]\(https\:\/\/github.com\/perishky\/meffil\/\). Data used to estimate cell counts using Extrinsic epigenetic age acceleration \(EEAA\) method Collection of 12 datasets to use with MethylClock package to estimate chronological and gestational DNA methylationwith estimators to use wit different methylation clocks


.. conda:package:: bioconductor-methylclockdata

   |downloads_bioconductor-methylclockdata| |docker_bioconductor-methylclockdata|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-experimenthubdata: ``>=1.20.0,<1.21.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylclockdata

   and update with::

      conda update bioconductor-methylclockdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylclockdata:<tag>

   (see `bioconductor-methylclockdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylclockdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylclockdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylclockdata
   :alt:   (downloads)
.. |docker_bioconductor-methylclockdata| image:: https://quay.io/repository/biocontainers/bioconductor-methylclockdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylclockdata
.. _`bioconductor-methylclockdata/tags`: https://quay.io/repository/biocontainers/bioconductor-methylclockdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylclockdata";
        var versions = ["1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylclockdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylclockdata/README.html