.. title:: Package Recipe 'sistr_cmd'
.. highlight: bash


sistr_cmd
=========

.. conda:recipe:: sistr_cmd
   :replaces_section_title:

   Salmonella In Silico Typing Resource \(SISTR\) commandline tool for serovar prediction

   :homepage: https://github.com/peterk87/sistr_cmd/
   :license: Apache
   :recipe: /`sistr_cmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistr_cmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistr_cmd/meta.yaml>`_

   


.. conda:package:: sistr_cmd

   |downloads_sistr_cmd| |docker_sistr_cmd|

   :versions: 1.0.2, 0.3.6, 0.3.4, 0.3.3, 0.3.1

   :depends: :conda:package:`blast`  :conda:package:`mafft`  :conda:package:`mash`  :conda:package:`numpy` >=1.11.1 :conda:package:`pandas` >=0.18.1 :conda:package:`pytables` >=3.3.0 :conda:package:`python` 2.7* 

   :required~by: |required_by_sistr_cmd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sistr_cmd

   and update with::

      conda update sistr_cmd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sistr_cmd


.. |required_by_sistr_cmd| conda:required_by:: sistr_cmd
.. |downloads_sistr_cmd| image:: https://img.shields.io/conda/dn/bioconda/sistr_cmd.svg?style=flat
   :alt:   (downloads)
.. |docker_sistr_cmd| image:: https://quay.io/repository/biocontainers/sistr_cmd/status
   :target: https://quay.io/repository/biocontainers/sistr_cmd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sistr_cmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sistr_cmd/README.html

