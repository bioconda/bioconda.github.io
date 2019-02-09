.. title:: Package Recipe 't-coffee'
.. highlight: bash


t-coffee
========

.. conda:recipe:: t-coffee
   :replaces_section_title:

   A collection of tools for Multiple Alignments of DNA\, RNA\, Protein Sequence

   :homepage: https://github.com/cbcrg/tcoffee
   :license: GPL
   :recipe: /`t-coffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t-coffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t-coffee/meta.yaml>`_
   :links: doi: :doi:`10.1006/jmbi.2000.4042`

   


.. conda:package:: t-coffee

   |downloads_t-coffee| |docker_t-coffee|

   :versions: 12.00.7fb08c2, 11.00.8cbe486

   :depends: :conda:package:`blast`  :conda:package:`clustalo`  :conda:package:`clustalw`  :conda:package:`libgfortran` >=3.0 :conda:package:`mafft`  :conda:package:`muscle`  :conda:package:`viennarna`  

   :required~by: |required_by_t-coffee|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install t-coffee

   and update with::

      conda update t-coffee

   or use the docker container::

      docker pull quay.io/repository/biocontainers/t-coffee


.. |required_by_t-coffee| conda:required_by:: t-coffee
.. |downloads_t-coffee| image:: https://img.shields.io/conda/dn/bioconda/t-coffee.svg?style=flat
   :alt:   (downloads)
.. |docker_t-coffee| image:: https://quay.io/repository/biocontainers/t-coffee/status
   :target: https://quay.io/repository/biocontainers/t-coffee







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t-coffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t-coffee/README.html

