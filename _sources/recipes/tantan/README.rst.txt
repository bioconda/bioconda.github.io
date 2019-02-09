.. title:: Package Recipe 'tantan'
.. highlight: bash


tantan
======

.. conda:recipe:: tantan
   :replaces_section_title:

   tantan is a tool for masking simple regions \(low complexity and short\-period tandem repeats\) in biological sequences.

   :homepage: http://cbrc3.cbrc.jp/~martin/tantan/
   :license: GPLv3
   :recipe: /`tantan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan/meta.yaml>`_

   


.. conda:package:: tantan

   |downloads_tantan| |docker_tantan|

   :versions: 13

   :depends: 

   :required~by: |required_by_tantan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tantan

   and update with::

      conda update tantan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tantan


.. |required_by_tantan| conda:required_by:: tantan
.. |downloads_tantan| image:: https://img.shields.io/conda/dn/bioconda/tantan.svg?style=flat
   :alt:   (downloads)
.. |docker_tantan| image:: https://quay.io/repository/biocontainers/tantan/status
   :target: https://quay.io/repository/biocontainers/tantan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tantan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tantan/README.html

