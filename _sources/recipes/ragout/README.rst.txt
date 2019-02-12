.. title:: Package Recipe 'ragout'
.. highlight: bash


ragout
======

.. conda:recipe:: ragout
   :replaces_section_title:

   A tool for chromosome\-level scaffolding using multiple references

   :homepage: https://github.com/fenderglass/Ragout
   :license: GPLv3
   :recipe: /`ragout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragout/meta.yaml>`_

   


.. conda:package:: ragout

   |downloads_ragout| |docker_ragout|

   :versions: 2.1.1, 2.1, 2.0

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`networkx` 1.8 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-mailund-newick`  :conda:package:`sibelia`  

   :required~by: |required_by_ragout|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ragout

   and update with::

      conda update ragout

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ragout


.. |required_by_ragout| conda:required_by:: ragout
.. |downloads_ragout| image:: https://img.shields.io/conda/dn/bioconda/ragout.svg?style=flat
   :alt:   (downloads)
.. |docker_ragout| image:: https://quay.io/repository/biocontainers/ragout/status
   :target: https://quay.io/repository/biocontainers/ragout







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ragout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ragout/README.html

