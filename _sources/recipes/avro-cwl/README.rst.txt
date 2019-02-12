:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'avro-cwl'
.. highlight: bash

avro-cwl
========

.. conda:recipe:: avro-cwl
   :replaces_section_title:

   Avro is a serialization and RPC framework. This package is a fork of regular avro made by the CWL team in order to fix some issues \(https\:\/\/github.com\/common\-workflow\-language\/cwltool\/issues\/524\)

   :homepage: https://pypi.python.org/pypi?:action=display&name=avro-cwl
   :license: APACHE / Apache 2.0
   :recipe: /`avro-cwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-cwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-cwl/meta.yaml>`_

   


.. conda:package:: avro-cwl

   |downloads_avro-cwl| |docker_avro-cwl|

   :versions: 1.8.9-0, 1.8.4-1, 1.8.4-0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install avro-cwl

   and update with::

      conda update avro-cwl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/avro-cwl:<tag>

   (see `avro-cwl/tags`_ for valid values for ``<tag>``)


.. |downloads_avro-cwl| image:: https://img.shields.io/conda/dn/bioconda/avro-cwl.svg?style=flat
   :alt:   (downloads)
.. |docker_avro-cwl| image:: https://quay.io/repository/biocontainers/avro-cwl/status
   :target: https://quay.io/repository/biocontainers/avro-cwl
.. _`avro-cwl/tags`: https://quay.io/repository/biocontainers/avro-cwl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/avro-cwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/avro-cwl/README.html