.. title:: Package Recipe 'perl-task-weaken'
.. highlight: bash


perl-task-weaken
================

.. conda:recipe:: perl-task-weaken
   :replaces_section_title:

   Ensure that a platform has weaken support

   :homepage: http://metacpan.org/pod/Task-Weaken
   :license: perl_5
   :recipe: /`perl-task-weaken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-task-weaken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-task-weaken/meta.yaml>`_

   


.. conda:package:: perl-task-weaken

   |downloads_perl-task-weaken| |docker_perl-task-weaken|

   :versions: 1.06, 1.04

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-task-weaken|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-task-weaken

   and update with::

      conda update perl-task-weaken

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-task-weaken


.. |required_by_perl-task-weaken| conda:required_by:: perl-task-weaken
.. |downloads_perl-task-weaken| image:: https://img.shields.io/conda/dn/bioconda/perl-task-weaken.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-task-weaken| image:: https://quay.io/repository/biocontainers/perl-task-weaken/status
   :target: https://quay.io/repository/biocontainers/perl-task-weaken







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-task-weaken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-task-weaken/README.html

