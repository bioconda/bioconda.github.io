.. title:: Package Recipe 'antarna'
.. highlight: bash


antarna
=======

.. conda:recipe:: antarna
   :replaces_section_title:

   antaRNA is a python based implementation of ant\-colony optimization of the RNA inverse folding problem.

   :homepage: https://github.com/RobertKleinkauf/antarna
   :license: MIT
   :recipe: /`antarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antarna/meta.yaml>`_
   :links: biotools: :biotools:`antarna`

   


.. conda:package:: antarna

   |downloads_antarna| |docker_antarna|

   :versions: 2.0.1.2

   :depends: :conda:package:`networkx`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scipy`  :conda:package:`uuid`  :conda:package:`viennarna`  

   :required~by: |required_by_antarna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install antarna

   and update with::

      conda update antarna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/antarna


.. |required_by_antarna| conda:required_by:: antarna
.. |downloads_antarna| image:: https://img.shields.io/conda/dn/bioconda/antarna.svg?style=flat
   :alt:   (downloads)
.. |docker_antarna| image:: https://quay.io/repository/biocontainers/antarna/status
   :target: https://quay.io/repository/biocontainers/antarna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/antarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/antarna/README.html

