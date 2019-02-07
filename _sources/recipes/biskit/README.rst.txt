.. title:: Package Recipe 'biskit'
.. highlight: bash


biskit
======

.. conda:recipe:: biskit
   :replaces_section_title:

   A Python platform for structural bioinformatics

   :homepage: http://biskit.pasteur.fr
   :developer docs: https://github.com/graik/biskit
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`biskit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biskit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biskit/meta.yaml>`_

   Biskit is a modular\, object\-oriented Python library for structural bioinformatics research.


.. conda:package:: biskit

   |downloads_biskit| |docker_biskit|

   :versions: 2.4.3

   :depends: :conda:package:`biopython`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scipy`  

   :required~by: |required_by_biskit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biskit

   and update with::

      conda update biskit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biskit


.. |required_by_biskit| conda:required_by:: biskit
.. |downloads_biskit| image:: https://img.shields.io/conda/dn/bioconda/biskit.svg?style=flat
   :alt:   (downloads)
.. |docker_biskit| image:: https://quay.io/repository/biocontainers/biskit/status
   :target: https://quay.io/repository/biocontainers/biskit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biskit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biskit/README.html

