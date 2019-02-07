.. title:: Package Recipe 'hubward-all'
.. highlight: bash


hubward-all
===========

.. conda:recipe:: hubward-all
   :replaces_section_title:

   Meta\-package for hubward including bedtools and UCSC tools

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`hubward-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward-all/meta.yaml>`_

   


.. conda:package:: hubward-all

   |downloads_hubward-all| |docker_hubward-all|

   :versions: 0.2.1

   :depends: :conda:package:`bedtools`  :conda:package:`crossmap`  :conda:package:`hubward`  :conda:package:`ucsc-bedgraphtobigwig`  :conda:package:`ucsc-bedtobigbed`  :conda:package:`ucsc-bigbedtobed`  :conda:package:`ucsc-bigwigtobedgraph`  :conda:package:`ucsc-bigwigtowig`  :conda:package:`ucsc-fetchchromsizes`  :conda:package:`ucsc-liftover`  :conda:package:`ucsc-wigtobigwig`  

   :required~by: |required_by_hubward-all|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hubward-all

   and update with::

      conda update hubward-all

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hubward-all


.. |required_by_hubward-all| conda:required_by:: hubward-all
.. |downloads_hubward-all| image:: https://img.shields.io/conda/dn/bioconda/hubward-all.svg?style=flat
   :alt:   (downloads)
.. |docker_hubward-all| image:: https://quay.io/repository/biocontainers/hubward-all/status
   :target: https://quay.io/repository/biocontainers/hubward-all







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hubward-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hubward-all/README.html

