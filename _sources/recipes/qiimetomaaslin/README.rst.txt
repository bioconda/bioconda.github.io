.. title:: Package Recipe 'qiimetomaaslin'
.. highlight: bash


qiimetomaaslin
==============

.. conda:recipe:: qiimetomaaslin
   :replaces_section_title:

   Data munging script to change text Qiime OTU tables to pcl\-formatted\, maaslin\-compatible text files

   :homepage: https://huttenhower.sph.harvard.edu/maaslin
   :license: Unknown
   :recipe: /`qiimetomaaslin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiimetomaaslin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiimetomaaslin/meta.yaml>`_

   


.. conda:package:: qiimetomaaslin

   |downloads_qiimetomaaslin| |docker_qiimetomaaslin|

   :versions: 1.1.0

   :depends: :conda:package:`blist`  :conda:package:`python` 2.7* 

   :required~by: |required_by_qiimetomaaslin|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qiimetomaaslin

   and update with::

      conda update qiimetomaaslin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qiimetomaaslin


.. |required_by_qiimetomaaslin| conda:required_by:: qiimetomaaslin
.. |downloads_qiimetomaaslin| image:: https://img.shields.io/conda/dn/bioconda/qiimetomaaslin.svg?style=flat
   :alt:   (downloads)
.. |docker_qiimetomaaslin| image:: https://quay.io/repository/biocontainers/qiimetomaaslin/status
   :target: https://quay.io/repository/biocontainers/qiimetomaaslin







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiimetomaaslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiimetomaaslin/README.html

