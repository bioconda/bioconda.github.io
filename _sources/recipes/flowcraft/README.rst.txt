.. title:: Package Recipe 'flowcraft'
.. highlight: bash


flowcraft
=========

.. conda:recipe:: flowcraft
   :replaces_section_title:

   A Nextflow pipeline assembler for genomics. Pick your modules. Assemble them. Run the pipeline.

   :homepage: https://github.com/assemblerflow/flowcraft
   :documentation: http://assemblerflow.readthedocs.io/en/latest/
   
   :developer docs: http://assemblerflow.readthedocs.io/en/latest/
   :license: GPL3 / GPL3
   :recipe: /`flowcraft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flowcraft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flowcraft/meta.yaml>`_

   


.. conda:package:: flowcraft

   |downloads_flowcraft| |docker_flowcraft|

   :versions: 1.4.0, 1.3.1, 1.3.0, 1.2.2, 1.2.1, 1.2.0.post1, 1.2.0

   :depends: :conda:package:`argparse`  :conda:package:`jinja2`  :conda:package:`nextflow` >=0.28 :conda:package:`pympler`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`python-dateutil`  :conda:package:`requests`  

   :required~by: |required_by_flowcraft|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flowcraft

   and update with::

      conda update flowcraft

   or use the docker container::

      docker pull quay.io/repository/biocontainers/flowcraft


.. |required_by_flowcraft| conda:required_by:: flowcraft
.. |downloads_flowcraft| image:: https://img.shields.io/conda/dn/bioconda/flowcraft.svg?style=flat
   :alt:   (downloads)
.. |docker_flowcraft| image:: https://quay.io/repository/biocontainers/flowcraft/status
   :target: https://quay.io/repository/biocontainers/flowcraft







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flowcraft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flowcraft/README.html

