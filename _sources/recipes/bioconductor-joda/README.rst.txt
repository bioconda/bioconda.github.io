:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-joda'
.. highlight: bash

bioconductor-joda
=================

.. conda:recipe:: bioconductor-joda
   :replaces_section_title:

   Package \'joda\' implements three steps of an algorithm called JODA. The algorithm computes gene deregulation scores. For each gene\, its deregulation score reflects how strongly an effect of a certain regulator\'s perturbation on this gene differs between two different cell populations. The algorithm utilizes regulator knockdown expression data as well as knowledge about signaling pathways in which the regulators are involved \(formalized in a simple matrix model\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/joda.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-joda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-joda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-joda/meta.yaml>`_

   


.. conda:package:: bioconductor-joda

   |downloads_bioconductor-joda| |docker_bioconductor-joda|

   :versions: 1.30.0-0
   
   :depends bioconductor-rbgl: >=1.58.0,<1.59.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bgmm: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-joda

   and update with::

      conda update bioconductor-joda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-joda:<tag>

   (see `bioconductor-joda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-joda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-joda.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-joda| image:: https://quay.io/repository/biocontainers/bioconductor-joda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-joda
.. _`bioconductor-joda/tags`: https://quay.io/repository/biocontainers/bioconductor-joda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-joda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-joda/README.html