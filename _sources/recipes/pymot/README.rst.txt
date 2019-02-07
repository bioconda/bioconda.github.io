.. title:: Package Recipe 'pymot'
.. highlight: bash


pymot
=====

.. conda:recipe:: pymot
   :replaces_section_title:

   This is a python implementation which determines the MOTP and MOTA metrics from a set of ground truth tracks and a set of hypothesis tracks given by the tracker to be evaluated.

   :homepage: https://github.com/Videmo/pymot
   :license: All Rights Reserved
   :recipe: /`pymot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymot/meta.yaml>`_

   


.. conda:package:: pymot

   |downloads_pymot| |docker_pymot|

   :versions: 13.09.2016

   :depends: :conda:package:`munkres`  :conda:package:`python` 2.7* 

   :required~by: |required_by_pymot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymot

   and update with::

      conda update pymot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pymot


.. |required_by_pymot| conda:required_by:: pymot
.. |downloads_pymot| image:: https://img.shields.io/conda/dn/bioconda/pymot.svg?style=flat
   :alt:   (downloads)
.. |docker_pymot| image:: https://quay.io/repository/biocontainers/pymot/status
   :target: https://quay.io/repository/biocontainers/pymot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymot/README.html

