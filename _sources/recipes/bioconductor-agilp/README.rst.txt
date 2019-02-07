.. title:: Package Recipe 'bioconductor-agilp'
.. highlight: bash


bioconductor-agilp
==================

.. conda:recipe:: bioconductor-agilp
   :replaces_section_title:

   More about what it does \(maybe more than one line\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/agilp.html
   :license: GPL-3
   :recipe: /`bioconductor-agilp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agilp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agilp/meta.yaml>`_

   


.. conda:package:: bioconductor-agilp

   |downloads_bioconductor-agilp| |docker_bioconductor-agilp|

   :versions: 3.14.0, 3.12.0, 3.10.0, 3.8.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-agilp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-agilp

   and update with::

      conda update bioconductor-agilp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-agilp


.. |required_by_bioconductor-agilp| conda:required_by:: bioconductor-agilp
.. |downloads_bioconductor-agilp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-agilp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-agilp| image:: https://quay.io/repository/biocontainers/bioconductor-agilp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-agilp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-agilp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-agilp/README.html

