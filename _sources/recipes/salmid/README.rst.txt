.. title:: Package Recipe 'salmid'
.. highlight: bash


salmid
======

.. conda:recipe:: salmid
   :replaces_section_title:

   Rapid tool to check taxonomic ID of single isolate samples. Currently only IDs Salmonella species and subspecies\, and some common contaminants \(Listeria\, Escherichia\).

   :homepage: https://github.com/hcdenbakker/SalmID
   :license: MIT
   :recipe: /`salmid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmid/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.1409766`

   


.. conda:package:: salmid

   |downloads_salmid| |docker_salmid|

   :versions: 

   :depends: 

   :required~by: |required_by_salmid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install salmid

   and update with::

      conda update salmid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/salmid


.. |required_by_salmid| conda:required_by:: salmid
.. |downloads_salmid| image:: https://img.shields.io/conda/dn/bioconda/salmid.svg?style=flat
   :alt:   (downloads)
.. |docker_salmid| image:: https://quay.io/repository/biocontainers/salmid/status
   :target: https://quay.io/repository/biocontainers/salmid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salmid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salmid/README.html

