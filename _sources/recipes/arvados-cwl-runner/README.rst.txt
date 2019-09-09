:orphan:  .. only available via index, not via toctree

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

   :versions: 1.4.0-0, 1.3.3.20190419203205-0, 1.3.2.20190419203205-0, 1.3.1.20190419203205-0, 1.3.1.20190301150258-0, 1.3.0.20190221150417-0, 1.3.0.20190206223817-0, 1.3.0.20181218191458-0, 1.0.20180216164101-1, 1.0.20180216164101-0, 1.0.20171211211613-0, 1.0.20171010180436-1, 1.0.20171010180436-0, 1.0.20170914161842-0, 1.0.20170414202629-0, 1.0.20170327202303-0, 1.0.20170216151734-0, 1.0.20161230191227-0, 1.0.20161123235904-0, 1.0.20161031135838-0, 1.0.20160715171107-0, 1.0.20160502202716-0, 1.0.20160421150319-0, 1.0.20160411202258-0, 1.0.20160406195023-0, 1.0.20160401183214-0, 1.0.20160318143738-0, 1.0.20160314171956-0, 1.0.20160311144647-0, 1.0.20160323-0
   
   :depends arvados-python-client: >=1.3.1.20190301150258
   :depends cwltool: >=1.0.20181217162649
   :depends python: 
   :depends ruamel.yaml: >=0.15.54
   :depends schema-salad: >=3.0.20181129082112
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arvados-cwl-runner

   and update with::

      conda update arvados-cwl-runner

   or use the docker container::

      docker pull quay.io/biocontainers/arvados-cwl-runner:<tag>

   (see `arvados-cwl-runner/tags`_ for valid values for ``<tag>``)


.. |downloads_arvados-cwl-runner| image:: https://img.shields.io/conda/dn/bioconda/arvados-cwl-runner.svg?style=flat
   :target: https://anaconda.org/bioconda/arvados-cwl-runner
   :alt:   (downloads)
.. |docker_arvados-cwl-runner| image:: https://quay.io/repository/biocontainers/arvados-cwl-runner/status
   :target: https://quay.io/repository/biocontainers/arvados-cwl-runner
.. _`arvados-cwl-runner/tags`: https://quay.io/repository/biocontainers/arvados-cwl-runner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-cwl-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-cwl-runner/README.html