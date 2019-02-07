.. title:: Package Recipe 'pispino'
.. highlight: bash


pispino
=======

.. conda:recipe:: pispino
   :replaces_section_title:

   PISPINO \(PIpits SPIN\-Off tools\)\: Bioinformatics toolkits for processing NGS data

   :homepage: https://github.com/hsgweon/pispino
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`pispino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pispino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pispino/meta.yaml>`_

   


.. conda:package:: pispino

   |downloads_pispino| |docker_pispino|

   :versions: 1.1, 1.0

   :depends: :conda:package:`fastx_toolkit`  :conda:package:`python` 2.7* :conda:package:`vsearch`  

   :required~by: |required_by_pispino|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pispino

   and update with::

      conda update pispino

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pispino


.. |required_by_pispino| conda:required_by:: pispino
.. |downloads_pispino| image:: https://img.shields.io/conda/dn/bioconda/pispino.svg?style=flat
   :alt:   (downloads)
.. |docker_pispino| image:: https://quay.io/repository/biocontainers/pispino/status
   :target: https://quay.io/repository/biocontainers/pispino







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pispino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pispino/README.html

