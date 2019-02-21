:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cwltest'
.. highlight: bash

cwltest
=======

.. conda:recipe:: cwltest
   :replaces_section_title:

   Framework for testing CWL tools and workflows

   :homepage: https://github.com/common-workflow-language/cwltest
   :license: Apache License 2.0
   :recipe: /`cwltest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cwltest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cwltest/meta.yaml>`_

   


.. conda:package:: cwltest

   |downloads_cwltest| |docker_cwltest|

   :versions: 1.0.20180601100346-0, 1.0.20180209171722-1, 1.0.20180209171722-0, 1.0.20170214185319-0, 1.0.20161124105442-0, 1.0.20160907111242-1, 1.0.20160907111242-0
   
   :depends cachecontrol: <0.12,>=0.11.7
   
   :depends futures: >=3.0.5
   
   :depends junit-xml: >=1.8
   
   :depends mistune: <0.8,>=0.7.3
   
   :depends python: 
   
   :depends schema-salad: >=1.14
   
   :depends subprocess32: >=3.5.0
   
   :depends typing: >=3.5.3,<3.6
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cwltest

   and update with::

      conda update cwltest

   or use the docker container::

      docker pull quay.io/biocontainers/cwltest:<tag>

   (see `cwltest/tags`_ for valid values for ``<tag>``)


.. |downloads_cwltest| image:: https://img.shields.io/conda/dn/bioconda/cwltest.svg?style=flat
   :alt:   (downloads)
.. |docker_cwltest| image:: https://quay.io/repository/biocontainers/cwltest/status
   :target: https://quay.io/repository/biocontainers/cwltest
.. _`cwltest/tags`: https://quay.io/repository/biocontainers/cwltest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cwltest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cwltest/README.html