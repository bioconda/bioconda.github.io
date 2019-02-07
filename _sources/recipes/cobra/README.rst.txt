.. title:: Package Recipe 'cobra'
.. highlight: bash


cobra
=====

.. conda:recipe:: cobra
   :replaces_section_title:

   COBRApy is a package for constraint\-based modeling of biological networks

   :homepage: https://opencobra.github.io/cobrapy
   :license: GNU Lesser General Public License v2 or later (LGPLv2+) or GNU General Public License v2 or later (GPLv2+)
   :recipe: /`cobra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra/meta.yaml>`_

   


.. conda:package:: cobra

   |downloads_cobra| |docker_cobra|

   :versions: 0.10.1, 0.4.0, 0.4.0b6

   :depends: :conda:package:`future`  :conda:package:`numpy` >=1.6 :conda:package:`optlang` >=1.2.5 :conda:package:`pandas` >=0.17.0 :conda:package:`python` 2.7* :conda:package:`ruamel.yaml` <0.15 :conda:package:`six`  :conda:package:`swiglpk`  :conda:package:`tabulate`  

   :required~by: |required_by_cobra|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cobra

   and update with::

      conda update cobra

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cobra


.. |required_by_cobra| conda:required_by:: cobra
.. |downloads_cobra| image:: https://img.shields.io/conda/dn/bioconda/cobra.svg?style=flat
   :alt:   (downloads)
.. |docker_cobra| image:: https://quay.io/repository/biocontainers/cobra/status
   :target: https://quay.io/repository/biocontainers/cobra







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cobra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cobra/README.html

