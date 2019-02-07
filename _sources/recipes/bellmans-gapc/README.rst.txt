.. title:: Package Recipe 'bellmans-gapc'
.. highlight: bash


bellmans-gapc
=============

.. conda:recipe:: bellmans-gapc
   :replaces_section_title:

   The Bellman\'s GAP Compiler \(GAP\-C\) is the novel ADP compiler which translates GAP\-L programs into efficient C\+\+ code. It implements several semantic analyses for optimization purposes\, error reporting\, type checking and automatic table design.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/gapc
   :license: GPLv3+
   :recipe: /`bellmans-gapc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellmans-gapc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellmans-gapc/meta.yaml>`_

   


.. conda:package:: bellmans-gapc

   |downloads_bellmans-gapc| |docker_bellmans-gapc|

   :versions: 0.1

   :depends: :conda:package:`boost` 1.61* :conda:package:`gsl` 1.16* :conda:package:`libgcc`  

   :required~by: |required_by_bellmans-gapc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bellmans-gapc

   and update with::

      conda update bellmans-gapc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bellmans-gapc


.. |required_by_bellmans-gapc| conda:required_by:: bellmans-gapc
.. |downloads_bellmans-gapc| image:: https://img.shields.io/conda/dn/bioconda/bellmans-gapc.svg?style=flat
   :alt:   (downloads)
.. |docker_bellmans-gapc| image:: https://quay.io/repository/biocontainers/bellmans-gapc/status
   :target: https://quay.io/repository/biocontainers/bellmans-gapc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bellmans-gapc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bellmans-gapc/README.html

