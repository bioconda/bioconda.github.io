.. title:: Package Recipe 'visceral-evaluatesegmentation'
.. highlight: bash


visceral-evaluatesegmentation
=============================

.. conda:recipe:: visceral-evaluatesegmentation
   :replaces_section_title:

   EvaluateSegmentation is a tool that compares two volumes \(a test segmentation and a ground truth segmentation\) using 22 different metrics that were selected as a result of a comprehensive research into the metrics used in the medical volume segmentations.

   :homepage: https://github.com/Visceral-Project/EvaluateSegmentation
   :license: Apache License, Version 2.0
   :recipe: /`visceral-evaluatesegmentation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visceral-evaluatesegmentation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visceral-evaluatesegmentation/meta.yaml>`_

   


.. conda:package:: visceral-evaluatesegmentation

   |downloads_visceral-evaluatesegmentation| |docker_visceral-evaluatesegmentation|

   :versions: 2015.07.03, 2015.07.02

   :depends: :conda:package:`jpeg` >=9c,<10a :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libitk`  

   :required~by: |required_by_visceral-evaluatesegmentation|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install visceral-evaluatesegmentation

   and update with::

      conda update visceral-evaluatesegmentation

   or use the docker container::

      docker pull quay.io/repository/biocontainers/visceral-evaluatesegmentation


.. |required_by_visceral-evaluatesegmentation| conda:required_by:: visceral-evaluatesegmentation
.. |downloads_visceral-evaluatesegmentation| image:: https://img.shields.io/conda/dn/bioconda/visceral-evaluatesegmentation.svg?style=flat
   :alt:   (downloads)
.. |docker_visceral-evaluatesegmentation| image:: https://quay.io/repository/biocontainers/visceral-evaluatesegmentation/status
   :target: https://quay.io/repository/biocontainers/visceral-evaluatesegmentation







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/visceral-evaluatesegmentation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/visceral-evaluatesegmentation/README.html

