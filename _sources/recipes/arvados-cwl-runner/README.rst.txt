.. title:: Package Recipe 'arvados-cwl-runner'
.. highlight: bash


arvados-cwl-runner
==================

.. conda:recipe:: arvados-cwl-runner
   :replaces_section_title:

   Arvados Common Workflow Language runner

   :homepage: https://github.com/curoverse/arvados/tree/master/sdk/cwl
   :license: Apache 2.0
   :recipe: /`arvados-cwl-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cwl-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cwl-runner/meta.yaml>`_

   


.. conda:package:: arvados-cwl-runner

   |downloads_arvados-cwl-runner| |docker_arvados-cwl-runner|

   :versions: 1.3.0.20181218191458, 1.0.20180216164101, 1.0.20171211211613, 1.0.20171010180436, 1.0.20170914161842, 1.0.20170414202629, 1.0.20170327202303, 1.0.20170216151734, 1.0.20161230191227, 1.0.20161123235904, 1.0.20161031135838, 1.0.20160715171107, 1.0.20160502202716, 1.0.20160421150319, 1.0.20160411202258, 1.0.20160406195023, 1.0.20160401183214, 1.0.20160318143738, 1.0.20160314171956, 1.0.20160311144647, 1.0.20160323

   :depends: :conda:package:`arvados-python-client` >=1.2.1.20181130020805 :conda:package:`cwltool` >=1.0.20181217162649 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`ruamel.yaml` >=0.15.54 :conda:package:`schema-salad` >=3.0.20181129082112 

   :required~by: |required_by_arvados-cwl-runner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arvados-cwl-runner

   and update with::

      conda update arvados-cwl-runner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/arvados-cwl-runner


.. |required_by_arvados-cwl-runner| conda:required_by:: arvados-cwl-runner
.. |downloads_arvados-cwl-runner| image:: https://img.shields.io/conda/dn/bioconda/arvados-cwl-runner.svg?style=flat
   :alt:   (downloads)
.. |docker_arvados-cwl-runner| image:: https://quay.io/repository/biocontainers/arvados-cwl-runner/status
   :target: https://quay.io/repository/biocontainers/arvados-cwl-runner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-cwl-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-cwl-runner/README.html

