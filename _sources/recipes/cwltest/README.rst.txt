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

   :versions: 1.0.20180601100346, 1.0.20180209171722, 1.0.20170214185319, 1.0.20161124105442, 1.0.20160907111242

   :depends: :conda:package:`cachecontrol` <0.12,>=0.11.7 :conda:package:`futures` >=3.0.5 :conda:package:`junit-xml` >=1.8 :conda:package:`mistune` <0.8,>=0.7.3 :conda:package:`python`  :conda:package:`schema-salad` >=1.14 :conda:package:`subprocess32` >=3.5.0 :conda:package:`typing` >=3.5.3,<3.6 

   :required~by: |required_by_cwltest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cwltest

   and update with::

      conda update cwltest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cwltest


.. |required_by_cwltest| conda:required_by:: cwltest
.. |downloads_cwltest| image:: https://img.shields.io/conda/dn/bioconda/cwltest.svg?style=flat
   :alt:   (downloads)
.. |docker_cwltest| image:: https://quay.io/repository/biocontainers/cwltest/status
   :target: https://quay.io/repository/biocontainers/cwltest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cwltest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cwltest/README.html

