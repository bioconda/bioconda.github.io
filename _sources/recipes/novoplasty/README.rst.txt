.. title:: Package Recipe 'novoplasty'
.. highlight: bash


novoplasty
==========

.. conda:recipe:: novoplasty
   :replaces_section_title:

   

   :homepage: https://github.com/ndierckx/NOVOPlasty
   :license: 
   :recipe: /`novoplasty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoplasty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoplasty/meta.yaml>`_

   NOVOPlasty is a de novo assembler for short circular genomes.


.. conda:package:: novoplasty

   |downloads_novoplasty| |docker_novoplasty|

   :versions: 2.2.2

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-module-build`  

   :required~by: |required_by_novoplasty|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install novoplasty

   and update with::

      conda update novoplasty

   or use the docker container::

      docker pull quay.io/repository/biocontainers/novoplasty


.. |required_by_novoplasty| conda:required_by:: novoplasty
.. |downloads_novoplasty| image:: https://img.shields.io/conda/dn/bioconda/novoplasty.svg?style=flat
   :alt:   (downloads)
.. |docker_novoplasty| image:: https://quay.io/repository/biocontainers/novoplasty/status
   :target: https://quay.io/repository/biocontainers/novoplasty







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novoplasty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novoplasty/README.html

