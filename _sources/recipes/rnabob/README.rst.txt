.. title:: Package Recipe 'rnabob'
.. highlight: bash


rnabob
======

.. conda:recipe:: rnabob
   :replaces_section_title:

   fast RNA motif searching

   :homepage: 
   :license: 
   :recipe: /`rnabob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabob/meta.yaml>`_

   


.. conda:package:: rnabob

   |downloads_rnabob| |docker_rnabob|

   :versions: 2.2.1

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_rnabob|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnabob

   and update with::

      conda update rnabob

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnabob


.. |required_by_rnabob| conda:required_by:: rnabob
.. |downloads_rnabob| image:: https://img.shields.io/conda/dn/bioconda/rnabob.svg?style=flat
   :alt:   (downloads)
.. |docker_rnabob| image:: https://quay.io/repository/biocontainers/rnabob/status
   :target: https://quay.io/repository/biocontainers/rnabob







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnabob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnabob/README.html

