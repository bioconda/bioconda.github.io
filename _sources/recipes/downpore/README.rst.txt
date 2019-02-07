.. title:: Package Recipe 'downpore'
.. highlight: bash


downpore
========

.. conda:recipe:: downpore
   :replaces_section_title:

   Suite of tools for use in genome assembly and consensus.

   :homepage: https://github.com/jteutenberg/downpore
   :license: MIT
   :recipe: /`downpore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/downpore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/downpore/meta.yaml>`_

   


.. conda:package:: downpore

   |downloads_downpore| |docker_downpore|

   :versions: 0.3.1, 0.2, 0.1.1

   :depends: 

   :required~by: |required_by_downpore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install downpore

   and update with::

      conda update downpore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/downpore


.. |required_by_downpore| conda:required_by:: downpore
.. |downloads_downpore| image:: https://img.shields.io/conda/dn/bioconda/downpore.svg?style=flat
   :alt:   (downloads)
.. |docker_downpore| image:: https://quay.io/repository/biocontainers/downpore/status
   :target: https://quay.io/repository/biocontainers/downpore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/downpore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/downpore/README.html

