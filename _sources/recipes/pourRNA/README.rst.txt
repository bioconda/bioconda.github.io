.. title:: Package Recipe 'pourrna'
.. highlight: bash


pourrna
=======

.. conda:recipe:: pourRNA
   :replaces_section_title:

   Compute local minima and respective transition rates of an RNA energy landscape.

   :homepage: https://github.com/ViennaRNA/pourRNA/
   :license: GPLv2
   :recipe: /`pourRNA <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pourRNA>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pourRNA/meta.yaml>`_

   


.. conda:package:: pourrna

   |downloads_pourrna| |docker_pourrna|

   :versions: 1.0.1

   :depends: :conda:package:`libcxx` >=4.0.1 :conda:package:`viennarna` >=2.4.11,<3.0.0 

   :required~by: |required_by_pourrna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pourrna

   and update with::

      conda update pourrna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pourrna


.. |required_by_pourrna| conda:required_by:: pourrna
.. |downloads_pourrna| image:: https://img.shields.io/conda/dn/bioconda/pourrna.svg?style=flat
   :alt:   (downloads)
.. |docker_pourrna| image:: https://quay.io/repository/biocontainers/pourrna/status
   :target: https://quay.io/repository/biocontainers/pourrna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pourrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pourrna/README.html

