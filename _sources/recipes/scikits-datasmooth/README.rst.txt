.. title:: Package Recipe 'scikits-datasmooth'
.. highlight: bash


scikits-datasmooth
==================

.. conda:recipe:: scikits-datasmooth
   :replaces_section_title:

   Scikits data smoothing package

   :homepage: https://github.com/jjstickel/scikit-datasmooth/
   :license: BSD / BSD
   :recipe: /`scikits-datasmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scikits-datasmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scikits-datasmooth/meta.yaml>`_

   


.. conda:package:: scikits-datasmooth

   |downloads_scikits-datasmooth| |docker_scikits-datasmooth|

   :versions: 0.7.1, 0.7.0

   :depends: :conda:package:`cvxopt`  :conda:package:`numpy`  :conda:package:`python`  :conda:package:`scipy`  

   :required~by: |required_by_scikits-datasmooth|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scikits-datasmooth

   and update with::

      conda update scikits-datasmooth

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scikits-datasmooth


.. |required_by_scikits-datasmooth| conda:required_by:: scikits-datasmooth
.. |downloads_scikits-datasmooth| image:: https://img.shields.io/conda/dn/bioconda/scikits-datasmooth.svg?style=flat
   :alt:   (downloads)
.. |docker_scikits-datasmooth| image:: https://quay.io/repository/biocontainers/scikits-datasmooth/status
   :target: https://quay.io/repository/biocontainers/scikits-datasmooth







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scikits-datasmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scikits-datasmooth/README.html

