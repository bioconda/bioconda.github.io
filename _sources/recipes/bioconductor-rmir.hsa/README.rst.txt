.. title:: Package Recipe 'bioconductor-rmir.hsa'
.. highlight: bash


bioconductor-rmir.hsa
=====================

.. conda:recipe:: bioconductor-rmir.hsa
   :replaces_section_title:

   Various databases of microRNA Targets

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/RmiR.hsa.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-rmir.hsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hsa/meta.yaml>`_

   


.. conda:package:: bioconductor-rmir.hsa

   |downloads_bioconductor-rmir.hsa| |docker_bioconductor-rmir.hsa|

   :versions: 1.0.5

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rmir.hsa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmir.hsa

   and update with::

      conda update bioconductor-rmir.hsa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rmir.hsa


.. |required_by_bioconductor-rmir.hsa| conda:required_by:: bioconductor-rmir.hsa
.. |downloads_bioconductor-rmir.hsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.hsa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rmir.hsa| image:: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir.hsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir.hsa/README.html

