.. title:: Package Recipe 'rmats'
.. highlight: bash


rmats
=====

.. conda:recipe:: rmats
   :replaces_section_title:

   MATS is a computational tool to detect differential alternative splicing events from RNA\-Seq data.

   :homepage: http://rnaseq-mats.sourceforge.net
   :license: MIT
   :recipe: /`rmats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats/meta.yaml>`_

   


.. conda:package:: rmats

   |downloads_rmats| |docker_rmats|

   :versions: 4.0.2, 3.2.5, 3.2.2beta

   :depends: :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  :conda:package:`star` >=2.5 

   :required~by: |required_by_rmats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmats

   and update with::

      conda update rmats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rmats


.. |required_by_rmats| conda:required_by:: rmats
.. |downloads_rmats| image:: https://img.shields.io/conda/dn/bioconda/rmats.svg?style=flat
   :alt:   (downloads)
.. |docker_rmats| image:: https://quay.io/repository/biocontainers/rmats/status
   :target: https://quay.io/repository/biocontainers/rmats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats/README.html

