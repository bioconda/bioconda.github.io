.. title:: Package Recipe 'r-coenocliner'
.. highlight: bash


r-coenocliner
=============

.. conda:recipe:: r-coenocliner
   :replaces_section_title:

   Simulate species occurrence and abundances \(counts\) along gradients.

   :homepage: https://github.com/gavinsimpson/coenocliner/
   :license: GPL2 / GPL-2
   :recipe: /`r-coenocliner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-coenocliner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-coenocliner/meta.yaml>`_

   


.. conda:package:: r-coenocliner

   |downloads_r-coenocliner| |docker_r-coenocliner|

   :versions: 0.2_2

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 

   :required~by: |required_by_r-coenocliner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-coenocliner

   and update with::

      conda update r-coenocliner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-coenocliner


.. |required_by_r-coenocliner| conda:required_by:: r-coenocliner
.. |downloads_r-coenocliner| image:: https://img.shields.io/conda/dn/bioconda/r-coenocliner.svg?style=flat
   :alt:   (downloads)
.. |docker_r-coenocliner| image:: https://quay.io/repository/biocontainers/r-coenocliner/status
   :target: https://quay.io/repository/biocontainers/r-coenocliner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-coenocliner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-coenocliner/README.html

