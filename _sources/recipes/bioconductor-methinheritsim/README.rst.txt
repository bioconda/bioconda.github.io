:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methinheritsim'
.. highlight: bash

bioconductor-methinheritsim
===========================

.. conda:recipe:: bioconductor-methinheritsim
   :replaces_section_title:
   :noindex:

   Simulating Whole\-Genome Inherited Bisulphite Sequencing Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/methInheritSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methinheritsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methinheritsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methinheritsim/meta.yaml>`_

   Simulate a multigeneration methylation case versus control experiment with inheritance relation using a real control dataset.


.. conda:package:: bioconductor-methinheritsim

   |downloads_bioconductor-methinheritsim| |docker_bioconductor-methinheritsim|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-methylkit: ``>=1.20.0,<1.21.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-msm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methinheritsim

   and update with::

      conda update bioconductor-methinheritsim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methinheritsim:<tag>

   (see `bioconductor-methinheritsim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methinheritsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methinheritsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methinheritsim
   :alt:   (downloads)
.. |docker_bioconductor-methinheritsim| image:: https://quay.io/repository/biocontainers/bioconductor-methinheritsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methinheritsim
.. _`bioconductor-methinheritsim/tags`: https://quay.io/repository/biocontainers/bioconductor-methinheritsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methinheritsim";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methinheritsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methinheritsim/README.html