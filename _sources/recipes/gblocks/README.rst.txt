.. title:: Package Recipe 'gblocks'
.. highlight: bash


gblocks
=======

.. conda:recipe:: gblocks
   :replaces_section_title:

   Selection of conserved blocks from multiple alignments for their use in phylogenetic analysis.

   :homepage: http://molevol.cmima.csic.es/castresana/Gblocks.html
   :license: The software and its accompanying documentation are provided as is, without guarantee of support or maintenance.
   :recipe: /`gblocks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gblocks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gblocks/meta.yaml>`_

   


.. conda:package:: gblocks

   |downloads_gblocks| |docker_gblocks|

   :versions: 0.91b

   :depends: 

   :required~by: |required_by_gblocks|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gblocks

   and update with::

      conda update gblocks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gblocks


.. |required_by_gblocks| conda:required_by:: gblocks
.. |downloads_gblocks| image:: https://img.shields.io/conda/dn/bioconda/gblocks.svg?style=flat
   :alt:   (downloads)
.. |docker_gblocks| image:: https://quay.io/repository/biocontainers/gblocks/status
   :target: https://quay.io/repository/biocontainers/gblocks







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gblocks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gblocks/README.html

