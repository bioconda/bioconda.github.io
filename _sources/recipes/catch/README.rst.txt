.. title:: Package Recipe 'catch'
.. highlight: bash


catch
=====

.. conda:recipe:: catch
   :replaces_section_title:

   A package for designing compact and comprehensive probe sets.

   :homepage: https://github.com/broadinstitute/catch
   :license: MIT / MIT
   :recipe: /`catch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch/meta.yaml>`_
   :links: doi: :doi:`10.1101/279570`

   


.. conda:package:: catch

   |downloads_catch| |docker_catch|

   :versions: 1.1.0, 1.0.0

   :depends: :conda:package:`numpy` >=1.9.0 :conda:package:`python` >=3 :conda:package:`scipy` >=1.0.0 

   :required~by: |required_by_catch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install catch

   and update with::

      conda update catch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/catch


.. |required_by_catch| conda:required_by:: catch
.. |downloads_catch| image:: https://img.shields.io/conda/dn/bioconda/catch.svg?style=flat
   :alt:   (downloads)
.. |docker_catch| image:: https://quay.io/repository/biocontainers/catch/status
   :target: https://quay.io/repository/biocontainers/catch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/catch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/catch/README.html

