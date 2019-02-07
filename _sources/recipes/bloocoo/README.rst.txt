.. title:: Package Recipe 'bloocoo'
.. highlight: bash


bloocoo
=======

.. conda:recipe:: bloocoo
   :replaces_section_title:

   Bloocoo is a k\-mer spectrum\-based read error corrector\, designed to correct large datasets with a very low memory footprint. As an example\, it can correct whole human genome re\-sequencing reads at 70 x coverage with less than 4GB of memory.

   :homepage: http://gatb.inria.fr/software/bloocoo/
   :license: aGPL v3
   :recipe: /`bloocoo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloocoo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloocoo/meta.yaml>`_

   


.. conda:package:: bloocoo

   |downloads_bloocoo| |docker_bloocoo|

   :versions: 1.0.7

   :depends: :conda:package:`libgcc`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_bloocoo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bloocoo

   and update with::

      conda update bloocoo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bloocoo


.. |required_by_bloocoo| conda:required_by:: bloocoo
.. |downloads_bloocoo| image:: https://img.shields.io/conda/dn/bioconda/bloocoo.svg?style=flat
   :alt:   (downloads)
.. |docker_bloocoo| image:: https://quay.io/repository/biocontainers/bloocoo/status
   :target: https://quay.io/repository/biocontainers/bloocoo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bloocoo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bloocoo/README.html

