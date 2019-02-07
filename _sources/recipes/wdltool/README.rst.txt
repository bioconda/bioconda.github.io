.. title:: Package Recipe 'wdltool'
.. highlight: bash


wdltool
=======

.. conda:recipe:: wdltool
   :replaces_section_title:

   Command line utilities for interacting with WDL

   :homepage: https://github.com/broadinstitute/wdltool
   :license: BSD
   :recipe: /`wdltool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wdltool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wdltool/meta.yaml>`_

   


.. conda:package:: wdltool

   |downloads_wdltool| |docker_wdltool|

   :versions: 0.14, 0.9, 0.6

   :depends: :conda:package:`openjdk` >=8 :conda:package:`python` 2.7* 

   :required~by: |required_by_wdltool|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wdltool

   and update with::

      conda update wdltool

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wdltool


.. |required_by_wdltool| conda:required_by:: wdltool
.. |downloads_wdltool| image:: https://img.shields.io/conda/dn/bioconda/wdltool.svg?style=flat
   :alt:   (downloads)
.. |docker_wdltool| image:: https://quay.io/repository/biocontainers/wdltool/status
   :target: https://quay.io/repository/biocontainers/wdltool







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wdltool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wdltool/README.html

