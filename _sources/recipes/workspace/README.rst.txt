.. title:: Package Recipe 'workspace'
.. highlight: bash


workspace
=========

.. conda:recipe:: workspace
   :replaces_section_title:

   Workspace Overmind

   :homepage: http://an9.org/w/WorkspacePy
   :license: MIT License
   :recipe: /`workspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/workspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/workspace/meta.yaml>`_

   


.. conda:package:: workspace

   |downloads_workspace| |docker_workspace|

   :versions: 0.3.1

   :depends: :conda:package:`python` 2.7* :conda:package:`sprinkles` >=0.4.4 

   :required~by: |required_by_workspace|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install workspace

   and update with::

      conda update workspace

   or use the docker container::

      docker pull quay.io/repository/biocontainers/workspace


.. |required_by_workspace| conda:required_by:: workspace
.. |downloads_workspace| image:: https://img.shields.io/conda/dn/bioconda/workspace.svg?style=flat
   :alt:   (downloads)
.. |docker_workspace| image:: https://quay.io/repository/biocontainers/workspace/status
   :target: https://quay.io/repository/biocontainers/workspace







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/workspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/workspace/README.html

