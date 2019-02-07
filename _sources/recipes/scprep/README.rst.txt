.. title:: Package Recipe 'scprep'
.. highlight: bash


scprep
======

.. conda:recipe:: scprep
   :replaces_section_title:

   scprep

   :homepage: https://github.com/KrishnaswamyLab/scprep
   :license: GPL2 / GNU General Public Version 2
   :recipe: /`scprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scprep/meta.yaml>`_

   


.. conda:package:: scprep

   |downloads_scprep| |docker_scprep|

   :versions: 0.8.1, 0.7.1

   :depends: :conda:package:`decorator`  :conda:package:`future`  :conda:package:`numpy` >=1.10.0 :conda:package:`pandas`  :conda:package:`python`  :conda:package:`scikit-learn` >=0.19.1 :conda:package:`scipy` >=0.18.0 :conda:package:`seaborn`  

   :required~by: |required_by_scprep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scprep

   and update with::

      conda update scprep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scprep


.. |required_by_scprep| conda:required_by:: scprep
.. |downloads_scprep| image:: https://img.shields.io/conda/dn/bioconda/scprep.svg?style=flat
   :alt:   (downloads)
.. |docker_scprep| image:: https://quay.io/repository/biocontainers/scprep/status
   :target: https://quay.io/repository/biocontainers/scprep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scprep/README.html

