.. title:: Package Recipe 'goslimmer'
.. highlight: bash


goslimmer
=========

.. conda:recipe:: goslimmer
   :replaces_section_title:

   GOSlimmer transforms GO annotations to a slimmed version of GO

   :homepage: https://github.com/DanFaria/GOSlimmer
   :license: Apache License 2.0
   :recipe: /`goslimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goslimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goslimmer/meta.yaml>`_

   


.. conda:package:: goslimmer

   |downloads_goslimmer| |docker_goslimmer|

   :versions: 1.0

   :depends: :conda:package:`openjdk` >=8 :conda:package:`python`  

   :required~by: |required_by_goslimmer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install goslimmer

   and update with::

      conda update goslimmer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/goslimmer


.. |required_by_goslimmer| conda:required_by:: goslimmer
.. |downloads_goslimmer| image:: https://img.shields.io/conda/dn/bioconda/goslimmer.svg?style=flat
   :alt:   (downloads)
.. |docker_goslimmer| image:: https://quay.io/repository/biocontainers/goslimmer/status
   :target: https://quay.io/repository/biocontainers/goslimmer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goslimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goslimmer/README.html

