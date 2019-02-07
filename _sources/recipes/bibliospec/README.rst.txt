.. title:: Package Recipe 'bibliospec'
.. highlight: bash


bibliospec
==========

.. conda:recipe:: bibliospec
   :replaces_section_title:

   The BiblioSpec Spetral Library tool suite

   :homepage: https://skyline.ms/project/home/software/BiblioSpec/begin.view?
   :license: Apache 2.0
   :recipe: /`bibliospec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bibliospec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bibliospec/meta.yaml>`_

   


.. conda:package:: bibliospec

   |downloads_bibliospec| |docker_bibliospec|

   :versions: 1.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_bibliospec|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bibliospec

   and update with::

      conda update bibliospec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bibliospec


.. |required_by_bibliospec| conda:required_by:: bibliospec
.. |downloads_bibliospec| image:: https://img.shields.io/conda/dn/bioconda/bibliospec.svg?style=flat
   :alt:   (downloads)
.. |docker_bibliospec| image:: https://quay.io/repository/biocontainers/bibliospec/status
   :target: https://quay.io/repository/biocontainers/bibliospec







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bibliospec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bibliospec/README.html

