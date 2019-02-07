.. title:: Package Recipe 'epydoc'
.. highlight: bash


epydoc
======

.. conda:recipe:: epydoc
   :replaces_section_title:

   Edward Loper\'s API Documentation Generation Tool

   :homepage: http://epydoc.sourceforge.net
   :license: MIT License
   :recipe: /`epydoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epydoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epydoc/meta.yaml>`_

   


.. conda:package:: epydoc

   |downloads_epydoc| |docker_epydoc|

   :versions: 3.0.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_epydoc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epydoc

   and update with::

      conda update epydoc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/epydoc


.. |required_by_epydoc| conda:required_by:: epydoc
.. |downloads_epydoc| image:: https://img.shields.io/conda/dn/bioconda/epydoc.svg?style=flat
   :alt:   (downloads)
.. |docker_epydoc| image:: https://quay.io/repository/biocontainers/epydoc/status
   :target: https://quay.io/repository/biocontainers/epydoc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epydoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epydoc/README.html

