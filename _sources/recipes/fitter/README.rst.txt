.. title:: Package Recipe 'fitter'
.. highlight: bash


fitter
======

.. conda:recipe:: fitter
   :replaces_section_title:

   A tool to fit data to many distributions and best one\(s\)

   :homepage: http://github.com/cokelaer/fitter
   :license: GNU Library or Lesser General Public License (LGPL)
   :recipe: /`fitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fitter/meta.yaml>`_

   


.. conda:package:: fitter

   |downloads_fitter| |docker_fitter|

   :versions: 1.0.9, 1.0.8, 1.0.4

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python`  :conda:package:`scipy`  

   :required~by: |required_by_fitter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fitter

   and update with::

      conda update fitter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fitter


.. |required_by_fitter| conda:required_by:: fitter
.. |downloads_fitter| image:: https://img.shields.io/conda/dn/bioconda/fitter.svg?style=flat
   :alt:   (downloads)
.. |docker_fitter| image:: https://quay.io/repository/biocontainers/fitter/status
   :target: https://quay.io/repository/biocontainers/fitter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fitter/README.html

