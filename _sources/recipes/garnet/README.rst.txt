.. title:: Package Recipe 'garnet'
.. highlight: bash


garnet
======

.. conda:recipe:: garnet
   :replaces_section_title:

   GarNet uses gene expression and epigenetic data to impute transcription factors \(TFs\) that played an important role in a biological system.

   :homepage: https://github.com/fraenkel-lab/GarNet
   :license: MIT / MIT
   :recipe: /`garnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnet/meta.yaml>`_

   


.. conda:package:: garnet

   |downloads_garnet| |docker_garnet|

   :versions: 0.4.5, 0.4.3, 0.4.0, 0.2.20, 0.2.17

   :depends: :conda:package:`intervaltree`  :conda:package:`jinja2`  :conda:package:`libgcc`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 3.5* :conda:package:`statsmodels`  

   :required~by: |required_by_garnet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install garnet

   and update with::

      conda update garnet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/garnet


.. |required_by_garnet| conda:required_by:: garnet
.. |downloads_garnet| image:: https://img.shields.io/conda/dn/bioconda/garnet.svg?style=flat
   :alt:   (downloads)
.. |docker_garnet| image:: https://quay.io/repository/biocontainers/garnet/status
   :target: https://quay.io/repository/biocontainers/garnet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/garnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/garnet/README.html

