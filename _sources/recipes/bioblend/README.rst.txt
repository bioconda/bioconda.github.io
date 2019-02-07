.. title:: Package Recipe 'bioblend'
.. highlight: bash


bioblend
========

.. conda:recipe:: bioblend
   :replaces_section_title:

   CloudMan and Galaxy API library

   :homepage: http://bioblend.readthedocs.org/
   :license: MIT / MIT License
   :recipe: /`bioblend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioblend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioblend/meta.yaml>`_

   


.. conda:package:: bioblend

   |downloads_bioblend| |docker_bioblend|

   :versions: 0.12.0, 0.11.0, 0.10.0, 0.8.0, 0.7.0

   :depends: :conda:package:`boto` >=2.9.7 :conda:package:`python`  :conda:package:`pyyaml`  :conda:package:`requests` >=2.4.3,!=2.12.0,!=2.12.1 :conda:package:`requests-toolbelt`  :conda:package:`six`  

   :required~by: |required_by_bioblend|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioblend

   and update with::

      conda update bioblend

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioblend


.. |required_by_bioblend| conda:required_by:: bioblend
.. |downloads_bioblend| image:: https://img.shields.io/conda/dn/bioconda/bioblend.svg?style=flat
   :alt:   (downloads)
.. |docker_bioblend| image:: https://quay.io/repository/biocontainers/bioblend/status
   :target: https://quay.io/repository/biocontainers/bioblend







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioblend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioblend/README.html

