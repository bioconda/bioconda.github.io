.. title:: Package Recipe 'bioconductor-cosnet'
.. highlight: bash


bioconductor-cosnet
===================

.. conda:recipe:: bioconductor-cosnet
   :replaces_section_title:

   Package that implements the COSNet classification algorithm. The algorithm predicts node labels in partially labeled graphs where few positives are available for the class being predicted.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/COSNet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cosnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosnet/meta.yaml>`_

   


.. conda:package:: bioconductor-cosnet

   |downloads_bioconductor-cosnet| |docker_bioconductor-cosnet|

   :versions: 1.16.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-cosnet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cosnet

   and update with::

      conda update bioconductor-cosnet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cosnet


.. |required_by_bioconductor-cosnet| conda:required_by:: bioconductor-cosnet
.. |downloads_bioconductor-cosnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosnet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cosnet| image:: https://quay.io/repository/biocontainers/bioconductor-cosnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosnet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosnet/README.html

