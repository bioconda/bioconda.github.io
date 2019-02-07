.. title:: Package Recipe 'mglex'
.. highlight: bash


mglex
=====

.. conda:recipe:: mglex
   :replaces_section_title:

   MGLEX \- MetaGenome Likelihood EXtractor

   :homepage: https://github.com/fungs/mglex
   :license: GPL / GPL-3.0
   :recipe: /`mglex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mglex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mglex/meta.yaml>`_

   


.. conda:package:: mglex

   |downloads_mglex| |docker_mglex|

   :versions: 0.2.1, 0.2.0

   :depends: :conda:package:`docopt` >=0.6.2 :conda:package:`numpy` >=1.8.2 :conda:package:`python` >=3 :conda:package:`scipy` >=0.13.3 

   :required~by: |required_by_mglex|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mglex

   and update with::

      conda update mglex

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mglex


.. |required_by_mglex| conda:required_by:: mglex
.. |downloads_mglex| image:: https://img.shields.io/conda/dn/bioconda/mglex.svg?style=flat
   :alt:   (downloads)
.. |docker_mglex| image:: https://quay.io/repository/biocontainers/mglex/status
   :target: https://quay.io/repository/biocontainers/mglex







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mglex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mglex/README.html

