:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequana_pipetools'
.. highlight: bash

sequana_pipetools
=================

.. conda:recipe:: sequana_pipetools
   :replaces_section_title:
   :noindex:

   A set of tools to help building or using Sequana pipelines

   :homepage: https://github.com/sequana/sequana_pipetools
   :license: BSD / BSD 3-clause
   :recipe: /`sequana_pipetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana_pipetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana_pipetools/meta.yaml>`_

   


.. conda:package:: sequana_pipetools

   |downloads_sequana_pipetools| |docker_sequana_pipetools|

   :versions:
      
      

      ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.6-0``,  ``0.7.5-0``

      

   
   :depends deprecated: 
   :depends easydev: 
   :depends importlib_resources: 
   :depends parse: 
   :depends pykwalify: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends ruamel.yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequana_pipetools

   and update with::

      conda update sequana_pipetools

   or use the docker container::

      docker pull quay.io/biocontainers/sequana_pipetools:<tag>

   (see `sequana_pipetools/tags`_ for valid values for ``<tag>``)


.. |downloads_sequana_pipetools| image:: https://img.shields.io/conda/dn/bioconda/sequana_pipetools.svg?style=flat
   :target: https://anaconda.org/bioconda/sequana_pipetools
   :alt:   (downloads)
.. |docker_sequana_pipetools| image:: https://quay.io/repository/biocontainers/sequana_pipetools/status
   :target: https://quay.io/repository/biocontainers/sequana_pipetools
.. _`sequana_pipetools/tags`: https://quay.io/repository/biocontainers/sequana_pipetools?tab=tags


.. raw:: html

    <script>
        var package = "sequana_pipetools";
        var versions = ["0.8.1","0.8.0","0.7.6","0.7.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequana_pipetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequana_pipetools/README.html