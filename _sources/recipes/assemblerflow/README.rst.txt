.. title:: Package Recipe 'assemblerflow'
.. highlight: bash


assemblerflow
=============

.. conda:recipe:: assemblerflow
   :replaces_section_title:

   A Nextflow pipeline assembler for genomics. Pick your modules. Assemble them. Run the pipeline.

   :homepage: https://github.com/ODiogoSilva/assemblerflow
   :documentation: http://assemblerflow.readthedocs.io/en/latest/
   
   :developer docs: http://assemblerflow.readthedocs.io/en/latest/
   :license: GPL3 / GPL3
   :recipe: /`assemblerflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblerflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblerflow/meta.yaml>`_

   


.. conda:package:: assemblerflow

   |downloads_assemblerflow| |docker_assemblerflow|

   :versions: 1.1.0.post3, 1.1.0.post1, 1.0.1

   :depends: :conda:package:`argparse`  :conda:package:`jinja2`  :conda:package:`nextflow` >=0.27 :conda:package:`python` 3.5* 

   :required~by: |required_by_assemblerflow|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install assemblerflow

   and update with::

      conda update assemblerflow

   or use the docker container::

      docker pull quay.io/repository/biocontainers/assemblerflow


.. |required_by_assemblerflow| conda:required_by:: assemblerflow
.. |downloads_assemblerflow| image:: https://img.shields.io/conda/dn/bioconda/assemblerflow.svg?style=flat
   :alt:   (downloads)
.. |docker_assemblerflow| image:: https://quay.io/repository/biocontainers/assemblerflow/status
   :target: https://quay.io/repository/biocontainers/assemblerflow







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblerflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblerflow/README.html

