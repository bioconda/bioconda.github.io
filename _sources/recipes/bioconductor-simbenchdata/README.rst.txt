:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simbenchdata'
.. highlight: bash

bioconductor-simbenchdata
=========================

.. conda:recipe:: bioconductor-simbenchdata
   :replaces_section_title:
   :noindex:

   SimBenchData\: a collection of 35 single\-cell RNA\-seq data covering a wide range of data characteristics

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/SimBenchData.html
   :license: GPL-3
   :recipe: /`bioconductor-simbenchdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbenchdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbenchdata/meta.yaml>`_

   The SimBenchData package contains a total of 35 single\-cell RNA\-seq datasets covering a wide range of data characteristics\, including major sequencing protocols\, multiple tissue types\, and both human and mouse sources.


.. conda:package:: bioconductor-simbenchdata

   |downloads_bioconductor-simbenchdata| |docker_bioconductor-simbenchdata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simbenchdata

   and update with::

      conda update bioconductor-simbenchdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simbenchdata:<tag>

   (see `bioconductor-simbenchdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simbenchdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simbenchdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simbenchdata
   :alt:   (downloads)
.. |docker_bioconductor-simbenchdata| image:: https://quay.io/repository/biocontainers/bioconductor-simbenchdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simbenchdata
.. _`bioconductor-simbenchdata/tags`: https://quay.io/repository/biocontainers/bioconductor-simbenchdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simbenchdata";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simbenchdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simbenchdata/README.html