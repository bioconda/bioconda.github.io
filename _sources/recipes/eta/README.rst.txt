.. title:: Package Recipe 'eta'
.. highlight: bash


eta
===

.. conda:recipe:: eta
   :replaces_section_title:

   ETA Progress bar for command\-line utilities

   :homepage: http://github.com/mbreese/eta/
   :license: BSD
   :recipe: /`eta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eta/meta.yaml>`_

   


.. conda:package:: eta

   |downloads_eta| |docker_eta|

   :versions: 0.9.7

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_eta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eta

   and update with::

      conda update eta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/eta


.. |required_by_eta| conda:required_by:: eta
.. |downloads_eta| image:: https://img.shields.io/conda/dn/bioconda/eta.svg?style=flat
   :alt:   (downloads)
.. |docker_eta| image:: https://quay.io/repository/biocontainers/eta/status
   :target: https://quay.io/repository/biocontainers/eta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eta/README.html

