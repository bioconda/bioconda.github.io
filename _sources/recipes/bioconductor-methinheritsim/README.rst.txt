.. title:: Package Recipe 'bioconductor-methinheritsim'
.. highlight: bash


bioconductor-methinheritsim
===========================

.. conda:recipe:: bioconductor-methinheritsim
   :replaces_section_title:

   Simulate a multigeneration methylation case versus control experiment with inheritance relation using a real control dataset.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/methInheritSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methinheritsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methinheritsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methinheritsim/meta.yaml>`_

   


.. conda:package:: bioconductor-methinheritsim

   |downloads_bioconductor-methinheritsim| |docker_bioconductor-methinheritsim|

   :versions: 1.4.1

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-methylkit` >=1.8.0,<1.9.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-msm`  

   :required~by: |required_by_bioconductor-methinheritsim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methinheritsim

   and update with::

      conda update bioconductor-methinheritsim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methinheritsim


.. |required_by_bioconductor-methinheritsim| conda:required_by:: bioconductor-methinheritsim
.. |downloads_bioconductor-methinheritsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methinheritsim.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methinheritsim| image:: https://quay.io/repository/biocontainers/bioconductor-methinheritsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methinheritsim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methinheritsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methinheritsim/README.html

