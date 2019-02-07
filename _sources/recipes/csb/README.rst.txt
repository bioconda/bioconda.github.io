.. title:: Package Recipe 'csb'
.. highlight: bash


csb
===

.. conda:recipe:: csb
   :replaces_section_title:

   Computational Structural Biology Toolbox

   :homepage: http://github.com/csb-toolbox
   :license: MIT / MIT License
   :recipe: /`csb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csb/meta.yaml>`_

   


.. conda:package:: csb

   |downloads_csb| |docker_csb|

   :versions: 1.2.5

   :depends: :conda:package:`libgcc`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scipy`  

   :required~by: |required_by_csb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install csb

   and update with::

      conda update csb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/csb


.. |required_by_csb| conda:required_by:: csb
.. |downloads_csb| image:: https://img.shields.io/conda/dn/bioconda/csb.svg?style=flat
   :alt:   (downloads)
.. |docker_csb| image:: https://quay.io/repository/biocontainers/csb/status
   :target: https://quay.io/repository/biocontainers/csb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/csb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/csb/README.html

