.. title:: Package Recipe 'openmg'
.. highlight: bash


openmg
======

.. conda:recipe:: openmg
   :replaces_section_title:

   Exhaustive generation of chemical structures

   :homepage: https://sourceforge.net/projects/openmg
   :license: GNU General Public License
   :recipe: /`openmg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openmg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openmg/meta.yaml>`_

   


.. conda:package:: openmg

   |downloads_openmg| |docker_openmg|

   :versions: 0.1

   :depends: :conda:package:`java-jdk` >=6 

   :required~by: |required_by_openmg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openmg

   and update with::

      conda update openmg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/openmg


.. |required_by_openmg| conda:required_by:: openmg
.. |downloads_openmg| image:: https://img.shields.io/conda/dn/bioconda/openmg.svg?style=flat
   :alt:   (downloads)
.. |docker_openmg| image:: https://quay.io/repository/biocontainers/openmg/status
   :target: https://quay.io/repository/biocontainers/openmg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openmg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openmg/README.html

