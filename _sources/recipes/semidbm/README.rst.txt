.. title:: Package Recipe 'semidbm'
.. highlight: bash


semidbm
=======

.. conda:recipe:: semidbm
   :replaces_section_title:

   Cross platform \(fast\) DBM interface in python

   :homepage: https://github.com/jamesls/semidbm
   :license: BSD License
   :recipe: /`semidbm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semidbm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semidbm/meta.yaml>`_

   


.. conda:package:: semidbm

   |downloads_semidbm| |docker_semidbm|

   :versions: 0.5.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_semidbm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install semidbm

   and update with::

      conda update semidbm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/semidbm


.. |required_by_semidbm| conda:required_by:: semidbm
.. |downloads_semidbm| image:: https://img.shields.io/conda/dn/bioconda/semidbm.svg?style=flat
   :alt:   (downloads)
.. |docker_semidbm| image:: https://quay.io/repository/biocontainers/semidbm/status
   :target: https://quay.io/repository/biocontainers/semidbm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/semidbm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/semidbm/README.html

